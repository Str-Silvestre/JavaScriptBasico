var frutas = ["Manzana", "Platano", "Cerezas", "Fresa"];

console.log(frutas); //imprime todo el arreglo

console.log(frutas.length); //imprime la longitud del arreglo

console.log(frutas[0]); //imprime  el elemento en la primera posición

var masFrustas = frutas.push("Uvas"); //agrega elementos al final del arreglo

var ultimo = frutas.pop("Uvas"); //elimina el ultimo elemento del arreglo

var nuevoElemento = frutas.unshift("Uvas"); //agrega el elemento al principio del arreglo

var elimarPrimero = frutas.shift("Uvas"); // elimina el primer elemento del arreglo

var posicion = frutas.indexOf("Cereza");// nos regresa la posicion del elemento en el arreglo

//Recorrido de arrrys

var articulos = [
    {Nombre: "Bici", costo: 3000},
    {Nombre: "Tv", costo: 2500},
    {Nombre: "Libro", costo: 320},
    {Nombre: "Celular", costo: 10000},
    {Nombre: "Laptop", costo: 20000},
    {Nombre: "Teclado", costo: 500},
    {Nombre: "Audifonos", costo: 1700}
];

//Metodo Filter 

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
});

//metodo de Map

var nombreArticulos = articulos.map(function(articulo){
    return articulo.Nombre;
})

//Metodo Find 

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.Nombre === "Laptop";
});

//forEach 
articulos.forEach(function(articulo){
    console.log(articulo.Nombre);
});

//Some 

var articuloBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});