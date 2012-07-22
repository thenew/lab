window.addEvent('domready', function(){

    var fonslider = new Fon_slider({
        // layout: 'vertical'
    });

    fonslider.addEvents({
        onNext:function(event){
            console.log('next');
        },
        onNav:function(event){
            console.log('nav');
        }
    });
});