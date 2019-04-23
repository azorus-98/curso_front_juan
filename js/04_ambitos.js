//'use strict'//esto hace qu tengas que hacerlo todo estilo buena practica
//ambitos a scope de las variables

//ambito global

let varl = 20

//MUY MALA PRACTICA
//NO SE ACCEDE NUNCA A LAS VARIABLES GLOBSLES DESDE LAS FUNCIONES
function prueba(){
    console.log(varl)
}

prueba()

//lo mismo con buenes practicas:

let var2 = 30
pruebaBien(var2)


function pruebaBien (x) {
    console.log(x)
}
//nuevo en ES6 usar let en lugar de de var

function condicional(){
    let ext = 22
    if(true){
        let data = 23
        console.log(ext)
        console.log(data)
    }
    //console.log(data)//esto daria un error
}

condicional()

 let x = 12

 function otraprueba(){
    let x =23
    x = 5
    console.log('dentro de la funcion x vale ',x)
 }
x = 33
 otraprueba()
 console.log('fuera de la funcion vale ',x)

 