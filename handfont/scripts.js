
jQuery(window).load(function(e){

    var svg = jQuery('svg');

    svg.each(function(i, el) {

        var paths = jQuery(el).find('path:not(defs path)');

        // For each path, set the stroke-dasharray and stroke-dashoffset
        // equal to the path's total length, hence rendering it invisible
        paths.each(function(i, e) {
            e.style.strokeDasharray = e.style.strokeDashoffset = e.getTotalLength();
        });

        // Add each separate line animation to the timeline, animating the
        // stroke-dashoffset to 0. Use the duration, delay and easing to
        // achieve the perfect animation.
        setTimeout(function() {
            tl = new TimelineMax(),
            tl.to(paths.eq(0), 0.25, {strokeDashoffset: 0})
              .to(paths.eq(1), 0.15, {strokeDashoffset: 0}, "+=.15")
              ;
        }, 1000);

    });

});