function authenticate() {
    var anniversaryDate = document.getElementById("anniversaryDate").value;
    var errorMessage = document.getElementById("errorMessage");

    // Comprueba si la fecha ingresada coincide con la fecha de aniversario
    if (anniversaryDate === "2022-02-22") {
        // Redirige al usuario a la interfaz principal si la autenticación es exitosa
        window.location.href = "main.html";
    } else {
        // Muestra un mensaje de error si la fecha es incorrecta
        errorMessage.innerHTML = "La fecha de aniversario es incorrecta. Vuelve a intentarlo &#128586";
    }
}
