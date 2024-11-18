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


            // BOTAO VOLTAR AO TOPO

    function voltarTopo() {
        window.scroll(0, 0);
        }


            // MENU HAMBURGER VERIFICAÇÃO

    body.onresize = mudouTamanho;

    function mudouTamanho(){
        if(window.innerWidth >= 1024){
            menu.style.display = 'flex';
        } else {
            menu.style.display = 'none'
        }
    }


        
    


    function clickMenu(){
        if(menu.style.display == 'block'){
            menu.style.display = 'none'
            header.style.display = 'flex'
        } else {
            menu.style.display = 'block'
            header.style.display = 'grid'
        }
    }


        
              