function pinGenerator() {
    let pin = getValidPin();
    let pinField = document.getElementById("pin-field");
    pinField.value = pin;
}
function getValidPin() {
    let randomNumber = Math.ceil(Math.random() * 10000);
    let randomNumbersLength = randomNumber + "";
    let length = randomNumbersLength.length;
    if (length == 4) {
        return randomNumber;
    }
    else {
        return getValidPin();
    }
}

document.getElementById("generate-pin").addEventListener("click", function () {

    pinGenerator()

})

// calc part 
document.getElementById("calc-body").addEventListener("click", function (event) {
    // calc output 
    let calcOutPut = document.getElementById("calc-output");


    if (isNaN(event.target.innerText)) {
        if (event.target.innerText == "C") {
            calcOutPut.value = "";
        }
    }
    else {
        let numbers = event.target.innerText;
        numbers = calcOutPut.value + numbers;
        calcOutPut.value = numbers;
    }
})

