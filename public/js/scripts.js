/*
Author: Bonnard Valentin
*/

/*
    = Preloader
    = Animated scrolling / Scroll Up
    = Full Screen Slider
    = Sticky Menu
    = Back To Top
    = Countup
    = Progress Bar
    = More skill
    = Shuffle
    = Magnific Popup
    = Vidio auto play
    = Fit Vids
    = Google Map
    = FormValidation
    = Socket io Client-Side
    

*/

jQuery(function ($) {

    'use strict';

    /* ---------------------------------------------- /*
     * Preloader
    /* ---------------------------------------------- */

    $(window).ready(function () {
        $('#pre-status').fadeOut();
        $('#tt-preloader').delay(350).fadeOut('slow');
    });




    // -------------------------------------------------------------
    // Animated scrolling / Scroll Up
    // -------------------------------------------------------------

    (function () {
        $('a[href*=#]').bind("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top
            }, 1000);
            e.preventDefault();
        });
    }());



    // -------------------------------------------------------------
    // Full Screen Slider
    // -------------------------------------------------------------
    (function () {
        $(".tt-fullHeight").height($(window).height());

        $(window).resize(function () {
            $(".tt-fullHeight").height($(window).height());
        });

    }());


    // -------------------------------------------------------------
    // Sticky Menu
    // -------------------------------------------------------------

    (function () {
        $('.header').sticky({
            topSpacing: 0
        });

        $('body').scrollspy({
            target: '.navbar-custom',
            offset: 70
        })
    }());




    // -------------------------------------------------------------
    // Back To Top
    // -------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scroll-up').fadeIn();
            } else {
                $('.scroll-up').fadeOut();
            }
        });
    }());


    // -------------------------------------------------------------
    // Countup
    // -------------------------------------------------------------
    $('.count-wrap').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Progress Bar
    // -------------------------------------------------------------

    $('.skill-progress').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $.each($('div.progress-bar'), function () {
                $(this).css('width', $(this).attr('aria-valuenow') + '%');
            });
            $(this).unbind('inview');
        }
    });

    // -------------------------------------------------------------
    // More skill
    // -------------------------------------------------------------
    $('.more-skill').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $('.chart').easyPieChart({
                //your configuration goes here
                easing: 'easeOut',
                delay: 3000,
                barColor: '#68c3a3',
                trackColor: 'rgba(255,255,255,0.2)',
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }

            });
            $(this).unbind('inview');
        }
    });


    // -------------------------------------------------------------
    // Shuffle
    // -------------------------------------------------------------

    (function () {

        var $grid = $('#grid');

        $grid.shuffle({
            itemSelector: '.portfolio-item'
        });

        /* reshuffle when user clicks a filter item */
        $('#filter a').click(function (e) {
            e.preventDefault();

            // set active class
            $('#filter a').removeClass('active');
            $(this).addClass('active');

            // get group name from clicked item
            var groupName = $(this).attr('data-group');

            // reshuffle grid
            $grid.shuffle('shuffle', groupName);
        });

    
    }());


    // -------------------------------------------------------------
    // Magnific Popup
    // -------------------------------------------------------------

    (function () {
        $('.image-link').magnificPopup({

            gallery: {
                enabled: true
            },
            removalDelay: 300, // Delay in milliseconds before popup is removed
            mainClass: 'mfp-with-zoom', // this class is for CSS animation below
            type: 'image'

        });

    }());



    // -------------------------------------------------------------
    // Fit Vids
    // -------------------------------------------------------------
    (function () {
        $(".video-container").fitVids();
    }());

    /*
    
        // -------------------------------------------------------------
        // Vidio auto play
        // -------------------------------------------------------------
        (function () {
        
        /* Vimeo API: http://developer.vimeo.com/player/js-api 
        
            var iframe = document.getElementById('nofocusvideo');
            // $f == Froogaloop
            var player = $f(iframe);
    
            $('.modal').on('hidden.bs.modal', function () {
            player.api('pause');
            })
    
            $('.modal').on('shown.bs.modal', function () {
            player.api('play');
            })
        }());
    
    
    */

    // -------------------------------------------------------------
    // STELLAR FOR BACKGROUND SCROLLING
    // -------------------------------------------------------------

    $(window).load(function () {

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        } else {
            $.stellar({
                horizontalScrolling: false,
                responsive: true
            });
        }

    });


    // -------------------------------------------------------------
    // WOW JS
    // -------------------------------------------------------------

    (function () {

        new WOW({

            mobile: false

        }).init();

    }());

    // -------------------------------------------------------------
    // Google Map
    // -------------------------------------------------------------

    (function () {
        var myLatlng = new google.maps.LatLng(50.64402339999999, 3.0827761000000464);

        var styles = [
            {
                featureType: "landscape",
                stylers: [
                    { color: '#f7f7f7' }
                ]
            }, {
                featureType: "natural",
                stylers: [
                    { hue: '#00ffe6' }
                ]
            }, {
                featureType: "road",
                stylers: [
                    { hue: '#fff' },
                    { saturation: -70 }
                ]
            }, {
                featureType: "building",
                elementType: "labels",
                stylers: [
                    { hue: '' }
                ]
            }, {
                featureType: "poi", //points of interest
                stylers: [
                    { hue: '' }
                ]
            }
        ];

        var mapOptions = {
            zoom: 15,
            scrollwheel: true,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: false,
            styles: styles
        }
        var map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
        });

        var contentString = '' +
            '' +
            '';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.open(map, marker);
        });

    }());

    // -------------------------------------------------------------
    // FormValidation
    // -------------------------------------------------------------


    $(document).ready(function () {
        $('#Form').formValidation({
            framework: 'bootstrap',
            fields: {
                name: {
                    validators: {
                        notEmpty: {
                            message: "Le champ 'Nom' est requis"
                        },
                        stringLength: {
                            min: 6,
                            max: 50,
                            message: "Le champ 'Nom' doit être compris entre 6 et 50 charactères."
                        },
                        regexp: {
                            regexp: /^[a-zA-Z_ ]+$/,
                            message: "Ce champ ne peut contenir uniquement des lettres."
                        }
                    }
                },
                subject: {
                    validators: {
                        notEmpty: {
                            message: "Le champ 'Sujet' est requis"
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: "Le champ 'Sujet' doit être compris entre 6 et 30 charactères."
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: "Ce champ ne peut contenir uniquement des lettres, des chiffres."
                        }
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: "Le champ 'Email' est requis"
                        },
                        emailAddress: {
                            message: "Ceci n'est une addesse mail valide."
                        }
                    }
                },
                message: {
                    validators: {
                        notEmpty: {
                            message: "Le champ 'Message' est requis et ne peut pas être vide"
                        },
                        stringLength: {
                            max: 600,
                            message: "Le message doit faire moins de 600 charactères"
                        }
                    }
                }
            }

            // Allow click button for a form 
        }).on('err.field.fv', function (e, data) {
            data.fv.disableSubmitButtons(false);
        })
            .on('success.field.fv', function (e, data) {
                data.fv.disableSubmitButtons(false);
            });

    });

    // -------------------------------------------------------------
    // SOcket io Client-Side
    // -------------------------------------------------------------

    var socket = io.connect('http://localhost:8080' || window.location.hostname);
    $(document).ready(function () {
        socket.on('message', function (message) {
            toastr.info('Vous étes bien connecté', { timeOut: 1500 });
        })
    });
    socket.on('Send', function (message) {
        toastr.succes("L'email est envoyé, je vous recontacterai sous peu. Vous serez redirigé sur la page d'accueil.", { timeOut: 3000 });
    });
    socket.on('NotSend', function (message) {
        toastr.error("L'email n'est pas envoyé, vous serez redirigé sur la page d'accueil.", { timeOut: 3000 });
    })

});







