// Variables globales
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/; // Expresión regular para permitir solo letras y espacios
const listaAmigos = [];

// Elementos HTML
const nuevoNombre = document.querySelector("#amigo");
const imprimirAmigos = document.querySelector("#listaAmigos");
const imprimirSorteado = document.querySelector("#resultado");

// Constantes para mensajes de error
const ERROR_NOMBRE_VACIO = "Por favor, inserte un nombre.";
const ERROR_CARACTERES_INVALIDOS =
  "El nombre no debe llevar números o caracteres especiales.";
const ERROR_NOMBRE_CORTO = "Por favor, inserte al menos 3 letras.";
const ERROR_NOMBRE_DUPLICADO =
  "El nombre ya se encuentra en la lista de amigos.";

// Funciones
function agregarAmigo() {
  console.log("Agregando amigo...");
  if (verificarNombre(nuevoNombre.value)) {
    console.log("Paso la verificacion nombre.");
    listaAmigos.push(capitalizarNombre(nuevoNombre.value));
    actualizarLista();
    nuevoNombre.value = "";
    nuevoNombre.focus();
  }
}

function verificarNombre(nombre) {
  if (nombre.trim() === "") {
    alert(ERROR_NOMBRE_VACIO);
    console.error(ERROR_NOMBRE_VACIO);
    return false;
  }
  if (!regex.test(nombre)) {
    alert(ERROR_CARACTERES_INVALIDOS);
    console.error(ERROR_CARACTERES_INVALIDOS);
    return false;
  }
  if (nombre.length < 3) {
    alert(ERROR_NOMBRE_CORTO);
    console.error(ERROR_NOMBRE_CORTO);
    return false;
  }
  if (listaAmigos.includes(capitalizarNombre(nombre))) {
    alert(ERROR_NOMBRE_DUPLICADO);
    console.error(ERROR_NOMBRE_DUPLICADO);
    return false;
  }
  return true;
}

function capitalizarNombre(str) {
  const excepciones = ["de", "la", "del", "y", "van", "los"];
  return str
    .split(" ")
    .map((palabra) => {
      if (excepciones.includes(palabra.toLowerCase())) {
        return palabra.toLowerCase();
      }
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    })
    .join(" ");
}

function actualizarLista() {
  imprimirAmigos.innerHTML = listaAmigos
    .map((amigo) => `<li>${amigo}</li>`)
    .join("");
  console.log(`Lista actualizada: ${listaAmigos.join(", ")}`);
}

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    const amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    imprimirSorteado.innerHTML = `Tu amigo secreto es: ${listaAmigos[amigoSorteado]}.`;
    console.log(`Tu amigo secreto es: ${listaAmigos[amigoSorteado]}.`);
  } else {
    alert("No hay nombres en la lista de amigos.");
    console.error("No hay nombres en la lista de amigos.");
  }
}
