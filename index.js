//Array de pizzas//
const pizzaArray = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "anana.png",
  },
];

//1º Voy a crear una función que utilice el evento "DOMContentLoaded" para que todo el doc
//del HTML se haya cargado antes de ejecutar otras acciones en JS, cuando esto pase
//se ejecuta la función del segundo argumento a addEventListener, entonces:/

document.addEventListener("DOMContentLoaded", function() {
  const pizzaInput = document.getElementById("pizzaInput");
  const searchButton = document.getElementById("searchButton");
  const resultadoBusqueda = document.getElementById("resultadoBusqueda");
})

//Ejemplo: const pizzaInput = document.getElementById("pizzaInput");
//Acá se busca un elemento en el DOM con el atributo id igual a "pizzaInput" 
//y lo asigna a la variable pizzaInput, es decir, que hay un elemento en el HTML
// con el id "pizzaInput, ahora agrego el evento click al boton: /

/*searchButton.addEventListener("click", function() {
  const pizzaId = parseInt(pizzaInput.value);
  const pizza = findPizzaById(pizzaId);
}
)*/

//Listo el evento click, cuando se presiona se ejecuta la función del 2º arg al addEventListener.
//Entonces: const pizzaId = parseInt(pizzaIdInput.value); obtiene el valor de pizzaInput
//y lo asigna a la variable pizzaId.
//parseInt() para convertir el valor en un número entero.
//const pizza = findPizzaById(pizzaId);
//Llama a la función findPizzaById() y le pasa el valor de pizzaId como arg, 
//la var pizza almacena el resultado de la búsqueda.
// ACA YA COLOQUE EL EVENTO, YA CREE LAS FUNCIONES DE BUSQUEDA
//👉Si el nº ingresado en el input es valido => renderizar en el contenedor una card con los datos de la pizza (nombre, img y $) 

searchButton.addEventListener("click", function() {
  const pizzaId = parseInt(pizzaInput.value);
  const pizza = findPizzaById(pizzaId);


if (pizza) {
  renderizarPizza(pizza);
  guardarUltimaPizzaBuscada(pizza);
} else {
  errorMensaje("🚨 La pizza no se encontró 🚨");
}
});

const findPizzaById = (id) => {
  return pizzaArray.find((pizza) => pizza.id === id);
};

const renderizarPizza = (pizza) => {
  resultadoBusqueda.innerHTML = 
  ` <div class="pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="img/${pizza.imagen}" alt="${pizza.nombre}">
      <p>Precio: $${pizza.precio.toLocaleString()} ARS</p>
    </div>
  `;
}

const errorMensaje = (mensaje) => {
  resultadoBusqueda.innerHTML = `
    <P class="error-message">${mensaje}</P>
  `;
};

const guardarUltimaPizzaBuscada = (pizza) => {
  // Verificamos que la pizza no sea undefined antes de guardarla en el localStorage
  if (pizza) {
    // Convertimos el objeto pizza a JSON para almacenarlo en el localStorage
    const pizzaJSON = JSON.stringify(pizza);
    localStorage.setItem("ultimaPizzaBuscada", pizzaJSON);
  }
};

// Cargar la última pizza buscada al recargar la página (si existe en el localStorage)
window.addEventListener("load", () => {
  const ultimaPizzaBuscadaJSON = localStorage.getItem("ultimaPizzaBuscada");
  if (ultimaPizzaBuscadaJSON) {
    const ultimaPizzaBuscada = JSON.parse(ultimaPizzaBuscadaJSON);
    renderizarPizza(ultimaPizzaBuscada);
  }
});


//👉Si el nº no coincide con un id, renderizar (no alert) msj de error en el contenedor. 
//👉 Si no se ingresa un nº, renderizar (no alert) un msj de error diferente en el contenedor. 
//👉 Se debe renderizar una única cosa, la nueva pizza o el nuevo mensaje de error.
// El resto del contenido de nuestro contenedor se debe pisar por lo nuevo.








