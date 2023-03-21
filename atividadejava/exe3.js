//faça um programa que gere um numero aleatorio entre 1 e 10,  
//esse numero é o numero 'ganhador'.Então ele tambem irá gerar 
//um numero aleatorio entre 1 e 10, e verifica se a pessoa ganhou ou não
//em caso de ter ganhado mostra o premio, se não ganhou, mostra 
//outra mensagem.
const randommnumber = Math.floor(Math.random() * (10 - 1) +1)
const winningnumber = Math.floor(Math.random() * (10 - 1) +1)

console.log(randommnumber, "randommnumber")
console.log(winningnumber, "winningnumber")

if(randommnumber === winningnumber){
    console.log("ganhador")
}
else {
    console.log( "tente novamente")

}