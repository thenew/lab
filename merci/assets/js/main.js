
$(document).ready(function() {
    $('html').removeClass('no-js').addClass('js');

    var $photos = $('.photos');
    if($photos.length) {
            
        var indexes = [];

        var i;
        for (i = 1; i < 35; i++) {
            indexes.push(i);
        }
        shuffle(indexes);

        console.log('indexes: ', indexes);


        var j;
        for (j = 0; j < indexes.length; j++) {
            var index = indexes[j];
            var img = $('<div class="item" style="background-image:url(assets/medias/photos/'+index+'.jpg);">');
            $photos.append(img);
        }


        $('.photos').flickity({
            cellSelector: '.item',
            // imagesLoaded: true,
            // bgLazyLoad: 2,
            // lazyLoad: 2,
            autoPlay: 3000,
            pauseAutoPlayOnHover: false
        });
    }


    setTimeout(function() {
        $('html').addClass('js-anim');
    }, 1000);
});

$(window).load(function() {
    $('html').addClass('js-load');
});

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}