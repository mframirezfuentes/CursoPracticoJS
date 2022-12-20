const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
let resultado = document.getElementById('resultado')
let form = document.querySelector('#formulario')


form.addEventListener('submit', sumarValores)

function sumarValores(event){
    event.preventDefault()
   let result = parseInt(input1.value) + parseInt(input2.value)
    resultado.append('El resultado es: '+result)
}