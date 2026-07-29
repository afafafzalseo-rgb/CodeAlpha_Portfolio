// Smooth Scroll Active Link

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

// Scroll To Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// Typing Effect

const text = [
    "Web Developer",
    "SEO Specialist",
    "Graphic Designer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {

        count = 0;

    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.querySelector(".left h2").textContent = letter;

    if (letter.length === currentText.length) {

        count++;

        index = 0;

        setTimeout(type, 1200);

    } else {

        setTimeout(type, 100);

    }

})();