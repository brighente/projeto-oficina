            // CARROSSEL

let indiceAtual = 0;
let bodycheck = document.getElementById('body')

    function moverCarrossel(direcao) {
        const slides = document.querySelectorAll('.carrossel-slide .slide');
        const totalSlides = slides.length;

        indiceAtual += direcao;

        if (indiceAtual < 0) {
            indiceAtual = totalSlides - 1; // Vai para o último slide
        } else if (indiceAtual >= totalSlides) {
            indiceAtual = 0; // Vai para o primeiro slide
        }


        
        // Movendo o carrossel
        const carrossel = document.getElementById('carrossel');
        carrossel.style.transform = `translateX(-${indiceAtual * 100}%)`;
    }



        
              