!(function (n, i, e, a) {
  ; (n.navigation = function (t, s) {
    var o = {
      responsive: !0,
      mobileBreakpoint: 991,
      showDuration: 200,
      hideDuration: 200,
      showDelayDuration: 0,
      hideDelayDuration: 0,
      submenuTrigger: "hover",
      submenuIndicator: !0,
      submenuIndicatorTrigger: !1,
      hideSubWhenGoOut: !0,
      visibleSubmenusOnMobile: !1,
      fixed: !1,
      overlay: !0,
      overlayColor: "rgba(0, 0, 0, 0.5)",
      hidden: !1,
      hiddenOnMobile: !1,
      offCanvasSide: "left",
      offCanvasCloseButton: !0,
      animationOnShow: "",
      animationOnHide: "",
      onInit: function () { },
      onLandscape: function () { },
      onPortrait: function () { },
      onShowOffCanvas: function () { },
      onHideOffCanvas: function () { }
    },
      r = this,
      u = Number.MAX_VALUE,
      d = 1,
      l = "click.nav touchstart.nav",
      f = "mouseenter focusin",
      c = "mouseleave focusout"
    r.settings = {}
    var t = (n(t), t)
    n(t).find(".nav-search").length > 0 &&
      n(t)
        .find(".nav-search")
        .find("form")
        .prepend(
          "<span class='nav-search-close-button' tabindex='0'>&#10005;</span>"
        ),
      (r.init = function () {
        ; (r.settings = n.extend({}, o, s)),
          r.settings.offCanvasCloseButton &&
          n(t)
            .find(".nav-menus-wrapper")
            .prepend(
              "<span class='nav-menus-wrapper-close-button'>&#10005;</span>"
            ),
          "right" == r.settings.offCanvasSide &&
          n(t)
            .find(".nav-menus-wrapper")
            .addClass("nav-menus-wrapper-right"),
          r.settings.hidden &&
          (n(t).addClass("navigation-hidden"),
            (r.settings.mobileBreakpoint = 99999)),
          v(),
          r.settings.fixed && n(t).addClass("navigation-fixed"),
          n(t)
            .find(".nav-toggle")
            .on("click touchstart", function (n) {
              n.stopPropagation(),
                n.preventDefault(),
                r.showOffcanvas(),
                s !== a && r.callback("onShowOffCanvas")
            }),
          n(t)
            .find(".nav-menus-wrapper-close-button")
            .on("click touchstart", function () {
              r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas")
            }),
          n(t)
            .find(".nav-search-button, .nav-search-close-button")
            .on("click touchstart keydown", function (i) {
              i.stopPropagation(), i.preventDefault()
              var e = i.keyCode || i.which
              "click" === i.type ||
                "touchstart" === i.type ||
                ("keydown" === i.type && 13 == e)
                ? r.toggleSearch()
                : 9 == e && n(i.target).blur()
            }),
          n(t).find(".megamenu-tabs").length > 0 && y(),
          n(i).resize(function () {
            r.initNavigationMode(C()), O(), r.settings.hiddenOnMobile && m()
          }),
          r.initNavigationMode(C()),
          r.settings.hiddenOnMobile && m(),
          s !== a && r.callback("onInit")
      })
    var h = function () {
      n(t)
        .find(".nav-submenu")
        .hide(0),
        n(t)
          .find("li")
          .removeClass("focus")
    },
      v = function () {
        n(t)
          .find("li")
          .each(function () {
            n(this).children(".nav-dropdown,.megamenu-panel").length > 0 &&
              (n(this)
                .children(".nav-dropdown,.megamenu-panel")
                .addClass("nav-submenu"),
                r.settings.submenuIndicator &&
                n(this)
                  .children("a")
                  .append(
                    "<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"
                  ))
          })
      },
      m = function () {
        n(t).hasClass("navigation-portrait")
          ? n(t).addClass("navigation-hidden")
          : n(t).removeClass("navigation-hidden")
      }
      ; (r.showSubmenu = function (i, e) {
        C() > r.settings.mobileBreakpoint &&
          n(t)
            .find(".nav-search")
            .find("form")
            .fadeOut(),
          "fade" == e
            ? n(i)
              .children(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.showDelayDuration)
              .fadeIn(r.settings.showDuration)
              .removeClass(r.settings.animationOnHide)
              .addClass(r.settings.animationOnShow)
            : n(i)
              .children(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.showDelayDuration)
              .slideDown(r.settings.showDuration)
              .removeClass(r.settings.animationOnHide)
              .addClass(r.settings.animationOnShow),
          n(i).addClass("focus")
      }),
        (r.hideSubmenu = function (i, e) {
          "fade" == e
            ? n(i)
              .find(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.hideDelayDuration)
              .fadeOut(r.settings.hideDuration)
              .removeClass(r.settings.animationOnShow)
              .addClass(r.settings.animationOnHide)
            : n(i)
              .find(".nav-submenu")
              .stop(!0, !0)
              .delay(r.settings.hideDelayDuration)
              .slideUp(r.settings.hideDuration)
              .removeClass(r.settings.animationOnShow)
              .addClass(r.settings.animationOnHide),
            n(i)
              .removeClass("focus")
              .find(".focus")
              .removeClass("focus")
        })
    var p = function () {
      n("body").addClass("no-scroll"),
        r.settings.overlay &&
        (n(t).append("<div class='nav-overlay-panel'></div>"),
          n(t)
            .find(".nav-overlay-panel")
            .css("background-color", r.settings.overlayColor)
            .fadeIn(300)
            .on("click touchstart", function (n) {
              r.hideOffcanvas()
            }))
    },
      g = function () {
        n("body").removeClass("no-scroll"),
          r.settings.overlay &&
          n(t)
            .find(".nav-overlay-panel")
            .fadeOut(400, function () {
              n(this).remove()
            })
      }
      ; (r.showOffcanvas = function () {
        p(),
          "left" == r.settings.offCanvasSide
            ? n(t)
              .find(".nav-menus-wrapper")
              .css("transition-property", "left")
              .addClass("nav-menus-wrapper-open")
            : n(t)
              .find(".nav-menus-wrapper")
              .css("transition-property", "right")
              .addClass("nav-menus-wrapper-open")
      }),
        (r.hideOffcanvas = function () {
          n(t)
            .find(".nav-menus-wrapper")
            .removeClass("nav-menus-wrapper-open")
            .on(
              "webkitTransitionEnd moztransitionend transitionend oTransitionEnd",
              function () {
                n(t)
                  .find(".nav-menus-wrapper")
                  .css("transition-property", "none")
                  .off()
              }
            ),
            g()
        }),
        (r.toggleOffcanvas = function () {
          C() <= r.settings.mobileBreakpoint &&
            (n(t)
              .find(".nav-menus-wrapper")
              .hasClass("nav-menus-wrapper-open")
              ? (r.hideOffcanvas(), s !== a && r.callback("onHideOffCanvas"))
              : (r.showOffcanvas(), s !== a && r.callback("onShowOffCanvas")))
        }),
        (r.toggleSearch = function () {
          "none" ==
            n(t)
              .find(".nav-search")
              .find("form")
              .css("display")
            ? (n(t)
              .find(".nav-search")
              .find("form")
              .fadeIn(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .focus())
            : (n(t)
              .find(".nav-search")
              .find("form")
              .fadeOut(200),
              n(t)
                .find(".nav-search")
                .find("input")
                .blur())
        }),
        (r.initNavigationMode = function (i) {
          r.settings.responsive
            ? (i <= r.settings.mobileBreakpoint &&
              u > r.settings.mobileBreakpoint &&
              (n(t)
                .addClass("navigation-portrait")
                .removeClass("navigation-landscape"),
                S(),
                s !== a && r.callback("onPortrait")),
              i > r.settings.mobileBreakpoint &&
              d <= r.settings.mobileBreakpoint &&
              (n(t)
                .addClass("navigation-landscape")
                .removeClass("navigation-portrait"),
                k(),
                g(),
                r.hideOffcanvas(),
                s !== a && r.callback("onLandscape")),
              (u = i),
              (d = i))
            : (n(t).addClass("navigation-landscape"),
              k(),
              s !== a && r.callback("onLandscape"))
        })
    var b = function () {
      n("html").on("click.body touchstart.body", function (i) {
        0 === n(i.target).closest(".navigation").length &&
          (n(t)
            .find(".nav-submenu")
            .fadeOut(),
            n(t)
              .find(".focus")
              .removeClass("focus"),
            n(t)
              .find(".nav-search")
              .find("form")
              .fadeOut())
      })
    },
      C = function () {
        return (
          i.innerWidth || e.documentElement.clientWidth || e.body.clientWidth
        )
      },
      w = function () {
        n(t)
          .find(".nav-menu")
          .find("li, a")
          .off(l)
          .off(f)
          .off(c)
      },
      O = function () {
        if (C() > r.settings.mobileBreakpoint) {
          var i = n(t).outerWidth(!0)
          n(t)
            .find(".nav-menu")
            .children("li")
            .children(".nav-submenu")
            .each(function () {
              n(this)
                .parent()
                .position().left +
                n(this).outerWidth() >
                i
                ? n(this).css("right", 0)
                : n(this).css("right", "auto")
            })
        }
      },
      y = function () {
        function i(i) {
          var e = n(i)
            .children(".megamenu-tabs-nav")
            .children("li"),
            a = n(i).children(".megamenu-tabs-pane")
          n(e).on("click.tabs touchstart.tabs", function (i) {
            i.stopPropagation(),
              i.preventDefault(),
              n(e).removeClass("active"),
              n(this).addClass("active"),
              n(a)
                .hide(0)
                .removeClass("active"),
              n(a[n(this).index()])
                .show(0)
                .addClass("active")
          })
        }
        if (n(t).find(".megamenu-tabs").length > 0)
          for (var e = n(t).find(".megamenu-tabs"), a = 0; a < e.length; a++)
            i(e[a])
      },
      k = function () {
        w(),
          h(),
          navigator.userAgent.match(/Mobi/i) ||
            navigator.maxTouchPoints > 0 ||
            "click" == r.settings.submenuTrigger
            ? n(t)
              .find(".nav-menu, .nav-dropdown")
              .children("li")
              .children("a")
              .on(l, function (e) {
                if (
                  (r.hideSubmenu(
                    n(this)
                      .parent("li")
                      .siblings("li"),
                    r.settings.effect
                  ),
                    n(this)
                      .closest(".nav-menu")
                      .siblings(".nav-menu")
                      .find(".nav-submenu")
                      .fadeOut(r.settings.hideDuration),
                    n(this).siblings(".nav-submenu").length > 0)
                ) {
                  if (
                    (e.stopPropagation(),
                      e.preventDefault(),
                      "none" ==
                      n(this)
                        .siblings(".nav-submenu")
                        .css("display"))
                  )
                    return (
                      r.showSubmenu(
                        n(this).parent("li"),
                        r.settings.effect
                      ),
                      O(),
                      !1
                    )
                  if (
                    (r.hideSubmenu(n(this).parent("li"), r.settings.effect),
                      "_blank" === n(this).attr("target") ||
                      "blank" === n(this).attr("target"))
                  )
                    i.open(n(this).attr("href"))
                  else {
                    if (
                      "#" === n(this).attr("href") ||
                      "" === n(this).attr("href") ||
                      "javascript:void(0)" === n(this).attr("href")
                    )
                      return !1
                    i.location.href = n(this).attr("href")
                  }
                }
              })
            : n(t)
              .find(".nav-menu")
              .find("li")
              .on(f, function () {
                r.showSubmenu(this, r.settings.effect), O()
              })
              .on(c, function () {
                r.hideSubmenu(this, r.settings.effect)
              }),
          r.settings.hideSubWhenGoOut && b()
      },
      S = function () {
        w(),
          h(),
          r.settings.visibleSubmenusOnMobile
            ? n(t)
              .find(".nav-submenu")
              .show(0)
            : (n(t)
              .find(".submenu-indicator")
              .removeClass("submenu-indicator-up"),
              r.settings.submenuIndicator &&
                r.settings.submenuIndicatorTrigger
                ? n(t)
                  .find(".submenu-indicator")
                  .on(l, function (i) {
                    return (
                      i.stopPropagation(),
                      i.preventDefault(),
                      r.hideSubmenu(
                        n(this)
                          .parent("a")
                          .parent("li")
                          .siblings("li"),
                        "slide"
                      ),
                      r.hideSubmenu(
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .children("li"),
                        "slide"
                      ),
                      "none" ==
                        n(this)
                          .parent("a")
                          .siblings(".nav-submenu")
                          .css("display")
                        ? (n(this).addClass("submenu-indicator-up"),
                          n(this)
                            .parent("a")
                            .parent("li")
                            .siblings("li")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .find(".submenu-indicator")
                            .removeClass("submenu-indicator-up"),
                          r.showSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li"),
                            "slide"
                          ),
                          !1)
                        : (n(this)
                          .parent("a")
                          .parent("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                          void r.hideSubmenu(
                            n(this)
                              .parent("a")
                              .parent("li"),
                            "slide"
                          ))
                    )
                  })
                : n(t)
                  .find(".nav-menu, .nav-dropdown")
                  .children("li")
                  .children("a")
                  .on(l, function (e) {
                    if (
                      (e.stopPropagation(),
                        e.preventDefault(),
                        r.hideSubmenu(
                          n(this)
                            .parent("li")
                            .siblings("li"),
                          r.settings.effect
                        ),
                        r.hideSubmenu(
                          n(this)
                            .closest(".nav-menu")
                            .siblings(".nav-menu")
                            .children("li"),
                          "slide"
                        ),
                        "none" ==
                        n(this)
                          .siblings(".nav-submenu")
                          .css("display"))
                    )
                      return (
                        n(this)
                          .children(".submenu-indicator")
                          .addClass("submenu-indicator-up"),
                        n(this)
                          .parent("li")
                          .siblings("li")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        n(this)
                          .closest(".nav-menu")
                          .siblings(".nav-menu")
                          .find(".submenu-indicator")
                          .removeClass("submenu-indicator-up"),
                        r.showSubmenu(n(this).parent("li"), "slide"),
                        !1
                      )
                    if (
                      (n(this)
                        .parent("li")
                        .find(".submenu-indicator")
                        .removeClass("submenu-indicator-up"),
                        r.hideSubmenu(n(this).parent("li"), "slide"),
                        "_blank" === n(this).attr("target") ||
                        "blank" === n(this).attr("target"))
                    )
                      i.open(n(this).attr("href"))
                    else {
                      if (
                        "#" === n(this).attr("href") ||
                        "" === n(this).attr("href") ||
                        "javascript:void(0)" === n(this).attr("href")
                      )
                        return !1
                      i.location.href = n(this).attr("href")
                    }
                  }))
      }
      ; (r.callback = function (n) {
        s[n] !== a && s[n].call(t)
      }),
        r.init()
  }),
    (n.fn.navigation = function (i) {
      return this.each(function () {
        if (a === n(this).data("navigation")) {
          var e = new n.navigation(this, i)
          n(this).data("navigation", e)
        }
      })
    })
})(jQuery, window, document)

  ; (function ($) {
    "use strict"

    var $window = $(window)

    if ($.fn.navigation) {
      $("#navigation1").navigation()
      $("#always-hidden-nav").navigation({
        hidden: true
      })
    }

    $window.on("load", function () {
      $("#preloader").fadeOut("slow", function () {
        $(this).remove()
      })
    })
  })(jQuery)


