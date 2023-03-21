function calculate(name, value, isFirstPurchase, isCashPayment) {
    if (isFirstPurchase && isCashPayment) {

        if (value > 1000) {name = value + 30%
            (console.log("voce ganhou 30% de desconto")) }
        else if (value < 500) {console.log("voce ganhou 25% de desconto") }
        else { }
        console.log()
    }

    if (isFirstPurchase && !isCashPayment) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }
        console.log()
    }

    if (!isFirstPurchase && isCashPayment) {
        if (value > 1000) { }
        else if (value < 500) { }
        else { }
        console.log()
    }

    if (!isFirstPurchase && !isCashPayment) {
        if (value > 1000) { }
        else if (value < 500) {
            Math.random() * (20 - 10) + 10;
        }
        else { }
        console.log()
    }
}
calculate(600)