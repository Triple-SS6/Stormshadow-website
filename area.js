function lengthConverterSquareMetre(valNum) {
    var cm = valNum*10000;
    document.querySelector('#outputSquareCentimetre').innerHTML = `= ${cm}`;
    var millimetres = valNum*1000000;
    document.querySelector('#outputSquareMillimetre').innerHTML = `= ${millimetres}`;
    var Feet = valNum*10.7639;
    document.querySelector('#outputSquareFeet').innerHTML = `= ${Feet}`;
    var inchz = valNum*1550.0031;
    document.querySelector('#outputSquareInch').innerHTML = `= ${inchz}`;
}
function lengthConverterSquareCentimetre(valNum) {
    var m = valNum*0.0001;
    document.querySelector('#outputSquareMetre').innerHTML = `= ${m}`;
    var millimetres = valNum*100;
    document.querySelector('#outputSquareMillimetre').innerHTML = `= ${millimetres}`;
    var Feet = valNum*0.00107639;
    document.querySelector('#outputSquareFeet').innerHTML = `= ${Feet}`;
    var inchz = valNum*0.15500031;
    document.querySelector('#outputSquareInch').innerHTML = `= ${inchz}`;
}
function lengthConverterSquareMillimetre(valNum) {
    var m = valNum*0.000001;
    document.querySelector('#outputSquareMetre').innerHTML = `= ${m}`;
    var cm = valNum*0.01;
    document.querySelector('#outputSquareCentimetre').innerHTML = `= ${cm}`;
    var Feet = valNum*0.0000107639;
    document.querySelector('#outputSquareFeet').innerHTML = `= ${Feet}`;
    var inchz = valNum*0.0015500031;
    document.querySelector('#outputSquareInch').innerHTML = `= ${inchz}`;
}
function lengthConverterSquareInch(valNum) {
    var m = valNum*0.00064516;
    document.querySelector('#outputSquareMetre').innerHTML = `= ${m}`;
    var cm = valNum*6.4516;
    document.querySelector('#outputSquareCentimetre').innerHTML = `= ${cm}`;
    var mm = valNum*645.16;
    document.querySelector('#outputSquareMillimetre').innerHTML = `= ${mm}`;
    var feet = valNum*0.0069444444;
    document.querySelector('#outputSquareFeet').innerHTML = `= ${feet}`;
}
function lengthConverterSquareFeet(valNum) {
    var m = valNum*0.09290304;
    document.querySelector('#outputSquareMetre').innerHTML = `= ${m}`;
    var cm = valNum*929.0304;
    document.querySelector('#outputSquareCentimetre').innerHTML = `= ${cm}`;
    var millimetres = valNum*92903.04;
    document.querySelector('#outputSquareMillimetre').innerHTML = `= ${millimetres}`;
    var inchz = valNum*144;
    document.querySelector('#outputSquareInch').innerHTML = `= ${inchz}`;
}