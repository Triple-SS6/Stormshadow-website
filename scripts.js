function dark() {
    var element = document.body;
    element.classList.toggle('darkMode');    
}

const today = new Date();
let year = today.getFullYear();
document.querySelector('.year').innerHTML = year;

function closeD(x) {
    x.classList.toggle('change');
    
    sidebar1();
}

function sidebar1() {
    var openclose = document.querySelector('.sidebar');
    if (openclose.style.display === 'grid') {
        openclose.style.display = 'none';
    }
    else {
        openclose.style.display = 'grid';
    }
}