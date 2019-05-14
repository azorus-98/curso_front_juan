/**
 * funcion constructora de facturas
 */
function Factura(empresa,clientes,items,tipoIVA,formaPago) {
    this.empresa=empresa
    this.clientes=clientes
    this.items=items
    this.tipoIVA=tipoIVA
    this.formaPago=formaPago
    calculaImportante= function(){
        let iva =this.tipoIVA<1?1+this.tipoIVA:this.tipoIVA
        return this.items.map(item=>item.precio*item.cantidad).reduce((a,b)=>a+b)*iva
    }
    
}
 factura={
    empresa : {
        nombreEmp='libresias pepe',
        direccionEmp='c/ salmon',
        telefonoEmp='916584325',
        nifEmp='B-26782169'
    },
    clientes :{
        nombre='',
        direccion='',
        telefono='',
        dni=''
    },
    items: [
        {descripcion:'libro 1', precio: 20, cantidad: 12},
        {descripcion:'libro 2', precio: 24, cantidad: 10},
        {descripcion:'libro 3', precio: 34, cantidad: 7},
    ],
    importeTotal: 0,
    tipoIVA: 0.23,
    formaPago:'efectivo',
    calculaImportante: function(){
        let iva =this.tipoIVA<1?1+this.tipoIVA:this.tipoIVA
        return this.items.map(item=>item.precio*item.cantidad).reduce((a,b)=>a+b)*iva
    },
}