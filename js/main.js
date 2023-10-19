/*FUNCION PARA QUE LAS PALABRAS ESTEN DESPLEGANDO UNA EN SEGUIDA DE LA OTRA;*/

var typewriter = $('.text');

  if(typewriter.length) {

    function initTypewriter() {

     var typed = new Typed(".text", {
        strings: $(".text").attr("data-typewriter").split("|").map(function(e) {
          return e
        }),
        typeSpeed: 80,
        backSpeed: 75,
        startDelay: 1000,
        backDelay: 2000,
        loop: !0,
        loopcount: false,
        showCursor: false,
        callback: function(e){ } // call function after typing is done
        });
    };

    initTypewriter();

  };