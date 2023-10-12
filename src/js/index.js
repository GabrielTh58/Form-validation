const botaoEnviar = document.querySelector(".btn");
const inputs = document.querySelectorAll(".campos");
const aviso = document.querySelectorAll(".campo-obg");

botaoEnviar.addEventListener('click', function () {
    inputs.forEach((input, index) => {
        if (input.value === "") {
            input.classList.remove("bordas-verdes")
            input.classList.add("bordas-vermelhas");
            aviso[index].classList.add("mostrar");
        } else {
            input.classList.remove("bordas-vermelhas");
            input.classList.add("bordas-verdes");
            aviso[index].classList.remove("mostrar");
        }
    });
});
