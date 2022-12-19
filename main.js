const h1 = document.querySelector("h1")
const p = document.querySelector("p")
const parrafito = document.querySelector(".parrafito")
const pid = document.querySelector("#pid")
const input = document.querySelector("input")

console.log(input.value);
console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});

h1.classList.add("rojo")
h1.classList.add("verde")

input.value ="456"

const img = document.createElement("img")
img.setAttribute("src", 'https://i.pinimg.com/originals/8b/02/40/8b02409f975c98c89e15bc089e3bd289.gif')
console.log(img);
pid.append(img)