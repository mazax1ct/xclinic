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
  $(".main-menu__link--pseudo").click(function() {
    $(".main-menu__link").addClass("hidden");
    $(this).next(".sub-menu").addClass("is-open");
  });

  //переход к первому уровню меню на мобильных
  $(".sub-menu__link--pseudo").click(function() {
    $(".main-menu__link:not(.main-menu__link--root)").removeClass("hidden");
    $(".sub-menu").removeClass("is-open");
  });

  //выпадающее меню второго уровня
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

  //слайдер новостей
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
});
