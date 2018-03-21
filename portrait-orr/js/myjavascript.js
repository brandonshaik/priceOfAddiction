//Alcohol Pop_up Instructions
      var $plansHolders_a = $('#highs_a, #lows_a').hide();
          $('#highs_a').show();
          $('.highsandlows_a').click(function() {
            var href = $(this).attr('href');
              console.log(href);
            $plansHolders_a.hide();
              console.log(href);
            $(href).show();
          });


      ;(function($) {
        $(function() {
            $('#alcohol-button').bind('click', function(e) {
                e.preventDefault();
                $('#element_to_pop_up_alcohol').bPopup({
                	follow: [true, true], //x, y
            		position: [100, 40] //x, y
                    , modalClose: true
                    , modalColor: 'blue'
                    , transition:'slideIn'
                    , transitionClose:'slideBack'

                });
            });
         });
     })(jQuery);


//Alcohol Pop_up Instructions

//Crack Pop_up Instructions
      var $plansHolders_c = $('#highs_c, #lows_c').hide();
          $('#highs_c').show();
          $('.highsandlows_c').click(function() {
            var href = $(this).attr('href');
              console.log(href);
            $plansHolders_c.hide();
              console.log(href);
            $(href).show();
          });


      ;(function($) {
        $(function() {
            $('#crack-button').bind('click', function(e) {
                e.preventDefault();
                $('#element_to_pop_up_crack').bPopup({
                  follow: [true, true], //x, y
                position: [100, 40] //x, y
                    , modalClose: true
                    , modalColor: '#872237'
                    , transition:'slideIn'
                    , transitionClose:'slideBack'

                });
            });
         });
     })(jQuery);

//Crack Pop_up Instructions

//Meth Pop_up Instructions 
      var $plansHolders_m = $('#highs_m, #lows_m').hide();
          $('#highs_m').show();
          $('.highsandlows_m').click(function() {
            var href = $(this).attr('href');
              console.log(href);
            $plansHolders_m.hide();
              console.log(href);
            $(href).show();
          });


      ;(function($) {
        $(function() {
            $('#meth-button').bind('click', function(e) {
                e.preventDefault();
                $('#element_to_pop_up_meth').bPopup({
                  follow: [true, true], //x, y
                position: [100, 40] //x, y
                    , modalClose: true
                    , modalColor: '#872237'
                    , transition:'slideIn'
                    , transitionClose:'slideBack'

                });
            });
         });
     })(jQuery);
//Meth Pop_up Instructions

//heroin Pop_up Instructions 
      var $plansHolders_h = $('#highs_h, #lows_h').hide();
          $('#highs_h').show();
          $('.highsandlows_h').click(function() {
            var href = $(this).attr('href');
              console.log(href);
            $plansHolders_h.hide();
              console.log(href);
            $(href).show();
          });


      ;(function($) {
        $(function() {
            $('#heroin-button').bind('click', function(e) {
                e.preventDefault();
                $('#element_to_pop_up_heroin').bPopup({
                  follow: [true, true], //x, y
                position: [100, 40] //x, y
                    , modalClose: true
                    , modalColor: '#872237'
                    , transition:'slideIn'
                    , transitionClose:'slideBack'

                });
            });
         });
     })(jQuery);
//heroin Pop_up Instructions

//marijuana Pop_up Instructions 
      var $plansHolders_w = $('#highs_w, #lows_w').hide();
          $('#highs_w').show();
          $('.highsandlows_w').click(function() {
            var href = $(this).attr('href');
              console.log(href);
            $plansHolders_w.hide();
              console.log(href);
            $(href).show();
          });


      ;(function($) {
        $(function() {
            $('#marijuana-button').bind('click', function(e) {
                e.preventDefault();
                $('#element_to_pop_up_marijuana').bPopup({
                  follow: [true, true], //x, y
                position: [100, 40] //x, y
                    , modalClose: true
                    , modalColor: '#872237'
                    , transition:'slideIn'
                    , transitionClose:'slideBack'

                });
            });
         });
     })(jQuery);
//marijuana Pop_up Instructions


