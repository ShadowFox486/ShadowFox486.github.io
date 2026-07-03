// ==========================================
// Elliot.dev
// Hacker Effects
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // 3D Card Tilt
    // =====================================

    const cards = document.querySelectorAll(
        ".glass, .project-card, .skill-card, .profile-card, .stat-card"
    );

    cards.forEach(card => {

        card.addEventListener("mousemove", e => {

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * -12;
            const rotateY = ((x / rect.width) - 0.5) * 12;

            card.style.transform =
                `perspective(1000px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-8px)`;

        });

        card.addEventListener("mouseleave", () => {

            card.style.transform =
                "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";

        });

    });

    // =====================================
    // Magnetic Buttons
    // =====================================

    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("mousemove", e => {

            const rect = button.getBoundingClientRect();

            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform =
                `translate(${x * 0.18}px, ${y * 0.18}px)`;

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translate(0,0)";

        });

    });

    // =====================================
    // Terminal Glitch
    // =====================================

    const titles = document.querySelectorAll(
        ".terminal-title,.shadow-title,.about-title"
    );

    setInterval(() => {

        titles.forEach(title => {

            title.classList.add("glitch");

            setTimeout(() => {

                title.classList.remove("glitch");

            }, 180);

        });

    }, 7000);

    // =====================================
    // Random Neon Flicker
    // =====================================

    const neon = document.querySelectorAll(".neon");

    setInterval(() => {

        neon.forEach(item => {

            item.style.opacity = ".6";

            setTimeout(() => {

                item.style.opacity = "1";

            }, 90);

        });

    }, 5000);

    // =====================================
    // Floating Animation
    // =====================================

    const floating = document.querySelectorAll(".float");

    floating.forEach((item, index) => {

        item.style.animationDelay = `${index * 0.3}s`;

    });

});