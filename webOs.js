let saludo = "Salsa y picante, y nos fuimos";

let identificador = document.getElementById("texto");

let miCirculo = document.getElementById("miCirculo")

function saludar() {
    identificador.innerHTML = saludo;
}

function pintar() {
    miCirculo.setAttribute("r","10")
}