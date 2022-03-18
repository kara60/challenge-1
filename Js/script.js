$(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {
        $('#yukari-cik').fadeIn(200);
    } else {
        $('#yukari-cik').fadeOut(200);
    }
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  

window.sr = new ScrollReveal();
sr.reveal('.navbar-nav-link',{
    opacity: 0,
    interval: 120,
    rotate: {x:50, y:50}
});
sr.reveal('.header-content-header',{
    delay:300,
    distance: "120px",
});
sr.reveal('.header-content-content-first',{
    delay:800,
    distance: "120px",
});
sr.reveal('.header-content-content-last',{
    delay:1000,
    distance: "120px",
    rotate: {x:50, y:50}
});
sr.reveal('.header-content-footer',{
    delay:1000,
    distance: "120px",
});

/* Overview */
sr.reveal('#overview-content',{
    delay:800,
    distance: "60px",
    scale: 0.9
});
sr.reveal('.overview-button',{
    delay:1000,
    distance: "60px",
    origin: "bottom"
});

/* Location */
sr.reveal('#location',{
    delay:1000,
    opacity: 0,
    origin: "top",
    distance: "50px"
});

/* Comparable */
sr.reveal('.comparable-left',{
    delay:1000,
    distance: "120px",
});
sr.reveal('.comparable-right',{
    delay:1000,
    distance: "120px",
});
sr.reveal('.comparable-footer',{
    delay:1100,
    distance: "120px",
});

/* Marketing */
sr.reveal('.marketing-left',{
    delay: 1000,
    distance: "120px",
    origin: "left"
});
sr.reveal('.marketin-right-divs',{
    delay: 800,
    opacity: 0,
    interval: 120,
    rotate: {x:50, y:50}
});
sr.reveal('.marketing-footer',{
    delay: 1000,
    opacity: 0,
    interval: 120,
    rotate: {x:50, y:50}
});

/* questions */
sr.reveal('.questions-content',{
    delay: 800,
    opacity: 0,
    interval: 120,
    rotate: {x:50, y:50}
});
sr.reveal('.questions-main',{
    delay: 800,
    opacity: 0,
    interval: 120,
    rotate: {x:50, y:50}
});
sr.reveal('.questions-content',{
    delay: 800,
    opacity: 0,
    interval: 120,
    rotate: {x:50, y:50}
});

/* Footer */
sr.reveal('.footer-video',{
    delay: 800,
    opacity: 0,
    distance: "120px"
});
sr.reveal('.footer-buttons',{
    delay: 900,
    opacity: 0,
    distance: "120px"
});
sr.reveal('.footer-contain',{
    delay: 1000,
    opacity: 0,
    distance: "120px"
});
sr.reveal('.footer-end',{
    delay: 1100,
    opacity: 0,
    distance: "120px"
});