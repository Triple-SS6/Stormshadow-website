function dark() {
    var element = document.body;
    element.classList.toggle('darkMode');    
}

const today = new Date();
let year = today.getFullYear();

document.querySelector('.year').innerHTML = year;


function closeD(x) {
    x.classList.toggle('change');
}