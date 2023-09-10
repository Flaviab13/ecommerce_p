document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const confirmationMessage = document.getElementById("confirmationMessage");

    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(contactForm);

        // Aquí puedes enviar los datos del formulario al servidor usando una solicitud POST o GET.
        // Puedes usar la función fetch para hacerlo.

        //  solicitud POST usando fetch:
        fetch("/contact", {
            method: "POST",
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                // Mostrar el mensaje de confirmación y limpiar el formulario.
                confirmationMessage.style.display = "block";
                contactForm.reset();
            } else {
                // Manejar errores aquí si es necesario.
                console.error("Error al enviar el formulario.");
            }
        })
        .catch(error => {
            console.error("Error de red:", error);
        });
    });
});