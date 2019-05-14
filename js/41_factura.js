function factura(nombreEmp='',direccionEmp='',telefonoEmp='',nifEmp='',nombre='',direccion='',telefono='',dni='') {
    this.nombreEmp=nombreEmp
    this.direccionEmp=direccionEmp
    this.telefonoEmp=telefonoEmp
    this.nifEmp=nifEmp
    this.nombre=nombre
    this.direccion=direccion
    this.telefono=telefono
    this.dni=dni
}





//////////////
function facturaEnpresa (nombreEmp='',direccionEmp='',telefonoEmp='',nifEmp=''){
    this.nombreEmp=nombreEmp
    this.direccionEmp=direccionEmp
    this.telefonoEmp=telefonoEmp
    this.nifEmp=nifEmp
}
function facturaCliente (nombre='',direccion='',telefono='',dni=''){
    this.nombre=nombre
    this.direccion=direccion
    this.telefono=telefono
    this.dni=dni   
}



/////////

function factura(){
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