export function app() {
  console.log('app cargada')

    /**
    * Declarar variable */
   
    /**
     * Nodos del doom */
   let btnMostrar =document.querySelector('#btn-mostrar')
   let btnsaludar =document.querySelector('#btn-saludar')

   /**
    * Manejadores de eventos */ 
   btnMostrar.addEventListener('click',mostrar)
   btnsaludar.addEventListener('click',saludar)
    
  function mostrar() {
    console.log('item1')
    console.log('item2')
    setTimeout(()=>console.log('item3'),2000)
    console.log('item4')
    setTimeout(()=>console.log('item5'),1000)
    }
  }
  function saludar() {
    console.log('hola')
  }

   /*   setTimeout(saludar,1000)
  function saludar() {
    console.log('hola amigo')
  } */
  