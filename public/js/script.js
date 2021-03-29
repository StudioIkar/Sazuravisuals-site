$('document').ready(function(){
  //PAGE ACCUEIL
    if($('body').hasClass('homepage')){
        $('.footer-page').hide();

      // Partie scroll
        $('section').not('.current').hide();
        var progressBarH = $('.progress-bar').height();
        var progressVal = 9.09090909091;
        var progressBarFinal;

        var scrollEnabled = true;


        function disableScroll() {
            // temporarily disable action
            scrollEnabled = false;

            // set a timer to enable again it 1 second from now
            setTimeout(function() {
                scrollEnabled = true;
            }, 750);
        }

        $('body').on('mousewheel', function(event) {
            $('section').not('.current').hide();
            var delta = event.deltaY;
            var data = $('.current').data('scroll');

 
          //up
            if(delta > 0){
              if(data !== 0 && scrollEnabled){
                  data = data-1;
                  $('section').removeClass('current');
                  $('section[data-scroll='+data+']').addClass('current');
                  $('section').not('.current').hide();
                  $('.current').fadeIn(1200);
                  progressBarFinal =  (progressBarH-progressVal);
                  progressBarH = progressBarFinal;
                  $('.progress-bar').height(progressBarFinal+'%');
                  disableScroll();
              }
          //Down
            }else{

              if(data !== 11 && scrollEnabled){


                  data = data+1;
                  $('section').removeClass('current');
                  $('section[data-scroll='+data+']').addClass('current');
                  $('section').not('.current').hide();
                  $('.current').fadeIn(1200);
                  progressBarFinal =  (progressBarH+progressVal);
                  progressBarH = progressBarFinal;
                  $('.progress-bar').height(progressBarFinal+'%');
                  disableScroll();


              }

            }
            if( data == 0 || data == 11){
              $('footer').fadeIn();
            }else{

              $('footer').hide();


            }
            switch (data) {
              case 0:
                $( "#menu-left li" ).css('color','white');
                break;
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
                $( "#menu-left li a" ).css('color','white');
                $( "#graphisme" ).css('color','#1E90FF');
                break;
              case 7:
              case 8:
              case 9:
                $( "#menu-left li a" ).css('color','white');
                $( "#photographie").css('color','#1E90FF');
                break;
              case 10:
                $( "#menu-left li a" ).css('color','white');
                $( "#boutique" ).css('color','#1E90FF');
                break;
              case 11:
                $( "#menu-left li a" ).css('color','white');
                break;
            }
        });
      //AFFICHAGE AU CLIC SUR MENU ACCUEIL
      $( "#menu-web a" ).click(function() {
        var idMenu = $(this).attr('id');
        switch(idMenu) {
          case 'graphisme':
            $('section').removeClass('current');
            $('section[data-scroll=1]').addClass('current');
            $('section').not('.current').hide();
            $('.current').fadeIn(1200);
            progressBarFinal = progressVal;
            progressBarH = progressBarFinal;
            $('.progress-bar').height(progressBarFinal+'%');
            $( "#menu-left li a" ).css('color','white');
            $( "#graphisme" ).css('color','#1E90FF');
            $('.footer-home').hide();
            disableScroll();

            break;
          case 'photographie':
            $('section').removeClass('current');
            $('section[data-scroll=7]').addClass('current');
            $('section').not('.current').hide();
            $('.current').fadeIn(1200);
            progressBarFinal =  (progressVal*7);
            progressBarH = progressBarFinal;
            $('.progress-bar').height(progressBarFinal+'%');
            $( "#menu-left li a" ).css('color','white');
            $( "#photographie" ).css('color','#1E90FF');
            $('.footer-home').hide();
            disableScroll();
            break;
          case 'boutique':
            $('section').removeClass('current');
            $('section[data-scroll=10]').addClass('current');
            $('section').not('.current').hide();
            $('.current').fadeIn(1200);
            progressBarFinal =  (progressVal*10);
            progressBarH = progressBarFinal;
            $('.progress-bar').height(progressBarFinal+'%');
            $( "#menu-left li a" ).css('color','white');
            $( "#boutique" ).css('color','#1E90FF');
            $('.footer-home').hide();
            disableScroll();
            break;    

        }

      });
    }else{
        $('.footer-home').hide();
    }


    // AUTRE PAGES

    //HOVER SUR LES IMG
    $('.gallery-img').hover(function() {
      $(this).find('img').css('opacity', '0.5');
      $(this).find('.img-title').fadeIn(300);
      $(this).find('.img-desc').fadeIn(300);
    }, function() {
      $(this).find('img').css('opacity', '1');
      $(this).find('.img-title').fadeOut(100);
      $(this).find('.img-desc').fadeOut(100);
    });

    $('.gallery-img-zamdane-5').hover(function() {
      $(this).find('img').css('opacity', '0.5');
      $(this).find('.img-title').fadeIn(300);
      $(this).find('.img-desc').fadeIn(300);
    }, function() {
      $(this).find('img').css('opacity', '1');
      $(this).find('.img-title').fadeOut(100);
      $(this).find('.img-desc').fadeOut(100);
    });

    //MODAL SUR LES IMG
    $( ".gallery-img-zamdane-5" ).click(function() {
      var src = $(this).attr("src");
      
      if($(this).attr('id')){
        $('.modal-photo').css('width', '1380px');
      }
      
      $(this).css('visibility', 'hidden');
      $('.modal-img').attr('src',src);
      $('.modal-photo').attr('src',src);
      $('#imgModal').modal('show');
    });
    $( ".gallery-img img" ).click(function() {
      var src = $(this).attr("src");
      
      if($(this).attr('id')){
        $('.modal-photo').css('width', '1380px');
      }
      
      $(this).css('visibility', 'hidden');
      $('.modal-img').attr('src',src);
      $('.modal-photo').attr('src',src);
      $('#imgModal').modal('show');
    });
    
    $('#imgModal').on('hidden.bs.modal', function (e) {
      $( ".gallery-img img" ).css('visibility','visible');
    })
});

$(".burger").click(function(){
    $(".header").toggleClass("active");
    $(".burger").toggleClass("active");
});