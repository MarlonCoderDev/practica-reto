function cambiarContenido(pagina) {
  const textoCuerpo = document.getElementById("textoCuerpo");
  switch (pagina) {
    case 'Inicio':
      textoCuerpo.textContent = "Bienvenido a la página de inicio. Aquí encontrarás todo sobre nuestra empresa.";
      break;
    case 'Contacto':
      textoCuerpo.textContent = "Ponte en contacto con nosotros a través de nuestra página de contacto.";
      break;
    default:
      textoCuerpo.textContent = "Haz clic en un enlace para ver el contenido correspondiente.";
      break;
  }
}

function mostrarMensajeBanner() {
  alert("¡Espero que entiendas la finalidad de esta pagina web.");
}

function mostrarMensaje(programacion) {
  alert("Has seleccionado: " + programacion);
}

document.addEventListener('DOMContentLoaded', function() {
  cambiarContenido('Inicio');
});
