var campoFiltro = document.querySelector("#filtrar-tabela")

campoFiltro.addEventListener("input", function() {
    var processos = document.querySelectorAll(".processos")

    if (this.value.length > 0) {
        for (var i = 0; i < processos.length; i++) {
            var processo = processos[i]
            var tdNumProc = processo.querySelector(".numproc")
            var numproc = tdNumProc.textContent
            var expressao = new RegExp(this.value, "i")

            if (expressao.test(numproc)) {
                processo.classList.remove("invisivel")
            } else {
                processo.classList.add("invisivel")
            }
        }
    } else {
        for (var i = 0; i < processos.length; i++) {
            var processo = processos[i]
            processo.classList.remove("invisivel")
        }
    }
})