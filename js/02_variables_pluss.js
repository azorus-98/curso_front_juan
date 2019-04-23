/* +En otros lenguajes hay declaracion EXPLICITA y OBLIGATORIA de tipos int x --> variable x de tipo entero sin valor 

En JS los tipos son
-debiles: nose declaran explicitamente: son IMPLICITOS al valor
-dinamicos: pueden cambiar

*/
//+em ES6 se utilizan let y const para declarar variables

let nombre //+Declarar
nombre = 'pepe' //+inicializar

let edad = 22 //+declarar e inicializar a la vez

//+tipos de datos:
//+de typeof hay 5 tipos:
//undefined
let data
mostrar (data)

//+script
data = 'hola amigos'
mostrar (data)
//numbers
data = 35
mostrar (data)

//booleans
data = true
data = false
mostrar (data)

//objeto o araid
data = {bariable1: 'pepe' , bariable2:22}
mostrar (data)


//+object tipo array
data = [23, 24, 56]
mostrar (data)

function mostrar(params) {

}
function mostrar (dato) {
    console.log('eldatorecivido es ', dato)
    console.log('el tipo del dato es ', typeof dato)
    console.log('------------------') 
}
mostrar (mostrar)
