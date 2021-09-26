(function() {
    let offOn = document.querySelector('input[type=checkbox]');
    let corpo = document.querySelector('body');
    let cabeça = document.querySelector('header');
    let coresTextos = document.querySelectorAll('.cores-texto');
    let corTexto = document.querySelectorAll('.cor-texto');
    let card = document.querySelectorAll('.cor-card');

    offOn.addEventListener('click', () => {
        if (offOn.checked == true) {
            corpo.style.backgroundColor = 'hsl(0, 0%, 100%)';
            cabeça.style.backgroundColor = 'hsl(225, 100%, 98%)';
            coresTextos.forEach(elemento => {
                elemento.style.color = 'hsl(230, 17%, 14%)';
            });
            corTexto.forEach(elemento => {
                elemento.style.color = 'hsl(228, 12%, 44%)';
            });
            card.forEach(elemento => {
                let classe = elemento.getAttribute('class').replace('cor-card', 'cor-card2');
                elemento.setAttribute('class', classe);
            });
        } else {

            corpo.style.backgroundColor = 'hsl(230, 17%, 14%)';
            cabeça.style.backgroundColor = 'hsl(232, 19%, 15%)';
            coresTextos.forEach(elemento => {
                elemento.style.color = 'hsl(0, 0%, 100%)';
            });
            corTexto.forEach(elemento => {
                elemento.style.color = 'hsl(228, 34%, 66%)';
            });
            card.forEach(elemento => {
                let classe = elemento.getAttribute('class').replace('cor-card2', 'cor-card');
                elemento.setAttribute('class', classe);
            });
        }
    })

})();