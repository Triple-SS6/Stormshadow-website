function area () {
    var inputElementLen = document.querySelector('.length');
    var len = inputElementLen.value;
    var inputElementWid = document.querySelector('.width');
    var wid = inputElementWid.value;
    var inputElementHei = document.querySelector('.height');
    var hei = inputElementHei.value;

    var areaz = len*wid;
    var volumez = len*wid*hei;

    document.querySelector('.areaz').innerHTML = areaz;
    document.querySelector('.volumez').innerHTML = volumez;
}

function circle() {
    const inputElementcircleArea = document.querySelector('.circleArea');
    const CA = inputElementcircleArea.value;
    const inputElementRAD = document.querySelector('.cirArea');
    const R = inputElementRAD.value;

    if (CA === 'Radius') {
        const areaCircle = (Math.PI)*(Math.pow(R,2));
        document.querySelector('.circleA').innerHTML = areaCircle;
    }
    else if (CA === 'Diameter') {
        const areaCircle = (Math.PI)*(Math.pow((R/2),2));
        document.querySelector('.circleA').innerHTML = areaCircle;
    }


    const inputElementcircleVolume = document.querySelector('.circleVolume');
    const V = inputElementcircleVolume.value;
    const inputElementrad = document.querySelector('.cirVolume');
    const r = inputElementrad.value;
    const inputElementLength = document.querySelector('.cirLength');
    const l = inputElementLength.value;

    if (V === 'Radius') {
        const VolumeCircle = l*((Math.PI)*(Math.pow(r,2)));
        document.querySelector('.circleV').innerHTML = VolumeCircle;
    }
    else if (V === 'Diameter') {
        const VolumeCircle = l*((Math.PI)*(Math.pow((r/2),2)));
        document.querySelector('.circleV').innerHTML = VolumeCircle;
    }
}

function flow() {
    var inputElementFlowr = document.querySelector('.flowRr');
    var flowr = inputElementFlowr.value;

    var inputElementLen = document.querySelector('.length');
    var len = inputElementLen.value;
    var inputElementWid = document.querySelector('.width');
    var wid = inputElementWid.value;
    var inputElementHei = document.querySelector('.height');
    var hei = inputElementHei.value;

    var area1 = len*wid;
    var volume1 = len*wid*hei;

    var inputElementTym = document.querySelector('.time');
    var tym = inputElementTym.value;

    var velocity = len/tym;
    document.querySelector('.velocity').innerHTML = velocity;
    if (flowr === 'Area') {
        var flowz = velocity*area1;
        document.querySelector('.flowRatez').innerHTML = flowz;
    }
    else if (flowr === 'Volume') {
        var flowz = volume1/tym;
        document.querySelector('.flowRatez').innerHTML = flowz;
    }
}

function HrNCircular() {
    var inputElementA = document.querySelector('#area');
    var A = inputElementA.value;
    var inputElementPw = document.querySelector('#perimeter');
    var Pw = inputElementPw.value;

    hradiusNC = A/Pw;
    document.querySelector('.nonCircular').innerHTML =hradiusNC;
}

function HrCircular() {
    var inputElementPD = document.querySelector('#pipeDiameter');
    var pipeDiameter = inputElementPD.value;

    hradiusC = pipeDiameter/4;
    document.querySelector('.circular').innerHTML =hradiusC;
}

function reynoldsNo() {
    var inputElementConduits = document.querySelector('.conduit');
    var conduits = inputElementConduits.value;
    var inputElementvelocit = document.querySelector('.velo');
    var velocit = Number(inputElementvelocit.value);
    var inputElementHydrad = document.querySelector('.hydradius');
    var hydrad = Number(inputElementHydrad.value);
    var inputElementVisco = document.querySelector('.viscosity');
    var visco = Number(inputElementVisco.value);

    let reynolds = ((4*(velocit*hydrad))/(visco));
    document.querySelector('.reynold').innerHTML = reynolds;

    if (conduits === 'Closed') {
        if (reynolds < 2000) {
            document.querySelector('.message').innerHTML = `It's a laminar Flow, if the values submitted are for a flow in closed conduits`;
        }
        else if (reynolds > 2000 && reynolds < 4000) {
            document.querySelector('.message').innerHTML = `It's a transitional Flow, if the values submitted are for a flow in closed conduits`;
        }
        else if (reynolds === Infinity) {
            document.querySelector('.message').innerHTML = `Please check your input values and Try again.`;
        }
        else if (reynolds > 4000) {
            document.querySelector('.message').innerHTML = `It's a Turbulent Flow, if the values submitted are for a flow in closed conduits`;
        }
    }
    else if (conduits === 'Open') {
        if (reynolds < 500) {
            document.querySelector('.message').innerHTML = `It's a laminar Flow, if the values submitted are for a flow in open channels`;
        }
        else if (reynolds > 500 && reynolds < 2000) {
            document.querySelector('.message').innerHTML = `It's a transitional Flow, if the values submitted are for a flow in open channels`;
        }
        else if (reynolds === Infinity) {
            document.querySelector('.message').innerHTML = `Please check your input values and Try again.`;
        }
        else if (reynolds > 2000) {
            document.querySelector('.message').innerHTML = `It's a Turbulent Flow, if the values submitted are for a flow in open channels`;
        }
    }
}


