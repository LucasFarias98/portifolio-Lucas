document.addEventListener("DOMContentLoaded", function() {

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


    const foto = document.querySelector(".foto");
    const titulo = document.querySelector(".apresentacao__conteudo__titulo");
    const texto = document.querySelector(".apresentacao__conteudo__texto");
    const rodape = document.querySelector(".rodape");

    function checkVisibilityAndAnimate() {
        if (isElementInViewport(foto) && foto.style.opacity == 0) {
            foto.style.opacity = 1;
        }
        if (isElementInViewport(titulo) && titulo.style.opacity == 0) {
            titulo.style.opacity = 1;
            titulo.style.transform = "translateY(0)";
        }
        if (isElementInViewport(texto) && texto.style.opacity == 0) {
            texto.style.opacity = 1;
        }
        if (isElementInViewport(rodape) && rodape.style.opacity == 0) {
            rodape.style.opacity = 1;
            rodape.style.transform = "translateY(0)";
        }
    }


    window.addEventListener("scroll", checkVisibilityAndAnimate);
    window.addEventListener("resize", checkVisibilityAndAnimate);
    checkVisibilityAndAnimate();
});
