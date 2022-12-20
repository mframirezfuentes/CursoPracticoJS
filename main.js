const h1 = document.querySelector("h1")
const input1 = document.querySelector("#calculo1")
const input2 = document.querySelector("#calculo2")
const btn = document.querySelector("#btnCalcular")
let resultado = document.getElementById('resultado')


function btnOnClick(){
   let result = parseInt(input1.value) + parseInt(input2.value)
    resultado.append(result)
}