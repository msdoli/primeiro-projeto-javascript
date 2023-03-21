const tabuada = (number) => {
    if (number > 10 || number < 1){
        console.log("Aceitamos SOMENTE números de 1 a 10")
    return
    }
    for (let i = 1; i <= 10; i++){
        console.log(`${i} x ${number} = ${i *number}`)
    }
}
tabuada(1)