$('.Center-slider').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 1000,
  margin: 0,
  autoplayHoverPause: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1.6,
      dots: true,
    },
    576: {
      items: 1.2,
      dots: true,
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 4
    }
  }
});

$('.Customer').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  smartSpeed: 4000,
  margin: 20,
  autoplayHoverPause: false,
  autoplay: false,
  responsive: {
    0: {
      items: 1.2,
      dots: true,
      margin: 50,
      autoplay: true,
    },
    576: {
      items: 1.2,
      dots: true,
      margin: 50,
      autoplay: true,
    },
    768: {
      items: 1,
      autoplay: true,
    },
    1024: {
      items: 1
    },
    1200: {
      items: 1
    }
  }
});



// Tabs
tabControl();

var resizeTimer;
$(window).on('resize', function (e) {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    tabControl();
  }, 250);
});


function tabControl() {
  var tabs = $('.tabbed-content').find('.tabs');
  if (tabs.is(':visible')) {
    tabs.find('a').on('click', function (event) {
      event.preventDefault();
      var target = $(this).attr('href'),
        tabs = $(this).parents('.tabs'),
        buttons = tabs.find('a'),
        item = tabs.parents('.tabbed-content').find('.item');
      buttons.removeClass('active');
      item.removeClass('active');
      $(this).addClass('active');
      $(target).addClass('active');
    });
  } else {
    $('.item').on('click', function () {
      var container = $(this).parents('.tabbed-content'),
        currId = $(this).attr('id'),
        items = container.find('.item');
      container.find('.tabs a').removeClass('active');
      items.removeClass('active');
      $(this).addClass('active');
      container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
    });
  }
}


