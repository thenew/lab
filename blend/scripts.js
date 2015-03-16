jQuery(document).ready(function() {
    var elements = $('[data-js="blend"]');
    elements.each(function(index) {
        var clone = $(this).find('img').clone();
        //.removeClass('red-hover').addClass('red-hover-color').css('opacity',.25);
        $(this).find('img').addClass('hidden');
        $(clone).insertAfter($(this).find('img')).addClass('red-hover-clone');
    });

    $('.red-hover-clone').on('mouseenter', function() {
        var blendImgSrc = "images/";
        var imgEl = $(this);
        blendImgSrc += imgEl.attr('data-blend');
        if(!blendImgSrc) {
            blendImgSrc += "red.gif";
        }
        var img = new Image();
        img.onload = function() {
            var blendImg = new Image();
            blendImg.onload = function() {
                Pixastic.process(img, "blend",
                    {
                        amount : 1,
                        mode : "multiply",
                        image : blendImg
                    }
                );
            }
            blendImg.src = blendImgSrc;
        }
        img.src = imgEl.attr('src');
        // imgEl.css({ display: 'none' });
        jQuery(img).addClass('hidden').insertAfter(imgEl);
        setTimeout(function() {
            imgEl.parent().find('canvas').removeClass('hidden');
        }, 100);
    });

    elements.on('mouseleave', function() {
        // $(this).find('.red-hover-clone').css({ display: 'block' });
        var canvas = $(this).find('canvas');
        canvas.addClass('hidden');
        setTimeout(function() {
            canvas.remove();
        }, 300);
    });
});