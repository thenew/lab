// function which generate the scroll bar
// http://solutoire.com/2008/03/10/mootools-css-styled-scrollbar/
function makeScrollbar(container,content,scrollbar,handle,horizontal,ignoreMouse){

    // if element exist and if the scroll is need
    if (container && content.getHeight() > container.getHeight()) {
        container.addClass('scrollme');
        scrollbar.removeClass('hideme');
        var steps = (horizontal?(container.getScrollSize().x - container.getSize().x):(container.getScrollSize().y - container.getSize().y))
        var slider = new Slider(scrollbar, handle, {
            steps: steps,
            mode: (horizontal?'horizontal':'vertical'),
            onChange: function(step){
                // Scrolls the container element in x or y direction.
                var x = (horizontal?step:0);
                var y = (horizontal?0:step);
                container.scrollTo(x,y);
            }
        }).set(0);
        if( !(ignoreMouse) ){
            // Scroll the container element when the mousewheel is used within the
            // container or the scrollbar element. var step = 0
            $$(container, scrollbar).addEvent('mousewheel', function(e){
                e = new Event(e).stop();
                var step = slider.step - e.wheel * 30;  
                slider.set(step);
            });
        }
        // Stops the handle dragging process when the mouse leaves the document body.
        $(document.body).addEvent('mouseleave',function(){slider.drag.stop()});
    } else {
        scrollbar.addClass('hideme');
    }
}

function scrollBar01(){
    makeScrollbar($('container'), $('container-content'), $('scrollbar'), $('handle'));
}

// call generate function if the window is resized
window.addEvent('resize', function() {
    scrollBar01();
});

// hauteur du handle proportionnel


// Optionnal

var num = 0;

// Buttons
$('add').addEvent('click', function(event){
    add(event);
});
$('rm').addEvent('click', function(event){
    min(event);
});

// Keyboard Keys
window.addEvent('domready', function() {
 window.addEvent('keyup', keyup);
});
var keyup = function(e){
  if ('=' == e.key && e.shift || '+' == e.key && !e.shift || 'p' == e.key) {
    add(e);
  }
  if ('-' == e.key && !e.shift || '6' == e.key && !e.shift || 'm' == e.key) {
    min(e);
  }
}

// select
var oldStyle = 'default';
$('style').addEvent('change', function(e) {
    var newStyle = e.target.value;
    $('scrollbar').addClass(newStyle);
    $('scrollbar').removeClass(oldStyle);
    scrollBar01();
    oldStyle = newStyle;
});

// Actions
function add(e){
    e.stop();
    var elem = new Element('li', {html: num+' Janvier'}).inject($('container-content'));
    scrollBar01();
    num++;
    if(num == 1){$('container').addClass('almost');}
    else if(num == 5){$('container').removeClass('empty').removeClass('almost');}
}
function min(e){
    e.stop();
    $('container-content').getElement('li').destroy();
    scrollBar01();
    num--;
    if(num == 0){$('container').addClass('empty');}
}