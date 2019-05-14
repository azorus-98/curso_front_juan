export class Saludador {
    constructor() {
        this.aQuien = ''
        this.msg = [`Hola `, `Adios `,'']

        /** Seleccionar nodos del DOM */
        this.inNombre = document.querySelector('#in-nombre')
        this.btnSaludar = document.querySelector('#btn-saludar')
        this.btnDespedirse = document.querySelector('#btn-despedirse')
        this.btnborrar = document.querySelector('#btn-borrar')
        this.output = document.querySelector('#btn-output')

        /**Asignar manejadores a los nodos */
        this.btnSaludar.addEventListener('click', this.saludar.bind(this))
        this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
        this.btnborrar.addEventListener('click', this.borrar.bind(this))
    }

    borrar()
        this.output.innerHTML=''
    saludar() {
        if (this.inNombre.value) {
            this.aQuien= '<b>'+this.inNombre.value+'</b>'
            this.output.innerHTML=this.msg[0] + this.aQuien
        }
        
    }

    despedirse() {
        if (this.inNombre.value) {
            this.aQuien= '<b>'+this.inNombre.value+'</b>'
            this.output.innerHTML=this.msg[1] + this.aQuien
        }
}