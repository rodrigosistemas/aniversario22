// Función para cerrar sesión
function logout() {
    // Redirige al usuario a la página de autenticación
    window.location.href = "index.html";
}

window.addEventListener('DOMContentLoaded', (event) => {
    var musica = document.getElementById('miMusica');
    var reproducirBtn = document.getElementById('reproducirBtn');

    if (musica !== null && reproducirBtn !== null) {
      reproducirBtn.addEventListener('click', function() {
        musica.play().catch(function(error) {
          console.log("Error al reproducir música:", error);
        });
      });
    }
  });