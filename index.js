var elementosDuvido = document.querySelectorAll('.duvida')

elementosDuvido.forEach(function(duvida) {
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })
})