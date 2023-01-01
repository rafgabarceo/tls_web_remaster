const stickyElm = document.querySelector('.sticky')

console.log(stickyElm)

const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('sticked', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer.observe(stickyElm)