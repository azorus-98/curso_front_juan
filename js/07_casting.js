//existen los operadores arigmetricos+ - * / % (modulo)
let x = 22
let nombre = 'pepe'
let z = '2'
let y = 0

let division = x/z
console.log(division)
console.log('z es',typeof z)
division = x/nombre
console.log(division)
console.log('nombre es' ,typeof nombre)
division =z/y
console.log(division)
console.log('x es' ,typeof x)
/* NaN equivale al concepto matematico de indeterminacion
0/n=0
n/0=infinity
0/0=NaN
 */

 //si quiero evitar indeterminaciones debo validar los datos de esta forma
 function dividir (x,y){
     if (isNaN(x)|| isNaN(y) ){
         console.log('operadores invalidos')
         return
     }
     console.log('la division da', x/y,'€')
 }
 dividir(x,z)
 dividir(x,Number)
 //^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//si hay strings tiene preferencia la concatenacion
console.log(x+z)

//para evitarlo tenemos que forzar el casting

console.log(parseFloat(x)) + parseFloat(z))
console.log(Number(x)) + Number(z))
console.log(+x + +z)

console.log(typeof z)