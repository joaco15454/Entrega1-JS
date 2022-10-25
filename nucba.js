/*Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 
*/

const pizzas = [
    {
        "id": 1,
        "nombre": "muzzarella",
        "ingredientes":[
            "salsa","queso muzzarella","oregano"
        ],
        "precio": 1000
    },
    {
        "id": 2,
        "nombre": "fugazzeta",
        "ingredientes":[
            "salsa","queso muzzarella","cebolla","oregano"
        ],
        "precio": 1200
    },
    {
        "id": 3,
        "nombre": "napolitana",
        "ingredientes":[
            "salsa","queso muzzarella","tomate","ajo","oregano"
        ],
        "precio": 1100
    },
    {
        "id": 4,
        "nombre": "jamon y morron",
        "ingredientes":[
            "salsa","queso muzzarella","jamon","morron"
        ],
        "precio": 1150
    },
    {
        "id": 5,
        "nombre": "provolone",
        "ingredientes":[
            "salsa","queso provolone","oregano"
        ],
        "precio": 1400
    },
    {
        "id": 6,
        "nombre": "roquefort",
        "ingredientes":[
            "salsa","queso roquefort","oregano"
        ],
        "precio": 1400
    }                
]
/*a)  Las pizzas que tengan un id impar.
*/
const pizzasIdImpar = pizzas.filter((pizzas)=> {
    return pizzas.id%2!=0
})
const pizzasIdImparNombre= []
for (let i=0;i<pizzasIdImpar.length;i++) {
    pizzasIdImparNombre.push(pizzasIdImpar[i].nombre)
}
console.log("Las pizzas con id impar son: " + pizzasIdImparNombre.join(",","  ") )


/*
b) ¿Hay alguna pizza que valga menos de $600?
*/


const pizzasMenoresA600 = pizzas.some((pizzas) => {
    return pizzas.precio<600
})

if (pizzasMenoresA600 == false) {
    console.log("No hay pizzas con un precio menor a 600 pesos.")
}
/*c) El nombre de cada pizza con su respectivo precio.
*/

const pizzasNombreyPrecio= []

for (let i=0;i<pizzas.length;i++) {
    pizzasNombreyPrecio.push(pizzas[i].nombre + ", " + pizzas[i].precio + " pesos")
    //pizzasNombreyPrecio.push(pizzas[i].precio)
}
console.log("Los precios de las pizzas son los siguientes: ")
let i = 0
pizzasNombreyPrecio.forEach((pizzasNombreyPrecio)=> {

    console.log(pizzasNombreyPrecio)
    
})
/*d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza actual). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene un array de ingredientes.*/

const nombrePizza = []
const ingredientes = []
for (let i=0;i<pizzas.length;i++) {
    nombrePizza.push(pizzas[i].nombre) 
    ingredientes.push(pizzas[i].ingredientes)
}
ingredientes.forEach((ingredientes) => {
    ingredientes.toString
    

})
let k=0
ingredientes.forEach(ingredientes => {
    console.log("La " +nombrePizza[k] +" tiene los siguientes ingredientes:")
    console.log(ingredientes.join(",", " "))
    k++
})
