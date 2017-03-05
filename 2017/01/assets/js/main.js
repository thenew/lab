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

            $photos.imagesLoaded( function() {
                $('html').addClass('js-images-loaded');
            });

            updateArt();
        }
    }


    // interface
    $('.js-art-next').click( artNext )
    $('.js-art-previous').click( artPrevious )

    // Mousetrap.bind(['up', 'left'], artPrevious);
    Mousetrap.bind(['up', 'left'], artNext);
    Mousetrap.bind(['down', 'right'], artNext);

    function artNext() {
        if( artIndex < artIndexMax ) {
            artIndex++
        } else {
            artIndex = 0
        }
        updateArt()
    }

    function artPrevious() {
        if( artIndex ) {
            artIndex--
        } else {
            artIndex = artIndexMax
        }
        updateArt()
    }


    function updateArt() {
        console.log(artIndex);
        var $photos = $('.photos .item');
        $photos.removeClass('js-previous-active');
        if( $photos.filter('.js-active').length ) {
            $photos.filter('.js-active').addClass('js-previous-active');
            $photos.removeClass('js-active');
        }
        var $itemActive = $photos.eq(artIndex);
        $itemActive.addClass('js-active');

        // pagination
        $('.js-art-index').html(artIndex + 1)
        $('.js-art-max').html(artIndexMax + 1)

        // title
        var $title = $('.art-title .js-active')
        var $titleNext = $('.art-title .js-next-active')
        $titleNext.html($itemActive.data('title'))
        $title.addClass('js-previous-active').removeClass('js-active')
        $titleNext.addClass('js-active').removeClass('js-next-active')
        setTimeout(function() {
            $('.art-title .js-previous-active').addClass('js-next-active').removeClass('js-previous-active')
        }, 600);
    }






    // setTimeout(function() {
    //     $('html').addClass('js-anim');
    // }, 1000);
});

$(window).load(function() {
    $('html').addClass('js-load');
});
