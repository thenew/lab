$(document).ready(function() {
    $('html').removeClass('no-js').addClass('js');

    var artIndex = 0;
    var artIndexMax = 0;

    var path = $('path')
    var svgTl = new TimelineMax({
    repeat:0,
    paused: 1
    });

    svgTl
    .set(path, {
    drawSVG: '0 0'
    })

    svgTl
    .to(path, 4, {
    drawSVG: '0 75%'
    })



    // populate inages
    $.ajax({
        url: 'ajaximages.php',
        dataType: 'json',
        success: function(data) {

            initPhotos(data)
        }
    });


    function initPhotos(data) {

        var $photos = $('.photos');
        if($photos.length) {

            artIndexMax = data.length - 1;

            data = _.shuffle(data);
            jQuery.each(data, function(i, el) {

                var $el;
                var title = el.replace('.jpg', '').replace('.png', '');

                // image
                if( el.indexOf('.jpg') !== -1  || el.indexOf('.png') !== -1 ) {
                    $el = $('<div class="item"><div class="item-photo" data-title="'+title+'" style="background-image:url(\'images/'+el+'\');"></div><div class="art-title">'+title+'</div></div>');
                } else if( el.indexOf('.mp4') !== -1 ) {
                    $el = $('<div class="item" data-title="'+title+'"><video src="images/'+el+'" class="video" autoplay loop muted></div>');
                }

                $photos.append($el);
            })

            $('.photos .item').addClass('fade');

            $photos.imagesLoaded( function() {
                $('html').addClass('js-images-loaded');
                $('.photos .item').each(function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('in');

                        if(i == $('.photos .item').length - 1) {
                            $('html').addClass('js-animation-complete');


                            TweenMax.set('svg', {
                              visibility:'visible'
                            })
                            svgTl.restart()
                        }
                    }, (i*200 - i*10) );
                });
            });

            ui();
        }
    }


    function ui() {
        var $photos = $('.photos .item');

        $('.photos .item').each(function(i, el) {

        })

    }



});

$(window).load(function() {
    $('html').addClass('js-load');
});


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}