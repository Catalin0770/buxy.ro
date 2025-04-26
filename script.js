document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const closeBtn = document.getElementById("close-btn");
    const navLinks = document.getElementById("nav-links");

    // Open the navigation bar
    hamburger.addEventListener("click", () => {
        navLinks.classList.add("active");
        hamburger.style.display = "none"; // Hide hamburger button
        closeBtn.style.display = "block"; // Show close button
    });

    // Close the navigation bar
    closeBtn.addEventListener("click", () => {
        navLinks.classList.remove("active");
        closeBtn.style.display = "none"; // Hide close button
        hamburger.style.display = "block"; // Show hamburger button
    });

    const slides = document.querySelectorAll('#carousel .item');
    const dots = document.querySelectorAll('.dots input[type="radio"]');

    dots.forEach((dot, index) => {
        dot.addEventListener('change', () => {
            // Elimină clasa activă de la toate imaginile
            slides.forEach(slide => slide.classList.remove('active'));

            // Adaugă clasa activă imaginii corespunzătoare
            slides[index].classList.add('active');
        });
    });
});

function sendMail(event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    };

    emailjs.send("service_a9xhs9q", "template_2pdlp2a", parms)
        .then(() => {
            showPopup("Email Sent Successfully!");
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            showPopup("Failed to send email. Please try again.");
        });
}

function showPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popup-message");

    popupMessage.textContent = message;
    popup.classList.remove("hidden");
    popup.style.display = "block"; // Show the popup
}

function closePopup() {
    console.log("closePopup triggered"); // Debugging log
    const popup = document.getElementById("popup");

    // Hide the popup
    popup.classList.add("hidden");
    popup.style.display = "none";

    // Reset the form fields
    const emailForm = document.getElementById("emailForm");
    if (emailForm) {
        emailForm.reset(); // Clear all form fields
    }

    // Reload the page immediately
    location.reload();
}