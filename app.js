// Variables globales
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/; // Expresión regular para permitir solo letras y espacios
let listaAmigos = [];

// Elementos HTML
const nuevoNombre = document.querySelector("#amigo");
const imprimirAmigos = document.querySelector("#listaAmigos");
const imprimirSorteado = document.querySelector("#resultado");
const botonSortear = document.querySelector("#botonSortearAmigo");

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
    botonSortear.disabled = false;
    botonSortear.style.backgroundColor = "#fe652b";
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

function quitarAmigo(amigo) {
  let resultado = confirm(`¿Estás seguro de eliminar a ${amigo}?`);
  if (resultado) {
    listaAmigos = listaAmigos.filter((a) => a !== amigo);
    actualizarLista();
    console.log(`Amigo eliminado: ${amigo}`);
    console.log(`Lista actualizada: ${listaAmigos.join(", ")}`);

    if (listaAmigos.length === 0) {
      botonSortear.disabled = true;
      botonSortear.style.backgroundColor = "gray";
    }
  }
}

function actualizarLista() {
  imprimirAmigos.innerHTML = listaAmigos
    .map(
      (amigo) =>
        `<li><img src="https://api.dicebear.com/9.x/adventurer-neutral/svg?radius=50&seed=${amigo}&size=32"> <span> ${amigo}</span> <i class="icono fa fa-trash fa-1x" aria-hidden="true" onclick="quitarAmigo('${amigo}')"></i></li>`
    )
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

function reiniciarJuego() {
  location.reload();
}
