
$(document).ready(function() {
    $('html').removeClass('no-js').addClass('js');

    var s, circ;

    //animation
    var inAttr =  {r: 1, fill:'#450012'};
    var outAttr = {r: 27.5, fill:'#450012'};
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
    circ = s.circle(20,20,1)
            .attr(inAttr);
            // .animate(outAttr, 1000, mina.easeinout, animIn);
    circPattern = circ
            .pattern(0,0,40,40)
            .attr({patternTransform:'rotate(45)'});
    s.rect(0,0,'100%','100%')
     .attr({fill: circPattern});

     setTimeout(function() {
        circ.animate(outAttr, 1000, mina.easeinout, animIn);
     }, 4000);
});

$(window).load(function() {
    $('html').addClass('js-load');
});
