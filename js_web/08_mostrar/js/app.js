export function app() {

    console.log('app cargada')

     /**
     * Declarar variable*/
    let isVisibleDivHide =false
    let msg =['mostrar mas','mostrar menos'] 
    
    /**
     * Nodos del doom */
    let nodos={
        btnCanbiar: document.querySelector('#btn-cambiar')
        divHide: document.querySelector('#div-hide')
    }
     nodos.btnCanbiar.innerHTML=msg[1]
    
     /**
     * Manejadores de eventos */   
    nodos.btnCanbiar.addEventListener('click', cambiar)
    function cambiar() {
        let i = isVisibleDivHide ? 1 :0
        nodos.btnCanbiar.innerHTML=msg[isVisibleDivHide ? 1 :0]
        nodos.divHide.classList.toggle('hide')
        isVisibleDivHide=!isVisibleDivHide
    }


}