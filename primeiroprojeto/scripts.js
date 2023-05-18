const button = document.getElementById('convert-button')

const select= document.getElementById("currency-select")

const dolar = 5.2

const convertValues = () => {
    const input = document.getElementById('input-real').value
    const realvalue= document.getElementById('real-value-text')
const americavalue = document.getElementById('real-value-america')


//realvalue.innerHTML = input

realvalue.innerHTML = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
}).format(input)


//americavalue.innerHTML = input/dolar
    
americavalue.innerHTML = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
}).format(input/dolar)

}
changeCurrency = () => {
const currencyName =document.getElementById("currency-name")
const currencyImg = document.getElementById("currency-img")



if (select.value ==='US$ Dólar Americano'){
currencyName.innerHTML = "Dólar Americano"
currencyImg.src = "../img/estados-unidos (1).png"
}

if(select.value ==='€ Euro'){
    currencyName.innerHTML = "Euro"
    currencyImg.src ="../img/euro.png"
}
}

button.addEventListener('click', convertValues)

select.addEventListener("change", changeCurrency)