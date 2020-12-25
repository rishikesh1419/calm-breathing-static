const btnBox = document.getElementById("btnBox");
const btn478 = document.getElementById("btn478");
const btn711 = document.getElementById("btn711");
let gradient = document.getElementById("gradient");
let breather = document.getElementById("breather");
let pointer = document.getElementById("pointer");

const buttons = [
    {
        element: btnBox,
        gradientClasses: "gradient gradient-box",
        breatherClasses: "breather scaleBox",
        pointerClasses: "pointer-container pointer-box",
    },
    {
        element: btn478,
        gradientClasses: "gradient gradient-478",
        breatherClasses: "breather scale478",
        pointerClasses: "pointer-container pointer-478",
    },
    {
        element: btn711,
        gradientClasses: "gradient gradient-711",
        breatherClasses: "breather scale711",
        pointerClasses: "pointer-container pointer-711",
    },
];

const clicked = index => {
    buttons.map((btn, i) => {
        if (i === index) {
            btn.element.classList.add('btn-primary');
            btn.element.classList.remove('btn-light');
            breather.className = btn.breatherClasses;
            breather.removeChild(pointer);
            breather.innerHTML = `<div id="pointer" class="${btn.pointerClasses}"><span class="pointer"></span></div>` + breather.innerHTML;
            breather = document.getElementById("breather");
            pointer = document.getElementById("pointer");
            gradient = document.getElementById("gradient");
            gradient.className = btn.gradientClasses;
        }
        else {
            btn.element.classList.add('btn-light');
            btn.element.classList.remove('btn-primary');
        }
    });
};

btnBox.addEventListener("click", clicked.bind(null, 0));
btn478.addEventListener("click", clicked.bind(null, 1));
btn711.addEventListener("click", clicked.bind(null, 2));