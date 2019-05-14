/**
 *  Funciones manejadoras de eventos (Event Handler) 
 * 
 * */
        
function saludar () {
    console.log('Hola desde una funcion en un fichero JS')
}

function despedirse () {
    console.log('Adios desde una funcion en un fichero JS')
}

function onMouseOver() {
    console.log('El ratón entró')
}

function onMouseOut() {
    console.log('El ratón salió')
}

function cuadrados(item) { return item * item}

/**
 * 
 * Accesos al DOM (Document Object Model)
 */

window.onload = function () {

    let datos = [1,2,3,4,5]
    console.log( datos.map(cuadrados) )

    document.querySelector('#btn_saludar').onclick = saludar
    // document.querySelector('button:nth-of-type(2)').onclick = despedirse
    document.querySelector('#btn_despedirse').onclick = despedirse
    document.querySelector('#div_raton').onmouseover = onMouseOver
    document.querySelector('#div_raton').onmouseout = onMouseOut    
} 