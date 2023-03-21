const calculadora = (number1, number2, operation) => {
    
    let result
    switch (operation) {
        case `+`:
              result = number1 + number2
            break;
        case `-`:
            result = number1 - number2
            break;
        case `*`:
            result = number1 * number2
            break;
        case `/`:
            result = number1 / number2
            break;

        default:
            result = "nenhum valor encontrado"
            break;

    }
    return result
}
console.log(calculadora(2,5,`+`))