$(document).ready(function() {
  const prevButton = $('#prev-button');
  const nextButton = $('#next-button');
  const quatation = $('#quatation');
  const stepCount = $('#step-count');
  const progress = $('#progress');
  const sections = $('.non');
  const heading = $('#heading');
  let currentSectionIndex = 0;
  let height = $('#step1 .step-body').height();
  $('.parent').css('height', height+50)


  function showSection(index) {
    sections.eq(index).addClass('active');
    let height = sections.eq(index).find('.step-body').height();
    $('.parent').height(height+20)

  }

  function hideSection(index) {
    sections.eq(index).removeClass('active');
    let height = $('#step'+index+' .step-body').height();
    $('.parent').height(height+20)
  }
  // function showSection(index) {
  //   // sections.hide();
  //   // sections.eq(index).show();
  //   sections.eq(index).addClass('active');

  //   var sliderFor = $(".slider-for");
  //   var sliderNav = $(".slider-nav");
  //   sliderFor.each(function (idx, item) {
  //     $(item).get(0).slick.setPosition()
  //   });  
  //   sliderNav.each(function (idx, item) {
  //     $(item).get(0).slick.setPosition()
  //   });
  // }

  // function hideSection(index) {
  //   // sections.hide();
  //   // sections.eq(index).show();
  //   sections.eq(index).removeClass('active');
    
  //   var sliderFor = $(".slider-for");
  //   var sliderNav = $(".slider-nav");
  //   sliderFor.each(function (idx, item) {
  //     $(item).get(0).slick.setPosition()
  //   });  
  //   sliderNav.each(function (idx, item) {
  //     $(item).get(0).slick.setPosition()
  //   });
  // }

  function updateStepCount() {
    const currentStep = currentSectionIndex + 1;
    const totalSteps = sections.length;
    stepCount.text(`Step ${currentStep} of ${totalSteps}`);
  }

  function updateProgressBar() {
    const percent = ((currentSectionIndex + 1) / sections.length) * 100;
    progress.width(`${percent}%`);
  }

  function updateHeading() {
    heading.text(`Step ${currentSectionIndex + 1}`);
  }

  function updateButtons() {
    prevButton.prop('disabled', currentSectionIndex === 0);
    nextButton.prop('disabled', currentSectionIndex === sections.length - 1);
    quatation.prop('disabled', currentSectionIndex < sections.length - 1);
  }

  prevButton.on('click', function() {
    if (currentSectionIndex > 0) {
      currentSectionIndex--;
      hideSection(currentSectionIndex+1);
      updateStepCount();
      updateProgressBar();
      updateHeading();
      updateButtons();
      $(window).scrollTop(0);
    }
  });

  nextButton.on('click', function() {
    if (currentSectionIndex < sections.length - 1) {
      currentSectionIndex++;
      showSection(currentSectionIndex);
      updateStepCount();
      updateProgressBar();
      updateHeading();
      updateButtons();
      $(window).scrollTop(0);
    }
    
  });
});


