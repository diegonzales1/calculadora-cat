const limpar = () => {
    let resposta = document.getElementById("resp")
    resposta.value = null
}

const botao = (valor) => {
    let telaResposta = document.getElementById("resp")
    let hist = document.getElementById("historico")

    telaResposta.value == "undefined" ? telaResposta.value = null : telaResposta.value += valor; hist.innerHTML += valor
}

const calcular = () => {
    let telaResposta = document.getElementById("resp")
    telaResposta.value = eval(telaResposta.value)  
    let hist = document.getElementById("historico")
    hist.innerHTML += ` = ${telaResposta.value} <br>`
    limpar();
}


