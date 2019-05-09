const user1={
    nombre:'pepe',
    edad:25
    saludar:function (`Hola, soy ${this.nombre}`) {}
}

function User(nombre,edad) {
    this.nombre=nombre
    this.edad=edad
}

let user2=new User('Elena',23)

User.prototype.saludar=function(aQuien='amigo'){
    console.log(`hola ${aQuien} soy ${this.nombre}`)
}

console.log(user1)
console.log(user2)

user1.saludar()