// Funcție pentru meniul hamburger
function toggleMenu() {
    document.querySelector(".dropdown").classList.toggle("active");
}

// Funcție pentru efectul de scriere
const texts = ["DEVELOPER", "DESIGNER", "STUDENT"];
let index = 0, charIndex = 0, speed = 100;
const textElement = document.querySelector(".typewriter-text");

function typeWriter() {
    if (charIndex < texts[index].length) {
        textElement.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, 1000);
    }
}

function eraseText() {
    if (textElement.innerHTML.length > 0) {
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

window.onload = typeWriter;

// Funcție pentru schimbarea temei
const themeSwitch = document.getElementById("theme-switch");
const themeImage = document.getElementById("imgimg");

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
        themeImage.src = "Imagini/Par Lung Alb.png"; // Corrected path and variable
    } else {
        themeImage.src = "Imagini/Par Scurt Negru.png"; // Corrected path and variable
    }
    localStorage.setItem("lightmode", document.body.classList.contains("lightmode") ? "active" : "inactive");
});

const themeSwitch1 = document.getElementById("theme-switch-1"); // Selectează al doilea buton

themeSwitch1.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
    if (document.body.classList.contains("lightmode")) {
        themeImage.src = "Imagini/Par Lung Alb.png"; // Imagine pentru modul luminos
    } else {
        themeImage.src = "Imagini/Par Scurt Negru.png"; // Imagine pentru modul întunecat
    }
    localStorage.setItem("lightmode", document.body.classList.contains("lightmode") ? "active" : "inactive");
});

if (localStorage.getItem("lightmode") === "active") {
    document.body.classList.add("lightmode");
    themeImage.src = "Imagini/Par Lung Alb.png"; // Corrected path and variable
} else {
    themeImage.src = "Imagini/Par Scurt Negru.png"; // Corrected path and variable
}