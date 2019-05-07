
function isPali(cadena='') {
    let r= false
    let cadenaCambiada=cadena.split('').join('').toLowerCase()
    let cadenaInversa=cadena.split('').reverse().join('').toLowerCase()
    if (cadenaCambiada!==cadenaInversa) {
        r=true
    }
    return r
}
//esto es una funcion auto ejecutable 
(function () {
    let texto = [
    'Esto no es un palindromo',
    'atar a la rata'
]
for (let i = 0; i < texto,length; i++) {
    const texto = texto[i];
    console.log(texto)
    console.log(ispali(texto))
})()
//que es lo mismo que:
function prueva () {
    let texto = [
    'Esto no es un palindromo',
    'atar a la rata'
]
for (let i = 0; i < texto,length; i++) {
    const texto = texto[i];
    console.log(texto)
    console.log(ispali(texto))
}
prueva()