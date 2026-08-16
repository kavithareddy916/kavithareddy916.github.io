/* =================================
   SCROLL REVEAL ANIMATION
================================= */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(
        ".about-text, .skill-card, .project-card, .experience-card, .certificate-card, .education-card, .contact-box"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {

        element.classList.add("reveal");

        observer.observe(element);

    });

});

/* =================================
   CLOSE MOBILE MENU AFTER CLICK
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.getElementById("navbarNav");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navbarCollapse.classList.contains("show")) {

                const bsCollapse =
                    bootstrap.Collapse.getInstance(navbarCollapse) ||
                    new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });

                bsCollapse.hide();
            }

        });

    });

});

/* =================================
   ACTIVE NAVIGATION ON SCROLL
================================= */

document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        navLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });

});
