//objetos e variáveis
const array_titulos = document.querySelectorAll('.titulo_textos')
const array_textos = document.querySelectorAll('.item_textos')

const array_temas = document.querySelectorAll('.botao_tema')


//eventos
for ( const [indice, obj_titulo] of array_titulos.entries() ) {
    obj_titulo.addEventListener('click', function() { funExibeTexto(indice) })
}

for ( const obj_temas of array_temas) {
    obj_temas.addEventListener('click', funTrocaTema)
}




//funções
function funExibeTexto(par_indice) {
    const obj_texto = array_textos[par_indice]
    if (obj_texto.style.display == 'flex') {
        obj_texto.style.display = 'none'
    }
    else {
        obj_texto.style.display = 'flex'
    }
}

function funTrocaTema(event) {
    const obj_body = document.querySelector('body')
    obj_body.removeAttribute('class')
    obj_body.setAttribute('class', 'tema_' + event.target.attributes['value']['value'])
}