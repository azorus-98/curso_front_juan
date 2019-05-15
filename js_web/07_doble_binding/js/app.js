export function app() {
 console.log('funciona')
 let nombre = ''
 let msgInicial=''
/* Nodos del doom */
const inNombre = document.querySelector('#in-nombre')
const btnBorrar = document.querySelector('#btn-borrar')
const output = document.querySelector('#output')

msgInicial=output.innerHTML + ' '

/* Manejadores de eventos */   
inNombre.addEventListener('input',oninputNombre)
btnBorrar.addEventListener('click',borrar)

function oninputNombre (){
    nombre=inNombre.value
    output.innerHTML= msgInicial + nombre
}
function borrar() {
  nombre= ''
  oninputNombre()  
}

}



