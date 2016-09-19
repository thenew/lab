
$(document).ready(function() {
    $('html').removeClass('no-js').addClass('js');

    // cube
    setTimeout(function() {
       jQuery('.cube').addClass('is-reveal');
    }, 1500);

    var s, circ;

    //animation
    // var inAttr =  {r: 1, fill:'#450012'};
    // var outAttr = {r: 27.5, fill:'#450012'};
    var inAttr =  {width: 0.5, x: 20, fill:'#450012'};
    var outAttr = {width: 39, x: 0, fill:'#450012'};
    function animIn(){
        var _this = this;
        setTimeout(function() {
      _this.animate(inAttr, 1000, mina.easeinout, animOut);
        }, 4000);
    }
    function animOut(){
        var _this = this;
        setTimeout(function() {
      _this.animate(outAttr,1000, mina.easeinout, animIn);
        }, 4000);
    };

    // main
    s = Snap('#snap');
    circ = s.rect(10,0,20,60)
            .attr(inAttr);
            // .animate(outAttr, 1000, mina.easeinout, animIn);
    circPattern = circ
            .pattern(0,0,40,40)
            .attr({patternTransform:'rotate(38)'});
    s.rect(0,0,'100%','100%')
     .attr({fill: circPattern});

     setTimeout(function() {
        circ.animate(outAttr, 1000, mina.easeinout, animIn);
     }, 4000);



     setTimeout(function() {
        gifsParty();
     }, 5000);
});

$(window).load(function() {
    $('html').addClass('js-load');
});

var indexes = [0,1,2,3,4,5,6,7,8];
shuffle(indexes);
indexes.push(9);
var gifs = jQuery('.gif');


function gifsParty() {

    // jQuery('.gif').each(function(i, el) {

    // });

    displayGif(0);
}

function displayGif(i) {
    if(i >= indexes.length)
        return;

    // DEV
    // if(i > 0)
    //     return;

    setTimeout(function() {

        // console.log('i: '+i);
        // console.log('indexes: '+indexes[i]);

        var gif = gifs[indexes[i]];
        var top = getRandomInt(1,100);
        top = top + '%';
        var left = getRandomInt(1,100);
        left = left + '%';
        var zindex = 30+i;

        console.log('left: ', left);

        var maxwidth = 450 + getRandomInt(-20,20);
        maxwidth = maxwidth + 'px';

        jQuery(gif)
            .css({
                'z-index': zindex,
                'max-width': maxwidth,
                'top': top,
                'left': left
            })
            .addClass('in');

        i++;

        displayGif(i);

    }, 2500);
}

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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}