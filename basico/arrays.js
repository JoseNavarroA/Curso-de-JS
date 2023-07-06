
var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"];
var masfrutas = frutas.push("Uvas");
console.log(frutas)

var ultimo = frutas.pop("Uvas");//borra el ultimo elemento del array

var nuevalongitud = frutas.unshift("Uvas");//posiciona en primer lugar el elemento nuevo del array

var borrarfruta = frutas.shift("Uvas");// Borra el primer elemento del array

var posicion = frutas.indexOf("Cereza"); //Para saber la posición de un elemento en el array