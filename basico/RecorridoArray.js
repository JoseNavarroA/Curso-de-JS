var articulos =[
    {Nombre: "Bici", costo: 3000},
    {Nombre: "Tv", costo: 2500},
    {Nombre: "Libro", costo: 320},
    {Nombre: "Celular", costo: 10000},
    {Nombre: "Laptop", costo: 20000},
    {Nombre: "Teclado", costo: 500},
    {Nombre: "Audifonos", costo: 1700},
];
//Filtra los articulos con costos menores a 500
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <=500;
});
console.log(articulosFiltrados);
//Respuesta 
//0{Nombre: 'Libro', costo: 320}
//1{Nombre: 'Teclado', costo: 500}


//Otro metodo para mapear un array, esta funcion en especifico muestra todos los nombres guardados en el array
var nombreArticulos = articulos.map(function(articulo) {
    return articulo.Nombre
    
});
console.log(nombreArticulos);
//Respuesta ['Bici', 'Tv', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos']

//Otro metodo de busqueda que devuelve un true o false dependiendo de si el elemento buscado existe o no

var encuentraArticulo = articulos.find(function (articulo) {
    return articulo.Nombre === "Laptop"
});
console.log(encuentraArticulo);
//Respuesta {Nombre: 'Laptop', costo: 20000}


//Otro metodo, este ejemplo nos imprime en pantalla el nombre de cada articulo en el array

articulos.forEach(function(articulo) {
    console.log(articulo.Nombre);
});//Respuesta 
//Bici
//Tv
//Libro
//Celular
//Laptop
//Teclado
//Audifonos


//Otro metodo nos regresa una validacion de true o false

var articulosBaratos = articulos.some(function(articulo) {
    return articulo.costo <=700
}); //respuesta true