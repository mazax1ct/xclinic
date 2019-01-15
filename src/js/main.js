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
        eval('tmIn' + uid +
          ' = setTimeout(function(){ $("#"+uid+" > .sub-menu").slideDown(250); }, 500);');
        eval('if (typeof tmOut' + uid + ' !== "undefined") clearTimeout(tmOut' + uid + ');');
      },
      function() {
        var uid = $(this).attr('id');
        eval('clearTimeout(tmIn' + uid + ');');
        eval('tmOut' + uid +
          ' = setTimeout(function(){ $("#"+uid+" > .sub-menu").slideUp(250); }, 500);');
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
      auto: false,
      mobileFirst: true,
      slidesToShow: 1,
      infinite: true,
      edgeFriction: 0,
      arrows: false,
      dots: true,
    });
  }

  //слайдер "x-клиника сегодня"
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

  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      //"zoom",
      //"share",
      //"slideShow",
      //"fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    btnTpl: {
      close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
      "</button>",
    }
  });

  $('[data-fancybox="video"]').fancybox({
    buttons: [
      //"zoom",
      //"share",
      //"slideShow",
      //"fullScreen",
      //"download",
      //"thumbs",
      "close"
    ],
    btnTpl: {
      close:
      '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="Закрыть">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' +
      "</button>",
    }
  });
});
