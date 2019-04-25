let numeros = [1,2,3,4,5,6,7,8,9,0]
let amigos = ['isma', 'marcos', 'mario',]

for (let i = 0; i < amigos.length; i++) {
    const element = amigos[i];
    console.log(`hola ${element}`)
}

/**
 * 
 * programa si un nombre a sido usado alguna vez por un rey
 * funtion isRey
 * @name :string
 * @returns: boolean
 */

 let reyes= [ 'fernando', 'isabel', 'carlos', 'felipe', 'luis', 'luis','jose']

 function isRey (name){

    for (let i = 0; i < reyes.length; i++) {
        const rey = reyes[i];
        if (rey.toLowerCase() === name.toLowerCase()) {
            return true
        }
    }
    return false
 }

 function mostrar (nombre){
    let mensages= [
        `el nombre ${name} ha sido usado por un rey de España`,
        `buena elccion el nombre ${name} no ha sido usado por un rey de España`
 ]
    if (isRey(name)) {
        i=0
    }else{
        i=1
    }
    console.log(mensages[i])
 }
 let name= 'Carlos'
 name = 'pepe'
 mostrar(name)