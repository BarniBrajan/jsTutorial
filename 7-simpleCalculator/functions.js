let firstValue, tmpValue, resultValue, sign

function add() {
    tmpValue = firstValue
    sign = "+"
    firstValue = ""
    document.getElementById('tmpValue').innerHTML = tmpValue
}

function sub() {
    tmpValue = firstValue
    sign = "-"
    firstValue = ""
    document.getElementById('tmpValue').innerHTML = tmpValue
}

function multiply() {
    tmpValue = firstValue
    sign = "*"
    firstValue = ""
    document.getElementById('tmpValue').innerHTML = tmpValue
}

function divide() {
    tmpValue = firstValue
    sign = "/"
    firstValue = ""
    document.getElementById('tmpValue').innerHTML = tmpValue
}

function clearValues() {
    firstValue = tmpValue = resultValue = ""
    document.getElementById('firstValue').innerHTML = ""
    document.getElementById('tmpValue').innerHTML = ""
    document.getElementById('resultValue').innerHTML = ""
}

function result() {
switch (sign) {
    case "+":
        resultValue = parseInt(tmpValue) + parseInt(firstValue)
        document.getElementById('resultValue').innerHTML = resultValue
        break;
    case "-":
        resultValue = parseInt(tmpValue) - parseInt(firstValue)
        document.getElementById('resultValue').innerHTML = resultValue
        break;
    case "*":
        resultValue = parseInt(tmpValue) * parseInt(firstValue)
        document.getElementById('resultValue').innerHTML = resultValue
        break;
    case "/":
        resultValue = parseInt(tmpValue) / parseInt(firstValue)
        document.getElementById('resultValue').innerHTML = resultValue
        break;
}
firstValue = tmpValue = ""
}

function concatenate(x) {
    if( firstValue == null ) {
        firstValue = '' + x 
    }else{
        firstValue = '' + firstValue + x 
    }
    document.getElementById('firstValue').innerHTML = firstValue
}