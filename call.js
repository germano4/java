
const form = document.querySelector("form")
const resp = document.querySelector("h3")

//se comunicanocom o html
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const nome = form.inNome.value
    const masculino = form.inMasculino.checked
    const altura = Number(form.inAltura.value)

    //calculando
    let peso
    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }
    //resultado 
    resp.innerText = `${nome} seu peso ideal é: ${peso.toFixed(3)}Kg`
})

//limpa o form
form.addEventListener("reset", (e) => {
    resp.innerText = ""
})