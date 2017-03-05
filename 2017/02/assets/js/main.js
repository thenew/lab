$(document).ready(function() {
    $('html').removeClass('no-js').addClass('js');

    var artIndex = 0;
    var artIndexMax = 0;


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
                    $el = $('<div class="item" data-title="'+title+'" style="background-image:url(\'images/'+el+'\');">');
                } else if( el.indexOf('.mp4') !== -1 ) {
                    $el = $('<div class="item" data-title="'+title+'"><video src="images/'+el+'" class="video" autoplay loop muted></div>');
                }

                $photos.append($el);
            })

            $('.photos .item').addClass('fade');

            $photos.imagesLoaded( function() {
                $('html').addClass('js-images-loaded');
                $($('.photos .item').get().reverse()).each(function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('in');

                        if(i == $('.photos .item').length - 1) {
                            $('html').addClass('js-animation-complete');
                        }
                    }, (i*200 - i*15) );
                });
            });

            ui();
        }
    }


    function ui() {
        var $photos = $('.photos .item');
            var $title = $('.art-title .js-active')

        $photos.on('mouseenter', function(e) {

            var title = $(this).data('title')

            title = title.replace(' ', '•');
            title = title.replace('[0]', '⓪');

            var $title = $('.art-title .title')

                        $title.removeClass('js-active')
            $title.addClass('js-active')

            // var $titleNext = $('.art-title .js-next-active')
            $title.html(title)
            // $title.addClass('js-previous-active').removeClass('js-active')
            // $titleNext.addClass('js-active').removeClass('js-next-active')

            // $('.art-title .js-previous-active').addClass('js-next-active').removeClass('js-previous-active')

        })

        $('.sidebar .ts').each(function(i, el) {

            setTimeout(function() {
                var intervalId = window.setInterval(function() {
                    $(el).toggleClass('toggle');
                }, 100);
            }, 50 * i);
        })

        $('.photos .item').each(function(i, el) {

            setTimeout(function() {
                var intervalId = window.setInterval(function() {
                    $(el).toggleClass('toggle');
                }, getRandomInt(150, 300));
            }, 100 * i);
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