function enviarWhatsApp(){

    let texto = document.getElementById("mensaje").value;

    let numero = "573004622668"; // tu número (Colombia = 57)

    let url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(texto);

    window.open(url, "_blank");
}