jQuery(document).ready(function($){

  /* mcc forms - placeholders */
  /* application */
  // jQuery('.form--application .mcc-form input').each(function( key,value) {
  //   var e = jQuery(this);
  //   var text = e.closest('.mcc-value').prev('.mcc-label').find('.mcc-label-mini-div').text();
  //   text = text.replace(/\s+/g,' ');
  //   e.attr('placeholder',text);
  //   e.closest('.mcc-value').prev('.mcc-label').hide();
  // });
  // /* forms */
  // var myForm = jQuery('.form--review, .form--question, .form-cert');
  // myForm.find('.mcc-form input, .mcc-form textarea').each(function( key,value) {
  //   var e = jQuery(this);
  //   var text = e.closest('tr').find('.mcc-label').text();
  //   text = text.replace(/\s+/g,' ');
  //   e.attr('placeholder',text);
  //   myForm.find('table tr').find('td:first').hide();
  // });
  /* end for wordpress */


  /* табы в услугах */
  $('.services__list .menu-item a').click(function(e) {
      e.preventDefault();
      $(this).closest('.services').find('.menu-item').removeClass('current-menu-item');
      $(this).closest('.menu-item').addClass('current-menu-item');
      $(this).closest('.services').find('.service').hide();
      $( $(this.hash) ).show();
  });

  /* галерея "партнеры" */
  $('.reviews__gallery').slick({
    infinite: true,
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0'
  });

  /* плавный скролл */
  $('.down').click(function(e){
    e.preventDefault();
    var el = $(this).attr('href');
    $('body, html').animate({
    scrollTop: $(el).offset().top}, 500);
    return false;
  });

  //  галерея "отзывы"
  if ($(window).width() < 768) {
    $('.services__right').slick({
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }

  if ($(window).width() < 768) {
    $('.about__left').insertBefore($('.about__text'))
  }

  if ($(window).width() < 1200 && $(window).width() >= 768) {
    $('.info .row').slick({
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else if ($(window).width() < 768) {
    $('.info .row').slick({
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }




  if ($(window).width() < 1200 && $(window).width() >= 768) {
    $('.related_post').slick({
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else if ($(window).width() < 768) {
    $('.related_post').slick({
      infinite: true,
      dots: true,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }



  // /* Form in modal window */
  // $('*[data-form]').click( function(e){
  //   e.preventDefault();
  //   var suffix = $(this).data('form');
  //   $('body').css({'overflow':'hidden'});
  //   $('.overlay').show();
  //   var formClass = '.form--' + suffix;
  //   $('.overlay').find(formClass).fadeIn();
  // });
  // /* Close modal window */
  // $('.overlay__bg, .overlay__close').click( function(e){
  //   e.preventDefault();
  //   $('body').css({'overflow':'auto'});
  //   $(this).closest('.overlay').find('.form').fadeOut();
  //   $(this).closest('.overlay').fadeOut(400);
  // });



  /* hamburger */
  $('.hamburger').click(function(e) {
      e.preventDefault();
      $(this).closest('.nav').find('.nav__list').slideToggle();
  });
  // $(window).resize(function(){
  //   if ($(window).width() > 768) {
  //     $('.header__nav').show();
  //     $('.header__services').show();
  //   } else {
  //     $('.header__nav').hide();
  //     $('.header__services').hide();
  //   }
  // });

});

