const square = document.getElementById("square");

const content = document.getElementById("contentDisplay");


square.addEventListener("animationend", function(event) {
    if (event.animationName === "cube1") {
        square.style.animationName = "cube2";
        square.style.animationDuration = "0.5s"; 
        square.style.animationDirection = "normal"; 
    } else if (event.animationName === "cube2") {
        square.style.animationName = "cube3";
        square.style.animationDuration = "0.5s"; 
        square.style.animationDirection = "reverse"; 
    } else if (event.animationName === "cube3") {
        square.style.animationName = "cube4";
        square.style.animationDuration = "0.5s"; 
        square.style.animationDirection = "normal"; 
    } else if (event.animationName === "cube4") {
        square.style.animationName = "cube5";
        square.style.animationDuration = "1.3s"; 
        square.style.animationDirection = "reverse"; 
    } else if (event.animationName === "cube5") {
        square.style.display = "none";
        content.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-in-section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});


