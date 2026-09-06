const botaoMenu = document.querySelector(".menu-hamburguer");
const listaMenu = document.querySelector(".menu ul");

botaoMenu.addEventListener("click", function () {
    listaMenu.classList.toggle("ativo");
});