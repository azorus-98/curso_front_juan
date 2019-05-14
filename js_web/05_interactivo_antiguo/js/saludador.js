export class Saludador {
    constructor(){
        this.aQuien= ''
        this.msg=[
            `hola `,
            `adios `
        ]
        
        /**Seleccionar nodos de DOM */
        this.inNombre = document.querySelector('#in-nombre')
        this.btnSaludar = document.querySelector('#btn-saludar')
        this.btmDespedirse = document.querySelector('#btn-despedirse')

        /**Asignar manejandose a los nodos */
        this.btnSaludar.addEventListener('click',this.Saludar.bind(this))
        this.btmDespedirse.addEventListener('click',this.despedirse.bind(this))
    }
    Saludar() {
        this.aQuien = this.inNombre.value
        console.log(this.msg[0] + this.aQuien)
    }
    despedirse() {
        this.aQuien = this.inNombre.value
        console.log(this.msg[1] + this.aQuien)
    }
}