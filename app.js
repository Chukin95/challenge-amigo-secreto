/* El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
Aquí deberás desarrollar la lógica para resolver el problema. */

// Variables globales
const nuevoNombre = document.querySelector("#amigo");
const imprimirAmigos = document.querySelector("#listaAmigos");
const imprimirSorteado = document.querySelector("#resultado");
const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/; // Expresión regular para permitir solo letras y espacios
const listaAmigos = [];

// Funciones
function agregarAmigo() {
  console.log("Agregando amigo...");
  if (verificarNombre(nuevoNombre.value)) {
    console.log("Paso la verificacion nombre.");
    listaAmigos.push(nuevoNombre.value);
    actualizarLista();
    console.log(`Lista actualizada: ${listaAmigos}`);
    nuevoNombre.value = "";
    nuevoNombre.focus();
    return;
  }
  return;
}

function actualizarLista() {
  let newLista = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    newLista += `<li>${listaAmigos[i]}</li>`;
  }
  imprimirAmigos.innerHTML = newLista;
  return;
}

function sortearAmigo() {
  if (listaAmigos.length > 0) {
    let amigoSorteado = Math.floor(Math.random() * listaAmigos.length);
    imprimirSorteado.innerHTML = `Tu amigo secreto es: ${listaAmigos[amigoSorteado]}.`;
    console.log(`Tu amigo secreto es: ${listaAmigos[amigoSorteado]}.`);
    return;
  } else {
    alert("No hay nombres en la lista de amigos.");
    console.error("No hay nombres en la lista de amigos.");
    return;
  }
}

function verificarNombre(nombre) {
  if (!regex.test(nombre)) {
    alert(
      "Por favor, inserte un nombre y este no debe llevar números o carácteres especiales."
    );
    console.error(
      "Por favor, inserte un nombre y este no debe llevar números o carácteres especiales."
    );
    return;
  } else if (nombre.length < 3) {
    console.error("Por favor, inserte al menos 3 letras.");
    alert("Por favor, inserte al menos 3 letras.");
    return;
  }
  return true;
}
