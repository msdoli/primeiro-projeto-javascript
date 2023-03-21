//Faça um programa onjde leia um numero e diga se ele é:
// -impar,-par
//-é um numero primo e impar,-é par e divisivel por 5.
const number = 7
if (number % 2 === 0) {
    if (number % 5 === 0) console.log("o numero é divisivel por 5")
    else console.log("o numero é par e não é divisivel por 5")
} else {
    for (let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log("ele é impar, mas não é primo")
            break
        } else {
            if (i === number - 1) console.log("ele é um numero primo")
        }


}