import TweenMax from 'gsap/src/uncompressed/TweenMax';
// import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import ScrollMagic from 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

window.addEventListener('load', () => {

  const controller = new ScrollMagic.Controller();

  //heading
  const headingTween = TweenMax.fromTo('.header-heading__title', 1, {opacity: 0, x: -300, ease: Power4. easeOut}, {opacity: 1, x:0, ease: Power4. easeOut});

  const headingScene = new ScrollMagic.Scene({
    triggerElement: '.header-heading__title',
    reverse: false
  })
    .addTo(controller)
    .setTween(headingTween);

  //banner
  const bannerTween = TweenMax.fromTo('.aside__banner', 2, {opacity: 0}, {opacity: 1});

  const bannerScene = new ScrollMagic.Scene({
    triggerElement: '.aside__banner',
    reverse: false
  })
    .addTo(controller)
    .setTween(bannerTween);

  //readmore
  const readmoreTween = new TimelineMax();
  readmoreTween.staggerFromTo('.readmore-item', 1, {x: -200, opacity: 0, ease: Power4. easeOut}, {x: 0, opacity: 1, ease: Power4. easeOut}, '0.5');

  const readmoreScene = new ScrollMagic.Scene({
    triggerElement: '.readmore',
    offset: '-100',
    reverse: false
  })
    .addTo(controller)
    .setTween(readmoreTween);

});
