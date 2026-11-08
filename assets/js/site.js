(function () {
  'use strict';
  var d = document;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var targets = d.querySelectorAll('.voyage, .card, .step, .fact, .faq-item, .section-head, .article-body > *, .page-hero .container > *, .figure-band, .squad-figure, .voyages-empty, .event-log > *, .event-log .voyage, .side-nav a');
  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }
})();
