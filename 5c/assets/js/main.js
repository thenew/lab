
$window = jQuery(window);
$body = jQuery('body');
$clrzCarre = jQuery('.clrz-carre');
$line = jQuery('.clrz-line');
$cinq1 = jQuery('.cinq1');
$cinq2 = jQuery('.cinq2');
$carre = jQuery('.carre');
$text = jQuery('.text');

openTl = new TimelineMax({
  repeat:0,
  paused: 1,
  onComplete: function() {

    clrzTl.play();

    cinqTl.play();


    setInterval(function(){
        colorz();
    }, 2000);

  }
});

    clrzTl = new TimelineMax({
      delay:0,
      repeat:-1,
      repeatDelay: .5,
      paused: 1
    });

    cinqTl = new TimelineMax({
      delay:0,
      repeat:-1,
      repeatDelay: .5,
      paused: 1
    });


$(document).ready(function() {
    $('html').removeClass('no-js').addClass('js');


    openTl
    .set($line, {
      drawSVG:'0% 0%'
    })
    .set($cinq1, {
      drawSVG:'0% 0%'
    })
    .set($carre, {
      drawSVG:'0% 0%'
    })
    .set($cinq2, {
      drawSVG:'100% 100%'
    })
    .set([$clrzCarre, $text], {
      opacity:0
    })
    .to($carre, 0.5, {
      drawSVG:'0% 100%'
    })
    .to($clrzCarre, 0.5, {
      opacity:1
    })
    .to($text, 0.5, {
      opacity:1
    })




    clrzTl
    .set($line, {
      drawSVG:'0% 0%'
    })
    .to($line, 1, {
      drawSVG:'0% 100%',
      ease:Power3.easeInOut
    })
    .to($line, 1, {
      drawSVG:'100% 100%',
      ease:Power3.easeInOut
    })



    cinqTl
    .set($cinq1, {
      drawSVG:'0% 0%'
    })
    .set($cinq2, {
      drawSVG:'100% 100%'
    })
    .to($cinq1, 1, {
      drawSVG:'0% 100%'
    })
    .to($cinq2, 1, {
      drawSVG:'100% 0%',
      ease:Power3.easeInOut
    }, "-=0.6")
    .to($cinq2, 1, {
      drawSVG:'100% 100%',
      ease:Power3.easeInOut
    })
    .to($cinq1, 1, {
      drawSVG:'0% 0%',
      ease:Power3.easeInOut
    }, "-=0.6")


    colorz();

});

$(window).load(function() {
    $('html').addClass('js-load');

    openTl.timeScale(0.5);
    openTl.play();

});


function colorz() {

    var $textSvg = jQuery('.text svg');
    var $cinqSvg = jQuery('.cinq svg');
    var $clrzSvg = jQuery('.clrz svg');

    var colorz = [
        '#F10246',
        '#270091',
        '#4C0055',
        '#E60B6E',
        '#3A4B31',
        '#4C58A7',
        '#F3993B',
        '#00FFFF',
    ];

    var bgColorz = [
        '#A8C8D2',
        '#CAC7BE',
        '#BAAF82',
        '#F5F803',
        '#5BA6B5',
        '#9A9A95',
        '#FFFFFF',
        '#F4CE33',
    ];
    var bgColor = bgColorz[Math.floor(Math.random()*bgColorz.length)];

    $body.attr('style', 'background-color:'+bgColor+'');


    var textColor = colorz[Math.floor(Math.random()*colorz.length)];

    $textSvg.attr('style', 'fill:'+textColor+'');


    var lineColor = colorz[Math.floor(Math.random()*colorz.length)];
    while(textColor == lineColor) {
        lineColor = colorz[Math.floor(Math.random()*colorz.length)];
    }

    $clrzSvg.attr('style', 'stroke:'+lineColor+'');
    $cinqSvg.attr('style', 'stroke:'+lineColor+'');

}