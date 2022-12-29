const toTheTopBtn = document.getElementById("to-the-top");

toTheTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});