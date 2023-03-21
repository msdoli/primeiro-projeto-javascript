//Faça um programa onde ele leia 4 numeros. Em cada caso, ele 
//deve retornar a mensagem condizente:-Todos os numeros são 
//impares => TODOS OS NUMEROS SÃO IMPARES-Todos os numeros são
// pares => TODOS OS NUMEROS SÃO PARES.Em caso negativo dos casos
// acima, colocar uma mensagem =>Há numeros pares e impares.
const one = 23
const two = 1
const three =3
const four =43
if(one % 2=== 0 && two % 2=== 0 && three % 2=== 0 && four % 2=== 0 ){
    console.log("todos são pares")
}else if(one % 2!== 0 && two % 2!== 0 && three % 2!== 0 && four % 2!== 0){
    console.log("todos são impares")
}else {
    console.log("tudo misturado")
}