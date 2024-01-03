// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}

// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
});


sr.reveal(`.home-text, .home-img,
            .about-img, .about-text,
            .box, .s-box,
            .btn, .connect-text,
            .contact-box`, {
    interval: 200
})
document.addEventListener("DOMContentLoaded", function () {
    var contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Perform client-side validation (you can add more validation as needed)
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        // Prepare data for submission
        var formData = new FormData(contactForm);

        // Use AJAX to submit the form data to the server
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "process_form.php", true);
        xhr.onload = function () {
            if (xhr.status === 200) {
                // Handle successful submission (you can redirect or show a success message)
                alert("Form submitted successfully!");
            } else {
                // Handle errors
                alert("Error submitting form. Please try again later.");
            }
        };
        xhr.send(formData);
    });
});
