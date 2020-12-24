const btnBox = document.getElementById("btnBox");
const btn478 = document.getElementById("btn478");
const btn711 = document.getElementById("btn711");

const buttons = [btnBox, btn478, btn711];

const clicked = index => {
    for (var i=0; i < buttons.length; i++) {
        if (i === index) {
            buttons[i].classList.add('btn-primary');
            buttons[i].classList.remove('btn-light');
        }
        else {
            buttons[i].classList.add('btn-light');
            buttons[i].classList.remove('btn-primary');
        }
    }
};

btnBox.addEventListener("click", clicked.bind(null, 0));
btn478.addEventListener("click", clicked.bind(null, 1));
btn711.addEventListener("click", clicked.bind(null, 2));