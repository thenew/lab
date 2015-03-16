document.addEventListener('DOMContentLoaded', function(){

    (function() {

        function init() {
            var speed = 250,
                easing = mina.backout;

            [].slice.call ( document.querySelectorAll( '.svg-anim-box' ) ).forEach( function( el ) {


                // [].slice.call ( box.querySelectorAll( '.svg-anim' ) ).forEach( function( el ) {

                    var s = Snap( el.querySelector( 'svg' ) );
                    var paths = s.selectAll( 'path' );

                    var pathConfig = [];
                    paths.forEach( function(path,i) {
                        pathConfig[i] = {
                            from : path.attr( 'd' ),
                            to : el.getAttribute( 'data-path-hover-'+i )
                        };
                    });

                    el.addEventListener( 'mouseenter', function() {
                        paths.forEach( function(path,j) {
                            path.animate( { 'path' : pathConfig[j].to }, speed, easing );
                        });
                    } );

                    el.addEventListener( 'mouseleave', function() {
                        paths.forEach( function(path,k) {
                            path.animate( { 'path' : pathConfig[k].from }, speed, easing );
                        });
                    } );


                    // var s = Snap( el.querySelector( 'svg' ) ), path = s.select( 'path' ),
                    //     pathConfig = {
                    //         from : path.attr( 'd' ),
                    //         to : el.getAttribute( 'data-path-hover' )
                    //     };

                    // box.addEventListener( 'mouseenter', function() {
                    //     path.animate( { 'path' : pathConfig.to }, speed, easing );
                    // } );

                    // box.addEventListener( 'mouseleave', function() {
                    //     path.animate( { 'path' : pathConfig.from }, speed, easing );
                    // } );

                // } );


            } );
        }

        init();

    })();

});