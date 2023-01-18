const stickyElm = document.querySelector('.sticky');
const toTheTop = document.querySelector("#toTheTop");

const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('sticked', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer.observe(stickyElm);

toTheTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // smh safari...
  document.documentElement.scrollTop = 0; // for other browsers
});