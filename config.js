function calcularIMC(peso,altura) {
const imc = peso / (altura * altura)
return imc.toFixed(2) //Retorna o IMC com duas casas decimais
}

const peso = Number(prompt("Digite o seu peso:"))
const altura = Number(prompt("Digite sua altura:"))

const imc = calcularIMC(peso,altura)
console.log(`Seu IMC é: ${imc}`)

if (imc < 18.5) {
console.log("Cassificação: Abaixo do peso")
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Cassificação: Peso normal")
} else if (imc >= 25 && imc < 29.9) {
  console.log("Cassificação: Sobrepeso")
} else {
console.log("Cassificação: Obesidade")
}






