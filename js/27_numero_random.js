function numeroAlAzar() {
    return parseInt(Math.random()*10/* este numero te dice entre el el 1 y el 10 pero selo puede ser entre 1 y 100 si canvias el 10 por un 100 */)    
   }
   
   for (let i = 0; i < 20; i++) {
       console.log(numeroAlAzar())
       
   }