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
let errorMom = document.getElementById("error-mom");
let success = document.getElementById("success");
let fail = document.getElementById("fail");
errorMom.removeChild(success);
errorMom.removeChild(fail)

// event on submit button ... match the generator pic and input and show the message below
document.getElementById("submit-btn").addEventListener("click", function () {
    let pin = document.getElementById("pin-field").value;
    let myInput = document.getElementById("calc-output").value;
    // let errorMom = document.getElementById("error-mom");
    // let success = document.getElementById("success");
    // let fail = document.getElementById("success");
    // errorMom.removeChild(success);
    if (pin == myInput) {
        errorMom.appendChild(success);
        errorMom.removeChild(fail);
    }
    else {
        errorMom.appendChild(fail);
        errorMom.removeChild(success)
    }
})
