export function app() {
  console.log('app cargada')

  /** 
   * Nodos del DOM */
  const output2 = document.querySelector('#output2')
  const btnSaludar1 = document.querySelector('#btn-saludar1') 
  const btnHell1 = document.querySelector('#btn-hell1')
  const btnpedir2 = document.querySelector('#btn-pedir2')
  const btnSaludar2 = document.querySelector('#btn-saludar2')
  const btnSaludar3 = document.querySelector('#btn-saludar-17')
  /**
   * Manejadores de eventos */

  btnSaludar1.addEventListener('click', onSaludar1)
  btnHell1.addEventListener('click', onHell1)
  btnpedir2.addEventListener('click', onpedir)
  btnSaludar2.addEventListener('click', onSaludar2)
  btnSaludar3.addEventListener('click', onSaludar3)

  /** 
   * Funciones y tareas */
  /////////////////////////
   function msgAfterTimeout1 (msg, nombre, tiempo, cb) {
      setTimeout(function () {
          cb(msg, nombre);
      }, tiempo);
  };
  

  function onSaludar1() {
      msgAfterTimeout1('Hola', 'Pepito', 2000, (msg, nombre)=>{
          console.log(msg, nombre)
      })

      msgAfterTimeout1('Hola que tal', 'Juanito', 3000, (msg, nombre)=>{
          document.querySelector('#output1').innerHTML = msg + ' ' + nombre.toUpperCase()
      })        
  }

  function onHell1() {

      msgAfterTimeout1( 'Juanito', 'Pepito', 3500, (msg, nombre) => {
          let saludo = (`Hola ${nombre}!`)
          let quienSoy = msg
          console.log(saludo)
          msgAfterTimeout1(msg, saludo, 500, (quienSoy, saludo) => {
              console.log(`${saludo}, soy ${quienSoy}`)
          }) 
      })        
  }

  /////////////////////////////////
  function cocinarPedido() {
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        if (Math.random() > 0.3) {/* 70%simulamos aciertos */
          resolve('toma tu amburgesa')
        }else{/* el otro 30% simulamos errores */
          reject('lo siento se me a quemado la amburguesa')
        }
      },2000)
    })
  }
  

  
  function onpedir(){

    cocinarPedido()
    .then((datos)=>{
      output2.innerHTML += '<li>'+ datos+'</li>'
    })
    .catch((error)=>{
      output2.innerHTML += '<li>'+ error+'</li>'
    })
  }
  function msgAfterTimeout2(msg,nombre,tiempo){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve([msg,nombre])
      },tiempo)
    })
  }

  function onSaludar2(){
    msgAfterTimeout2('Juanito','Pepito',3500)
    .then(( [msg,nombre]) => {
      let saludo=(`Hola ${nombre}!`)
      let quienSoy=msg
      console.log(saludo)
      return msgAfterTimeout2 (msg,saludo,500)
    }).then(([quienSoy,saludo]) => {
      console.log(`${saludo},soy${quienSoy}`)
    })
  }
/*   function onHell2() {

    msgAfterTimeout2( 'Juanito', 'Pepito', 3500, (msg, nombre) => {
        let saludo = (`Hola ${nombre}!`)
        let quienSoy = msg
        console.log(saludo)
        msgAfterTimeout2(msg, saludo, 500, (quienSoy, saludo) => {
            console.log(`${saludo}, soy ${quienSoy}`)
        }) 
    })        
  } */
  ////////////////////////////////////////


}