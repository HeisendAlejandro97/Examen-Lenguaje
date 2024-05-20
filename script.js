function boton() {
    alert('¡Botón clicado!')
}

let num1 = document.getElementById('num1')
let num2 = document.getElementById('num2')
let incremento = document.getElementById('inc')
let valor_incremento = 0
let valor_incremento2 = 0

function increment1() {
    valor_incremento += 1
    num1.textContent = valor_incremento
}

function decrement1() {
    valor_incremento -= 1
    num1.textContent = valor_incremento
}

function increment2() {
    valor_incremento2 += 1
    num2.textContent = valor_incremento2
}

function decrement2() {
    valor_incremento2 -= 1
    num2.textContent = valor_incremento2
}

// function operar(){
//     let valor1 = document.getElementById('lista')
//     let 
//     if (valor1 == suma) {      
//         num1 + num2 = res
//     } if (valor1 == resta) {      
//         num1 - num2 = res
//     } if (valor1 == division) {      
//         num1 / num2 = res
//     } if (valor1 == multi) {      
//         num1 * num2 = res
//     } if
// }