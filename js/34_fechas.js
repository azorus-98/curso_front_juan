

(function () {
   let hoy = new Date()
    console.log(hoy)


    let fecha = new Date(1557358454211)
    console.log(fecha)
    console.log(fecha.getDate())


    let nacim = new Date(1998,0,2,15)
    console.log(nacim.toLocaleString()) 
})()


function toStreamFechaEnESpañol(fecha=new Date) {
    let diaSemana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
    let mes =['enero','febrero','marzo','abril','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'] 
    let fechaEnEspañol = diaSemana[fecha.getDate()]+', '+ fecha.getDate()+'de'+ fecha.getFullYear()
    return fechaEnEspañol
    
}
palabrasSemana(nacim)