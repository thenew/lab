/** 
 * 
 * Licence MIT
 * @author thenew <http://thenew.fr>
 * @version 0.1
 */


/*
<div id="fon-slider">
    <ul>
        <li></li>
    </ul>
    <ul class="pagination"></ul>
    <nav class="fon-slider-nav">
        <a href="#" class="prev"></a>
        <a href="#" class="next"></a>
    </nav>
</div>
*/

var Fon_slider = new Class({
    Implements: [Options,Events],
    options:{ 
        slider: 'fon-slider',
        pagination: '.pagination',
        nav: 'nav',
        layout: 'horizontal',
        interval: 3000,
        duration: 400,
        css_transition: true,
        autostart: true
    },
    initialize: function(options) {
        this.setOptions(options);
        // Start
        this.initevents();
        this.fireEvent('initialize');
        if(this.options.autostart)
            this.start();
    },
    setOptions: function(options) {
        // Overwrites this.options values with options
        this.options = Object.merge(this.options, options);

        /*
         * Elements
         */
        this.slider = $(this.options.slider);
        // Slides
        this.slider_list = this.slider.getElement('> ul');
        this.items = this.slider_list.getElements('> li');
        if (this.items.length < 2)
            return this;
        // Pagination : child or brother of slider
        if(this.options.pagination) {
            this.pagination = this.slider.getElement(this.options.pagination);
            this.pagination = (this.pagination) ? this.pagination : this.slider.getSiblings(this.options.pagination)[0];
        }
        // Nav : child or brother of slider
        if(this.options.nav) {
            this.nav = this.slider.getElement(this.options.nav);
            this.nav = (this.nav) ? this.nav : this.slider.getSiblings(this.options.nav)[0];
        }
        // Timer
        this.timer;
        this.interval = this.options.interval;
        this.autostart = this.options.autostart;
        // Pages
        this.current_page = 0;
        this.max_page = this.items.length-1;
        // Globals
        var fon_slider = this;
        this.prefix = (Browser.Engine.gecko ? 'moz' : (Browser.Engine.webkit ? 'webkit' : 'o'));

        /*
         * Actions
         */
        // Pagination
        if(this.pagination) {
            this.items.each(function(item, index){
                var a = new Element('a', {href: '#'});
                var li = new Element('li', {'class': (index == 0) ? 'current' : ''});
                a.inject(li);
                fon_slider.pagination.grab(li);
            });
        }

        // Layout & Anim
        switch(this.options.layout) {
            case "horizontal":
            case "vertical":
                // Add morph if !css_transition or IE < 9
                if(!this.options.css_transition || 10 > this.ie()) {
                    this.slider_list.set('morph', {
                        duration: this.options.duration,
                        unit: '%'
                    });
                }
                if("horizontal" == this.options.layout)
                    var prop = "width";
                else
                    var prop = "height";
                this.slider_list.setStyle(prop, this.items.length*100 + '%');
                break;
            case "fade":
                this.items.setStyles({'opacity': 0, 'z-index': 1});
                this.items[0].setStyles({'opacity': 1, 'z-index': 2});
                this.zindex_max = 2;
                break;
        }
    },
    initevents: function()
    {
        var fon_slider = this;
        this.slider.addEvents({
            mouseenter:function(){
                fon_slider.pause = true;
                clearInterval(fon_slider.timer);
            },
            mouseleave:function(){
                fon_slider.pause = false;
                fon_slider.start();
            }
        });
        // Pagination bullets
        if(this.pagination) {
            this.pagination.getElements('a').each(function(item, index){
                item.addEvent('click', function(event){
                    event.stop();
                    clearInterval(fon_slider.timer);
                    fon_slider.play(index+1);
                    if(!fon_slider.pause) fon_slider.start();
                });
            });
        }
        // Nav : prev and next
        if(this.nav) {
            this.nav.getElements('a').each(function(item, index){
                item.addEvent('click', function(event){
                    event.stop();
                    var new_page = (this.hasClass('prev')) ? fon_slider.current_page-1 : fon_slider.current_page+1;
                    clearInterval(fon_slider.timer);
                    fon_slider.play(new_page);
                    if(!fon_slider.pause) fon_slider.start();
                    fon_slider.fireEvent('nav');
                });
            });
        }

    },
    play: function(page) {
        var page = (page == undefined) ? this.current_page+1 : page;
        if(page > this.max_page) page = 0;
        else if(page <= 0) page = this.max_page;

        // anim
        switch (this.options.layout) {
            case "horizontal":
                if(!this.options.css_transition || (this.ie() && 10 > this.ie()) )
                    this.slider_list.morph({left: (page)*-100});
                else
                    this.slider_list.setStyle('left', (page)*-100+'%');
                break;
            case "vertical":
                if(!this.options.css_transition || (this.ie() && 10 > this.ie()) )
                    this.slider_list.morph({top: (page)*-100});
                else
                    this.slider_list.setStyle('top', (page)*-100+'%');
                break;
            case "fade":


                var fs = this;
                var zindex_max = this.zindex_max;
                var current_page = this.current_page;
                var fade_fx = new Fx.Morph( fs.items[page], {
                        transition: 'cubic:in:out',
                        duration: fs.options.duration,
                        link: 'chain',
                        onStart: function(){
                            fs.items[page].setStyles({
                                'opacity': 0,
                                'z-index': zindex_max+1
                            });
                        },
                        onComplete: function(){
                            fs.items[current_page].setStyles({ 'opacity': 0 });
                        }
                });
                fade_fx.start({ 'opacity': 1 });
                this.zindex_max++;

                break;
        }
        this.items.removeClass('current');
        this.items[page].addClass('current');

        // update current page
        this.current_page = page;
        this.fireEvent('next');

        // Pagination
        if(this.pagination) {
            this.pagination.getElements('li').removeClass('current');
            this.pagination.getElements('li')[this.current_page].addClass('current');
        }

    },
    start: function() {
        if(this.autostart)
            this.timer = this.play.periodical(this.interval,this);
    },
    // functions
    ie: function() {
        var v = 3,
            div = document.createElement('div'),
            all = div.getElementsByTagName('i');
        while (
            div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
            all[0]
        );
        return v > 4 ? v : null;
    }
});