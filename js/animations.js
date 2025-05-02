const fadersPortrait = document.querySelectorAll('.fade-in-on-scroll-portrait');
const zoomInPortrait = document.querySelectorAll('.zoom-in-on-scroll-portrait');

const fadeIn = document.querySelectorAll('.fade-in-on-scroll');
const fadeInWidget = document.querySelectorAll('.fade-in-on-scroll-widget');

const zoomIn = document.querySelectorAll('.zoom-in-on-scroll');
const zoomOut = document.querySelectorAll('.zoom-out-on-scroll');

const fromRightTitle = document.querySelectorAll('.appear-from-right-scroll-title');
const fromRightText = document.querySelectorAll('.appear-from-right-scroll-text');

const fromLeftTitle = document.querySelectorAll('.appear-from-left-scroll-title');
const fromLeftText = document.querySelectorAll('.appear-from-left-scroll-text');


const fromLeftWidget1 = document.querySelectorAll('.from-left-scroll-widget-1');
const fromLeftWidget2 = document.querySelectorAll('.from-left-scroll-widget-2');

const fromRightWidget1 = document.querySelectorAll('.from-right-scroll-widget-1');
const fromRightWidget2 = document.querySelectorAll('.from-right-scroll-widget-2');

const fromTop = document.querySelectorAll('.appear-from-top-scroll');
const fromTopD1 = document.querySelectorAll('.appear-from-top-scroll-title-d1');
const fromTopD2 = document.querySelectorAll('.appear-from-top-scroll-title-d2');
const fromTopTitle = document.querySelectorAll('.appear-from-top-scroll-title');

const fromBottom = document.querySelectorAll('.appear-from-bottom-scroll');
const fromBottomD1 = document.querySelectorAll('.appear-from-bottom-scroll-d1');

const filterIn = document.querySelectorAll('.filter-in');


const appearOnScroll = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});


fadersPortrait.forEach(fader => {
  appearOnScroll.observe(fader);
});

zoomInPortrait.forEach(fader => {
    appearOnScroll.observe(fader);
});


fadeIn.forEach(fader => {
  appearOnScroll.observe(fader);
});

fadeInWidget.forEach(fader => {
  appearOnScroll.observe(fader);
});

zoomIn.forEach(fader => {
    appearOnScroll.observe(fader);
});

zoomOut.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromRightTitle.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromRightText.forEach(fader => {
    appearOnScroll.observe(fader);
});


fromLeftTitle.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromLeftText.forEach(fader => {
    appearOnScroll.observe(fader);
});


fromLeftWidget1.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromLeftWidget2.forEach(fader => {
    appearOnScroll.observe(fader);
});


fromRightWidget1.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromRightWidget2.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromTop.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromTopD1.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromTopD2.forEach(fader => {
    appearOnScroll.observe(fader);
});

fromBottom.forEach(fader => {
    appearOnScroll.observe(fader);

});

fromBottomD1.forEach(fader => {
    appearOnScroll.observe(fader);

});

fromTopTitle.forEach(fader => {
    appearOnScroll.observe(fader);
});


filterIn.forEach(fader => {
    appearOnScroll.observe(fader);
});