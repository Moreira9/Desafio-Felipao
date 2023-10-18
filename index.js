console.log("Bem-Vindo Heroi!!!")
console.log("Qual o seu nome?")
let nome = ("Matheus")
console.log(nome)
console.log("Quanto de XP você tem " + nome + "?" )
let xp = (10900)
console.log(xp)
console.log("Vamos la para sua classificação")
if(xp < 1000){
  console.log("Heroi " + nome + " está no nivel FERRO\nPara o proximo nível é necessario " + (( xp - 1001) * (-1)))
}else if(xp >= 1001 && xp <= 2000 ){
  console.log("Heroi " + nome + " está no nivel BRONZE\nPara o proximo nível é necessario " + (( xp - 2001) * (-1)))
}else if(xp >= 2001 && xp <= 5000 ){
  console.log("Heroi " + nome + " está no nivel PRATA\nPara o proximo nível é necessario " + (( xp - 5001) * (-1)))
}else if(xp >= 5001 && xp <= 7000 ){
  console.log("Heroi " + nome + " está no nivel OURO\nPara o proximo nível é necessario " + (( xp - 7001) * (-1)))
}else if(xp >= 7001 && xp <= 8000 ){
  console.log("Heroi " + nome + " está no nivel PLATINA\nPara o proximo nível é necessario " + (( xp - 8001) * (-1)))
}else if(xp >= 8001 && xp <= 9000 ){
  console.log("Heroi " + nome + " está no nivel ASCENDENTE\nPara o proximo nível é necessario " + (( xp - 9001) * (-1)))
}else if(xp >= 9001 && xp <= 10000 ){
  console.log("Heroi " + nome + " está no nivel IMORTAL\nPara o proximo nível é necessario " + (( xp - 10001) * (-1)))
}else if(xp >= 10001){
  console.log("Heroi " + nome + " está no nivel RADIANTE\nVocê alcançou o topo!!!")
}
