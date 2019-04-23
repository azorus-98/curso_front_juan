let data = 11
duplicar (data)
console.log(data)

//los datos primitivos pasan a la funcuncion
function duplicar(x){
x = x * 2
return x
}
let user1 ={nombre: 'pepe', edad: 32}
matricular(user1, HTML)
console.log (user1)
let user2 = {nombre: `sonia`}
matricular(user2)
console.log(user2)


function matricular(obj, curso= 'JavaScript') {
   obj.curso = 'JavaScript'
}