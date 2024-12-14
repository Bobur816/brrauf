$(window).on("load", () => {
  new WOW({
    offset: 50,
    mobile: false,
  }).init();
  // ______________________________header__scroll_________________________________
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2 ? $(".header").addClass("header__scrolled") : $(".header").removeClass("header__scrolled");

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2 ? $(".header").addClass("header__scrolled") : $(".header").removeClass("header__scrolled");
  });

  // ______________________________.mobile__toggler________________________________

  $(".mobile-nav__open").on("click", function () {
    $(".mobile-nav").fadeIn(300);
    setTimeout(() => {
      $(".mobile-nav__wrapper").slideDown(300);
    }, 300);
    setTimeout(() => {
      $(".mobile-nav__close").fadeIn(100);
    }, 700);
  });
  $(".mobile-nav__close").on("click", function () {
    $(".mobile-nav__close").fadeOut(100);
    $(".mobile-nav__wrapper").slideUp(300);
    setTimeout(() => {
      $(".mobile-nav").fadeOut(300);
    }, 300);
  });
  $(".mobile-nav__list__link").on("click", function () {
    $(".mobile-nav").slideUp(400);
  });

  // ______________________________popup_________________________________
  $(".corner-call-btn").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });
  $(".call-form__open").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });

  $(".popup__close").on("click", function () {
    $(".popup").fadeOut(300);
  });

  $(".popup-mini__form").on("submit", function (e) {
    e.preventDefault();
    $(".popup-call-form").fadeOut(300);
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".popup__form input").val("");
    }, 700);
  });

  $(".single-form").on("submit", function (e) {
    e.preventDefault();
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".single-form input").val("");
    }, 700);
  });

  $(".callback-form").on("submit", function (e) {
    e.preventDefault();
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".callback-form input").val("");
    }, 700);
  });

  // $(".feedback__form").on("submit", function (e) {
  //   e.preventDefault();

  //   $(".successful").fadeIn(300);
  //   setTimeout(() => {
  //     $(".feedback__form input").val("");
  //   }, 700);
  // });

  // ______________________________filter-dropdown_________________________________

  $(".filter-dropdown button").on("click", function (e) {
    $(this).parent().find(".filter-dropdown__body").slideToggle(300);
    $(this).parent().toggleClass("active");
  });

  $(".popup").click((e) => {
    let div = $(".popup__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup").fadeOut(400);

      setTimeout(() => {
        $(".popup__form input").val("");
      }, 700);
    }
  });

  // ______________________________mobile filter_________________________________

  $(".filter-mobile__open").on("click", function () {
    $(".filter-mobile").slideDown(400);
  });
  $(".filter-mobile__close").on("click", function () {
    $(".filter-mobile").slideUp(400);
  });

  // ______________________________language_________________________________

  $(".language__open").on("click", function (e) {
    $(this).parent().find(".language__body").slideToggle(400);
  });

  $(".language__body").on("click", function (e) {
    const langEl = e.target.closest(".lang-el");
    $(".language__open").html(langEl.innerHTML);
    $(this).slideToggle(400);
  });

  // ______________________________cards-show__more-btn_________________________________

  $(".cards-show__more-btn").on("click", function () {
    $(this).parent().hide();
    $(this).parent().parent().find(".for__more").show();
  });

  $(".form_tel").inputmask("+\\9\\98 99 999 99 99");
});
