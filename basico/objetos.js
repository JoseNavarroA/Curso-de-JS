var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.marca}`);
    }
}

//Constructor

function auto(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model x", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020)