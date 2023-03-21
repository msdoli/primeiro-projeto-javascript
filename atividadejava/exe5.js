//crie 5 objetos nesse formato {nome:"" idade:"" sexo:""
// profissão:"" nacionalidade:""} Ao rodar o programa, deve
// imprimir se a pessoa é aprovada ou não no processo, a pessoa 
//deve ser maior de idade e brasileira para ser aprovada.

const person = {nome:"moises" , idade: "28", sexo: "masculino", 
profissão:"programador", nacionalidade:"brasileiro"}

if(person.idade>=18 && person.nacionalidade === "brasileiro") {
 console.log("voce passou")
} else {
    console.log("voce não passou")
}
