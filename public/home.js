const toTheTopBtn = document.getElementById("to-the-top");

toTheTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});

const stickyElm = document.querySelector('.navbar')

const observer = new IntersectionObserver( 
  ([e]) => e.target.classList.toggle('is-sticky', e.intersectionRatio < 1),
  {threshold: [1]}
);

observer.observe(stickyElm)