
// Product - Filter Pack Size
$('.b-va-8').click(function () {
  $('.box').removeClass('active');
  $(this).addClass('active');
  $('.va').addClass('uk-hidden');
  $('.va-8').removeClass('uk-hidden');
});

$('.b-va-16').click(function () {
  $('.box').removeClass('active');
  $(this).addClass('active');
  $('.va').addClass('uk-hidden');
  $('.va-16').removeClass('uk-hidden');  
});

$('.b-va-32').click(function () {
  $('.box').removeClass('active');
  $(this).addClass('active');
  $('.va').addClass('uk-hidden');
  $('.va-32').removeClass('uk-hidden');  
});


// ===========
if ($('.bg').length > 0) {
  var bg = document.querySelector('.bg');

  if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
    bg.classList.add("scroll");
  } else {
    bg.classList.remove("scroll");
  }
  
  window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
      bg.classList.add("scroll");
    } else {
      bg.classList.remove("scroll");
    }
  };
}

if ($('.bg-video').length > 0) {
  var bg = document.querySelector('.bg-video');

  if (document.body.scrollTop >= 1800 || document.documentElement.scrollTop >= 1800) {
    bg.classList.add("scroll");
  } else {
    bg.classList.remove("scroll");
  }
  
  window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 1800 || document.documentElement.scrollTop >= 1800) {
      bg.classList.add("scroll");
    } else {
      bg.classList.remove("scroll");
    }
  };
}


if ($('.polygon').length > 0) {
  particlesJS("polygon", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#ffffff" }, "shape": { "type": "circle", "stroke": { "width": 0, "color": "#000000" }, "polygon": { "nb_sides": 5 }, "image": { "src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": { "value": 0.5, "random": false, "anim": { "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": { "value": 3, "random": true, "anim": { "enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 6, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": { "detect_on": "canvas", "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true }, "modes": { "grab": { "distance": 400, "line_linked": { "opacity": 1 } }, "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": { "distance": 200, "duration": 0.4 }, "push": { "particles_nb": 4 }, "remove": { "particles_nb": 2 } } }, "retina_detect": true }); var count_particles, stats, update;
}