function lengthConverterFeet(valNum) {
    var m = valNum/3.2808;
    document.querySelector('#outputMeters').innerHTML = m;
    var inchz = valNum*12;
    document.querySelector('#outputInches').innerHTML = inchz;
    var cm = valNum/0.032808;
    document.querySelector('#outputCms').innerHTML = cm;
    var yardz = valNum*0.33333;
    document.querySelector('#outputYards').innerHTML = yardz;
    var km = valNum/3280.8;
    document.querySelector('#outputKilometers').innerHTML = km;
    var mile = valNum*0.00018939;
    document.querySelector('#outputMiles').innerHTML = mile;
    // var millimeters = valNum*304.8;
    // // document.querySelector('#outputMillimeters').innerHTML = millimeters;
}

function lengthConverterKilometer(valNum) {
    var m = valNum*1000;
    document.querySelector('#outputMeters').innerHTML = m;
    var inchz = valNum*39370;
    document.querySelector('#outputInches').innerHTML = inchz;
    var cm = valNum*100000;
    document.querySelector('#outputCms').innerHTML = cm;
    var yardz = valNum*1093.6;
    document.querySelector('#outputYards').innerHTML = yardz;
    var mile = valNum*0.62137;
    document.querySelector('#outputMiles').innerHTML = mile;
    // var millimeters = valNum*1000000;
    // // document.querySelector('#outputMillimeters').innerHTML = millimeters;
    var feet = valNum*3280.8;
    document.querySelector('#outputFeet').innerHTML = feet;
}

function lengthConverterMeter(valNum) {
    var inchz = valNum*39.370;
    document.querySelector('#outputInches').innerHTML = inchz;
    var cm = valNum/0.01;
    document.querySelector('#outputCms').innerHTML = cm;
    var yardz = valNum*1.0936;
    document.querySelector('#outputYards').innerHTML = yardz;
    var mile = valNum*0.00062137;
    document.querySelector('#outputMiles').innerHTML = mile;
    // var millimeters = valNum*1000;
    // // document.querySelector('#outputMillimeters').innerHTML = millimeters;
    var feet = valNum*3.2808;
    document.querySelector('#outputFeet').innerHTML = feet;
    var km = valNum/1000;
    document.querySelector('#outputKilometers').innerHTML = km;
}

function lengthConverterInch(valNum) {
    var feet = valNum*0.083333;
    document.querySelector('#outputFeet').innerHTML = feet;
    var m = valNum/39.370;
    document.querySelector('#outputMeters').innerHTML = m;
    var km = valNum/39370;
    document.querySelector('#outputKilometers').innerHTML = km;
    var cm = valNum/0.39370;
    document.querySelector('#outputCms').innerHTML = cm;
    var yardz = valNum*0.027778;
    document.querySelector('#outputYards').innerHTML = yardz;
    var mile = valNum*0.000015783;
    document.querySelector('#outputMiles').innerHTML = mile;
    // var millimeters = valNum*25.4;
    // // document.querySelector('#outputMillimeters').innerHTML = millimeters;
}

function lengthConverterCm(valNum) {
    var m = valNum/100;
    document.querySelector('#outputMeters').innerHTML = m;
    var inchz = valNum*0.39370;
    document.querySelector('#outputInches').innerHTML = inchz;
    var km = valNum/100000;
    document.querySelector('#outputKilometers').innerHTML = km;
    var yardz = valNum*0.010936;
    document.querySelector('#outputYards').innerHTML = yardz;
    var mile = valNum*0.0000062137;
    document.querySelector('#outputMiles').innerHTML = mile;
    // var millimeters = valNum*10;
    // // document.querySelector('#outputMillimeters').innerHTML = millimeters;
    var feet = valNum*0.032808;
    document.querySelector('#outputFeet').innerHTML = feet;
}

function lengthConverterYard(valNum) {
    var m = valNum/1.0936;
    document.querySelector('#outputMeters').innerHTML = m;
    var inchz = valNum*36;
    document.querySelector('#outputInches').innerHTML = inchz;
    var cm = valNum/0.010936;
    document.querySelector('#outputCms').innerHTML = cm;
    var km = valNum/1093.6;
    document.querySelector('#outputKilometers').innerHTML = km;
    var mile = valNum*0.00056818;
    document.querySelector('#outputMiles').innerHTML = mile;
    // var millimeters = valNum*914.4;
    // // document.querySelector('#outputMillimeters').innerHTML = millimeters;
    var feet = valNum*3;
    document.querySelector('#outputFeet').innerHTML = feet;
}

function lengthConverterMile(valNum) {
    var m = valNum/0.00062137;
    document.querySelector('#outputMeters').innerHTML = m;
    var inchz = valNum*63360;
    document.querySelector('#outputInches').innerHTML = inchz;
    var cm = valNum/0.0000062137;
    document.querySelector('#outputCms').innerHTML = cm;
    var yardz = valNum*1760;
    document.querySelector('#outputYards').innerHTML = yardz;
    var km = valNum/0.62137;
    document.querySelector('#outputKilometers').innerHTML = km;
    // var millimeters = valNum*1000000;
    // // document.querySelector('#outputMillimeters').innerHTML = millimeters;
    var feet = valNum*5280;
    document.querySelector('#outputFeet').innerHTML = feet;
}

// // function lengthConverterMillimeter(valNum) {
//     var m = valNum/1000;
//     document.querySelector('#outputMeters').innerHTML = m;
//     var inchz = valNum/25.4;
//     document.querySelector('#outputInches').innerHTML = inchz;
//     var cm = valNum/10;
//     document.querySelector('#outputCms').innerHTML = cm;
//     var yardz = valNum/914.4;
//     document.querySelector('#outputYards').innerHTML = yardz;
//     var km = valNum/1000000;
//     document.querySelector('#outputKilometers').innerHTML = km;
//     var feet = valNum/304.8;
//     document.querySelector('#outputFeet').innerHTML = feet;
//     var Mile = valNum*1000000;
//     document.querySelector('#outputMiles').innerHTML = mile;
// }
