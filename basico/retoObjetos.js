var autos = [];
var marca;
var modelo;
var año;

function auto(marca, modelo, año){
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
}
for (let i = 0; i < 30; i++) {
    marca = prompt("Ingresa la marca del auto -> ");
    modelo = prompt("Ingresa el modelo del auto -> ");
    año = prompt("Ingresa el año del auto -> ");
    autos.push(new auto(marca, modelo, año))
    
   
    var respuesta = prompt("Escriba Y para continuar o N para dejar de guardar elementos ->");
    if (respuesta == "n" || respuesta == "N") {
        console.log(autos);
        break;
    }
    
}
