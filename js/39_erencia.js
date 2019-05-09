function Persona(nombre,edad) {
    this.nombre=nombre
    this.edad=edad
}

function Alumno(nombre,edad,curso) {
    this.nombre=nombre
    this.edad=edad
    this.curso=curso
}
Alumno.prototype =new Persona()
Alumno.prototype.construction=Alumno

const alumno1=new Alumno('pepe',23,'Javascript')
const alumno2=new Alumno()

console.log(alumno1)
alumno1.saludar()
alumno2.saludar(alumno1.nombre)



////////////////////////////
console.clear
//herencia prototipica
const user1={
    nombre:'pepe',
    edad:25
    saludar:function (`Hola, soy ${this.nombre}`) {}
}

obje