window.addEvent('domready', function(){

    var currentPage = 'page1';
    var scrollAnchor = new Fx.Scroll(window);

    $$('.scrollAnchor').addEvent('click', function(e){
        e.stop();
        var classes = e.target.className;
        var arrayC = classes.split(' ');
        
        var href = e.target.getProperty('href');
        var anchor = href.split('#')[1];

        for (i=0;i<=arrayC.length;i++)
        {
            if(arrayC[i] == 'changePage') {
                currentPage = anchor;
                var buttonPage = true;
            } 
        }
        if(anchor == 'top'){
            scrollAnchor.toTop();
        }
        else {
            if(!buttonPage) {
                anchor = currentPage + '-' + anchor;
            }
            scrollAnchor.toElement($(anchor));
        }

	    // scrollAnchor.toBottom();
	    // scrollAnchor.scrollTo(x,y);
	    // scrollAnchor.toRight();

    });

});
