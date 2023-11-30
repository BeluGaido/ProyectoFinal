// Defino un objeto con detalles 
const productosAlquilerDetalles = {
    "sillaDeRuedas": {
        nombre: "Silla de Ruedas",
        imagen: "IMAGENES/SILLARUEDAS.jpg",
        caracteristicas: ["Plegable", "Soporta hasta 120 kg", "Incorpora reposabrazos y reposapiés"],
        precio: 5000,
    },
    "muletas": {
        nombre: "Muletas",
        imagen: "IMAGENES/mmuleta.jpg",
        caracteristicas: ["Resistente", "Ligera", "De aluminio"],
        precio: 4000,
    },
    "andador": {
        nombre: "Andador",
        imagen: "IMAGENES/andador.jpg",
        caracteristicas: ["Peso máximo: 100 kg", "Plegable", "Regulación de altura"],
        precio: 4000,
    },
    "bota": {
        nombre: "Bota",
        imagen: "IMAGENES/bota.jpg",
        caracteristicas: ["Protege huesos fracturados", "Protege lesiones", "Alta"],
        precio: 4000,
    },
    "baston": {
        nombre: "Bastón",
        imagen: "IMAGENES/imagen baston.jpg",
        caracteristicas: ["Peso máximo: 100 kg", "No plegable", "Regulable"],
        precio: 4000,
    },
};

function mostrarProductosEnFormulario() {
    const selectProducto = document.getElementById("producto");

    // Limpiar opciones anteriores
    selectProducto.innerHTML = "";

    // Agregar nuevas opciones basadas en el objeto de detalles de productos , el for recorre la cantidad de objetos
    for (const key in productosAlquilerDetalles) {
        const option = document.createElement("option");
        option.value = key;
        option.text = productosAlquilerDetalles[key].nombre;
        selectProducto.appendChild(option);
    }
}

// Llamada a la función para mostrar productos en el formulario
mostrarProductosEnFormulario();

// ...

// Función para alquilar un producto
function alquilarProducto() {
    const nombre = document.getElementById("nombre").value;
    const productoSeleccionadoKey = document.getElementById("producto").value;
    const duracion = document.getElementById("duracion").value;


    var mostrar = `${nombre} ha alquilado ${productoSeleccionadoKey} por ${duracion} días`;
    

    document.getElementById('mostrar_factura').innerHTML = mostrar

    // Validar que se ingresen todos los campos
    if (nombre && productoSeleccionadoKey && duracion) {
        const productoSeleccionado = productosAlquilerDetalles[productoSeleccionadoKey];

        // Mostrar detalles del producto seleccionado 

        // Puedes agregar aquí la lógica para enviar esta información a un servidor o realizar otras acciones
    } else {
        alert("Por favor, complete todos los campos del formulario.");
    }
}