$(document).ready(function () {
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.slider-nav',
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          vertical: false,
        }
      }
    ]
  });
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 4,
          vertical: false,
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          vertical: true,
        }
      }
    ]
  });
});



$(document).ready(function () {

  $('.why--part-1').waypoint(function (direction) {
    $('.why--part-1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.why--part-2').waypoint(function (direction) {
    $('.why--part-2').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.getting--1').waypoint(function (direction) {
    $('.getting--1').addClass('animate__animated animate__fadeIn')
  }, {

    offset: '50%'
  });

  $('.card--1').waypoint(function (direction) {
    $('.card--1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.card--2').waypoint(function (direction) {
    $('.card--2').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.card--3').waypoint(function (direction) {
    $('.card--3').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.card--4').waypoint(function (direction) {
    $('.card--4').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.blog--1').waypoint(function (direction) {
    $('.blog--1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.blog--2').waypoint(function (direction) {
    $('.blog--2').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.blog--3').waypoint(function (direction) {
    $('.blog--3').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.blog--4').waypoint(function (direction) {
    $('.blog--4').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.about--1').waypoint(function (direction) {
    $('.about--1').addClass('animate__animated animate__fadeIn')
  }, {

    offset: '50%'
  });

  $('.about--2').waypoint(function (direction) {
    $('.about--2').addClass('animate__animated animate__fadeIn')
  }, {

    offset: '50%'
  });

  $('.happy--1').waypoint(function (direction) {
    $('.happy--1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.does--1').waypoint(function (direction) {
    $('.does--1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.does--2').waypoint(function (direction) {
    $('.does--2').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.shake--1').waypoint(function (direction) {
    $('.shake--1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.count--1').waypoint(function (direction) {
    $('.count--1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.count--2').waypoint(function (direction) {
    $('.count--2').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.count--3').waypoint(function (direction) {
    $('.count--3').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.count--4').waypoint(function (direction) {
    $('.count--4').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

  $('.work--1').waypoint(function (direction) {
    $('.work--1').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '40%'
  });

  $('.work--2').waypoint(function (direction) {
    $('.work--2').addClass('animate__animated animate__zoomIn')
  }, {

    offset: '50%'
  });

});


// Fancybox Config
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "slideShow",
    "thumbs",
    "zoom",
    "fullScreen",
    "share",
    "close"
  ],
  loop: false,
  protect: true
});


