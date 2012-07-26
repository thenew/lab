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
        duration: 1000,
        autostart: true
    },
    // constructor 
    initialize: function(options) {
        /*
         * Elements
         */
        this.setOptions(options);
        this.slider = $(this.options.slider);
        // Slides
        this.slider_list = this.slider.getElement('> ul');
        this.items = this.slider_list.getElements('> li');
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
        // Pages
        this.current_page = 1;
        this.max_page = this.items.length;
        this.layout = this.options.layout;
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
        // Anim
        var td = this.options.duration/1000;
        this.slider_list.setStyle('-' + this.prefix + '-transition-duration', td+'s');
        // Layout
        var sliderL = (this.layout == 'vertical') ? 'height' : 'width';
        this.slider_list.setStyle(sliderL, this.items.length*100 + '%');
        if(this.layout == 'vertical') {
            this.items.setStyles({
                height: this.slider.getStyle('height'),
                float: 'none'
            });
        }
        // Start
        this.initevents();
        this.fireEvent('initialize');
        if(this.options.autostart)
            this.start();
    },
    initevents:function()
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
    play:function(page) {
        var page = (page == undefined) ? this.current_page+1 : page;
        if(page > this.max_page) page = 1;
        else if(page <= 0) page = this.max_page;

        if(this.layout == 'horizontal') var anim_prop = 'left';
        else if(this.layout == 'vertical') var anim_prop = 'top';

        this.slider_list.setStyle(anim_prop, (page-1)*-100+'%')
        this.current_page = page;

        // Pagination
        if(this.pagination) {
            this.pagination.getElements('li').removeClass('current');
            this.pagination.getElements('li')[this.current_page-1].addClass('current');
        }

        this.fireEvent('next');

    },
    start:function() {
        this.timer = this.play.periodical(this.interval,this);
    }

});