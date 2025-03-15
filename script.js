function hamburg() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(0px)";
}

function cancel() {
  const navbar = document.querySelector(".dropdown");
  navbar.style.transform = "translateY(-500px)";
}

const texts = ["DEVELOPER", "DESIGNER", "STUDENT"];
let speed = 100;
const textElements = document.querySelector(".typewriter-text");
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < texts[textIndex].length) {
    textElements.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function eraseText() {
  if (textElements.innerHTML.length > 0) {
    textElements.innerHTML = textElements.innerHTML.slice(0, -1);
    setTimeout(eraseText, 50);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    charIndex = 0;
    setTimeout(typeWriter, 500);
  }
}

window.onload = typeWriter;

const themeSwitch = document.getElementById("theme-switch");
const img = document.querySelector(".image img");

let lightmode = localStorage.getItem("lightmode");

const enableLightmode = () => {
  document.body.classList.add("lightmode");
  if (img) img.src = "Imagini/Par Lung Alb.png";
  localStorage.setItem("lightmode", "active");
};

const disableLightmode = () => {
  document.body.classList.remove("lightmode");
  if (img) img.src = "Imagini/Par Scurt Negru.png";
  localStorage.setItem("lightmode", "inactive");
};

if (lightmode === "active") {
  enableLightmode();
}

themeSwitch.addEventListener("click", () => {
  lightmode = localStorage.getItem("lightmode");
  if (lightmode !== "active") {
    enableLightmode();
  } else {
    disableLightmode();
  }
});