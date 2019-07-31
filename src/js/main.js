function getName (str){
  if (str.lastIndexOf('\\')){
    var i = str.lastIndexOf('\\')+1;
  }else{
    var i = str.lastIndexOf('/')+1;
  }
  var filename = str.slice(i);
  var uploaded = document.getElementById("fileformlabel");
  uploaded.innerHTML = filename;
}

$(document).ready(function() {
  //убираем пометку о том что js выключен
  $('body').removeClass('no-js');

  //открытие/закрытие главного меню
  $(".js-menu-opener").click(function() {
    $(this).toggleClass("is-active");
    $(".main-menu").toggleClass("is-open");
    $("body").toggleClass("overflow");
  });

  //переход ко второму уровню меню на мобильных
  $(".js-sub-menu-opener").click(function() {
    if(!$(this).parent().hasClass("is-active")){
      $(this).parent().addClass("is-active");
      $(".main-menu__list-item:not(.main-menu__list-item.is-active)").addClass("hidden");
      $(this).addClass("is-active");
      $(this).siblings(".sub-menu").addClass("is-open");
      $(".main-menu").addClass("sub-is-open");
    } else {
      $(this).parent().removeClass("is-active");
      $(".main-menu__list-item").removeClass("hidden");
      $(this).removeClass("is-active");
      $(this).siblings(".sub-menu").removeClass("is-open");
      $(".main-menu").removeClass("sub-is-open");
    }
  });

  //выпадающее меню второго уровня на десктопах
  if ($("body").width() > 1199) {
    $('.js-dropdown').hover(
      function() {
        var uid = $(this).attr('id');
        $("#" + uid + " > .sub-menu").delay(400).slideDown(150);
      },
      function() {
        var uid = $(this).attr('id');
        $("#" + uid + " > .sub-menu").stop(true,true).delay(400).slideUp(150);
      }
    );
  }

  //главный баннер-слайдер
  if ($('.js-main-slider').length) {
    $('.js-main-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-next__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>'
          }
        }
      ]
    });
  }

  //открытие/закрытие меню в футере
  $(".js-footer-menu-opener").click(function() {
    $(this).toggleClass("is-active");
    $(".footer-menu").toggleClass("is-open");
  });

  //слайдер партнеров
  if ($('.js-partners-slider').length) {
    $('.js-partners-slider').slick({
      auto: false,
      infinite: false,
      edgeFriction: 0,
      dots: true,
      mobileFirst: true,
      arrows: false,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 959,
          settings: {
            slidesToScroll: 5,
            slidesToShow: 5,
            dots: false
          }
        },
        {
          breakpoint: 599,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 479,
          settings: {
            slidesToScroll: 2,
            slidesToShow: 2
          }
        }
      ]
    });
  }

  //слайдер последних новостей
  if ($('.js-last-news-slider').length) {
    $('.js-last-news-slider').slick({
      auto: false,
      infinite: false,
      edgeFriction: 0,
      dots: true,
      mobileFirst: true,
      arrows: false,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 959,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2
          }
        }
      ]
    });

    //фильтрация списка новостей и переключение ссылки на раздел
    var filtered = false;

    $('.js-filter').on('click', function() {
      if (filtered === false) {
        $('.js-last-news-slider').slick('slickFilter', $('.last-news-slider__slide[data-type=' + $(this).attr("data-type") + ']'));
        $(".js-filter").removeClass("is-active");
        $(".js-filter-remove").removeClass("is-active");
        $(this).addClass("is-active");
        $(".js-news-link").attr("href", $(this).attr("data-link"));
        filtered = true;
      } else {
        $('.js-last-news-slider').slick('slickUnfilter');
        filtered = false;
        $('.js-last-news-slider').slick('slickFilter', $('.last-news-slider__slide[data-type=' + $(this).attr("data-type") + ']'));
        $(".js-filter").removeClass("is-active");
        $(".js-filter-remove").removeClass("is-active");
        $(this).addClass("is-active");
        $(".js-news-link").attr("href", $(this).attr("data-link"));
        filtered = true;
      }
    });

    $('.js-filter-remove').on('click', function() {
      if (filtered === true) {
        $('.js-last-news-slider').slick('slickUnfilter');
        $(".js-filter").removeClass("is-active");
        $(this).addClass("is-active");
        $(".js-news-link").attr("href", $(this).attr("data-link"));
        filtered = false;
      }
    });
  }

  //слайдер "x-клиника сегодня"
  if ($('.js-today-slider').length) {
    $('.js-today-slider').slick({
      adaptiveHeight: true,
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
    });
  }

  //слайдер "о клинике"
  if ($('.js-about-slider').length) {
    $('.js-about-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
      fade: true
    });
  }

  //переключение табов программ
  $('.js-programs-tab').on('click', function() {
    $(".js-programs-tab").removeClass("is-active");
    $(this).addClass("is-active");
    $('.programs-tab').removeClass("is-active");
    $('.programs-tab[data-type=' + $(this).attr("data-type") + ']').addClass("is-active");
  });

  //fancy
  if ($('[data-fancybox="gallery"]').length) {
    $('[data-fancybox="gallery"]').fancybox({
      buttons: [
        "close"
      ],
      btnTpl: {
        close:
          '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
          "</button>",
        arrowLeft:
          '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="Назад">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' +
          "</button>",
        arrowRight:
          '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="Вперёд">' +
          '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' +
          "</button>",
      }
    });
  }

  if ($('[data-fancybox="video"]').length) {
    $('[data-fancybox="video"]').fancybox({
      buttons: [
        "close"
      ],
      btnTpl: {
        close:
        '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
        "</button>",
      }
    });
  }

  //слайдер в блоге
  if ($('.js-blog-slider').length) {
    $('.js-blog-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: false,
      asNavFor: '.js-blog-slider-nav'
    });

    $('.js-blog-slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.js-blog-slider',
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: '0',
      focusOnSelect: true
    });
  }

  //переключение картинок номеров в списке
  $('.room__thumbs .room__thumb').click(function() {
    $(this).parent('.room__thumbs').children('.room__thumb').removeClass('is-active');
    $(this).addClass('is-active');
    $(this).parent('.room__thumbs').siblings('.room__main-image').find('img').attr('src', $(this).attr('data-image'));
  });

  //переключение картинок номера в деталке
  $('.room-detail__thumbs .room-detail__thumb').click(function() {
    $(this).parent('.room-detail__thumbs').children('.room-detail__thumb').removeClass('is-active');
    $(this).addClass('is-active');
    $('.room-detail__image').find('img').attr('src', $(this).attr('data-image'));
  });

  //главный баннер-слайдер
  if ($('.js-reviews-slider').length) {
    $('.js-reviews-slider').slick({
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            arrows: true,
            prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-next__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>'
          }
        }
      ]
    });
  }

  //переключение табов болезней
  $('.js-tab').on('click', function() {
    $(".js-tab").removeClass("is-active");
    $(this).addClass("is-active");
    $('.tab').removeClass("is-active");
    $('.tab[data-type=' + $(this).attr("data-type") + ']').addClass("is-active");
  });

  //открытие попапа
  if ($("[data-fancybox='form-popup']").length) {
    $("[data-fancybox='form-popup']").fancybox({
      touch: false,
      infobar: false,
      smallBtn: false,
      buttons: ["close"],
      animationEffect: false,
      arrows: false,
      btnTpl: {
        close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
      "</button>",
      }
    });
  }

  //слайдер блока "смотрите также"
  if ($('.js-also-list').length) {
    $('.js-also-list').slick({
      auto: false,
      infinite: true,
      edgeFriction: 0,
      dots: false,
      mobileFirst: true,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev" title="Назад"><svg class="slick-prev__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next" title="Вперед"><svg class="slick-next__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToScroll: 3,
            slidesToShow: 3
          }
        }
      ]
    });
  }

  //запуск плавающего левого меню
  if ($("#article-nav").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 120
        });

        //навигация по якорям
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -120
        });
      }, 100);
    }

    //если блок для контента пустой, открепляем плавающее левое меню
    if ($(".js-content-with-sticky").length) {
      if ($('.js-content-with-sticky').html().trim() === '') {
        $(".js-sticky-block").trigger("sticky_kit:detach");
      }
    }
  }

  //открытие/закрытие тарифов программы
  $('.js-tarif-open').on('click', function() {
    $(this).toggleClass("is-active");
    $(this).next('.tarifs__cells').toggleClass('is-open');
    return false;
  });

  //открытие/закрытие групп процедур программы
  $('.js-group-opener').on('click', function() {
    $(this).toggleClass('is-active');

    if($('body').width() < 768) {
      $(this).parent('.tarifs__cell--separator').next('.tarifs__cells-group').toggleClass("is-open");
    } else {
      $('.tarifs__cells-group[data-target=' + $(this).attr("data-href") + ']').toggleClass("is-open");
    }
    return false;
  });
});

//открепляем и перезапускаем прилипающий блок при резайзе
$(window).resize(function() {
  if ($("#article-nav").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 120
        });

        //навигация по якорям в новости
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -120
        });
      }, 100);
    }
  }
});

//открепляем и перезапускаем прилипающий блок при повороте устройства
$(window).on("orientationchange", function(event) {
  if ($("#article-nav").length) {
    if ($("body").width() >= 768) {
      $(".js-sticky-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-sticky-block").stick_in_parent({
          offset_top: 120
        });

        //навигация по якорям в новости
        $("#article-nav").ddscrollSpy({
          scrolltopoffset: -120
        });
      }, 100);
    }
  }
});
