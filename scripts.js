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

var dropdown = document.getElementsByClassName("dropdown-btnProjects");
var i;
for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
        } else {
        dropdownContent.style.display = "block";
        }
    });
}
