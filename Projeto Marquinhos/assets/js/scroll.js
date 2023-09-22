window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.desenho', {duration : 3000, origin: 'right'})
sr.reveal('.descricao', {duration : 3000, origin: 'left'})
sr.reveal('.linkedin', {duration : 3000,  origin: 'left'})
sr.reveal('.desenho-bg', {duration : 3000,  origin: 'left'})
sr.reveal('.sobre-mim', {duration : 3000, origin:'right'})
sr.reveal('.projetos-itens', {duration : 3000, origin:'bottom'})
sr.reveal('.project', {duration : 3000, origin:'bottom'})
sr.reveal('.github-link', {duration : 3000, origin:'bottom'})
sr.reveal('.conteiner-skills', {duration : 3000, origin:'left'})
sr.reveal('.conteiner-descricao', {duration : 3000, origin:'right'})

document.addEventListener("DOMContentLoaded", function() {
    const barra = document.querySelector(".barra");
    const barraHeight = barra.clientHeight;
    let lastScrollPosition = 0;

    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > lastScrollPosition) {
            barra.style.transform = `translateY(-${barraHeight}px)`;
        } else {
            barra.style.transform = "translateY(0)";
        }

        lastScrollPosition = scrollPosition;
    });
});
