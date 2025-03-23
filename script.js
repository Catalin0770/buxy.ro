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

themeSwitch.addEventListener("click", () => {
    document.body.classList.toggle("lightmode");
    localStorage.setItem("lightmode", document.body.classList.contains("lightmode") ? "active" : "inactive");
});

// Verifică tema salvată
if (localStorage.getItem("lightmode") === "active") {
    document.body.classList.add("lightmode");
}
