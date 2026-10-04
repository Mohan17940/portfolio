// =========================================================
// MOHAN S — DYNAMIC ANIME 3D PORTFOLIO
// =========================================================


// =========================
// Typing Animation
// =========================

const words = [
    "Web Developer",
    "Java Programmer",
    "Frontend Developer",
    "Problem Solver"
];

const typing = document.getElementById("typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    if (!typing) return;

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1300);

            return;
        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            charIndex = 0;

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    const speed =
        deleting ? 60 : 100;

    setTimeout(typeEffect, speed);
}

typeEffect();


// =========================
// Mobile Navigation
// =========================

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


function toggleMenu() {

    if (!menuToggle || !navLinks) return;

    const open =
        navLinks.classList.toggle("open");

    menuToggle.setAttribute(
        "aria-expanded",
        String(open)
    );
}


menuToggle?.addEventListener(
    "click",
    toggleMenu
);


document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks?.classList.remove("open");

                menuToggle?.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });


// =========================
// Scroll Reveal
// =========================

const revealItems =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting)
                    return;

                entry.target.classList.add(
                    "is-visible"
                );

                observer.unobserve(
                    entry.target
                );

            });

        },
        {
            threshold: 0.12
        }
    );


revealItems.forEach(item => {

    revealObserver.observe(item);

});


// =========================
// Active Navbar
// =========================

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navItems =
    document.querySelectorAll(
        ".nav-link"
    );


function setActiveNav() {

    const scrollPoint =
        window.scrollY +
        window.innerHeight * 0.38;

    let currentId = "home";


    sections.forEach(section => {

        if (
            scrollPoint >=
            section.offsetTop
        ) {

            currentId =
                section.getAttribute("id");

        }

    });


    navItems.forEach(link => {

        link.classList.toggle(
            "active",
            link.getAttribute("href") ===
            `#${currentId}`
        );

    });

}


window.addEventListener(
    "scroll",
    setActiveNav,
    {
        passive: true
    }
);

setActiveNav();


// =========================
// Scroll Progress
// =========================

const progressBar =
    document.querySelector(
        ".scroll-progress"
    );


function updateProgress() {

    if (!progressBar) return;

    const scrollTop =
        window.scrollY;

    const totalHeight =
        document.documentElement
            .scrollHeight -
        window.innerHeight;


    const progress =
        totalHeight > 0
            ? (scrollTop / totalHeight) * 100
            : 0;


    progressBar.style.width =
        `${progress}%`;
}


window.addEventListener(
    "scroll",
    updateProgress,
    {
        passive: true
    }
);

window.addEventListener(
    "resize",
    updateProgress
);

updateProgress();


// =========================
// Navbar Scroll Effect
// =========================

const navbar =
    document.getElementById("navbar");


function updateNavbar() {

    if (!navbar) return;

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 40
    );

}


window.addEventListener(
    "scroll",
    updateNavbar,
    {
        passive: true
    }
);

updateNavbar();


// =========================
// Mouse Cursor Glow
// =========================

const cursorGlow =
    document.querySelector(
        ".cursor-glow"
    );


if (
    cursorGlow &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    let mouseX = 0;
    let mouseY = 0;

    let glowX = 0;
    let glowY = 0;


    window.addEventListener(
        "pointermove",
        event => {

            mouseX =
                event.clientX;

            mouseY =
                event.clientY;

        },
        {
            passive: true
        }
    );


    function animateGlow() {

        glowX +=
            (mouseX - glowX) * 0.12;

        glowY +=
            (mouseY - glowY) * 0.12;


        cursorGlow.style.left =
            `${glowX}px`;

        cursorGlow.style.top =
            `${glowY}px`;


        requestAnimationFrame(
            animateGlow
        );
    }


    animateGlow();
}


// =========================
// Dynamic Background Mouse
// =========================

if (
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    window.addEventListener(
        "pointermove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5);

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5);


            document.documentElement
                .style.setProperty(
                    "--mouse-x",
                    `${x * 35}px`
                );


            document.documentElement
                .style.setProperty(
                    "--mouse-y",
                    `${y * 35}px`
                );

        },
        {
            passive: true
        }
    );

}


// =========================
// Scroll Background Movement
// =========================

const gridFloor =
    document.querySelector(
        ".grid-floor"
    );


window.addEventListener(
    "scroll",
    () => {

        if (!gridFloor) return;

        const shift =
            Math.min(
                window.scrollY * 0.035,
                90
            );


        gridFloor.style.setProperty(
            "--grid-shift",
            `${shift}px`
        );

    },
    {
        passive: true
    }
);


// =========================
// Magnetic Buttons
// =========================

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


if (
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    magneticButtons.forEach(button => {

        button.addEventListener(
            "pointermove",
            event => {

                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `translate(
                        ${x * 0.10}px,
                        ${y * 0.10}px
                    )`;

            }
        );


        button.addEventListener(
            "pointerleave",
            () => {

                button.style.transform = "";

            }
        );

    });

}


// =========================
// 3D Tilt Cards
// =========================

const tiltElements =
    document.querySelectorAll(
        "[data-tilt]"
    );


if (
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    tiltElements.forEach(card => {

        card.addEventListener(
            "pointermove",
            event => {

                const rect =
                    card.getBoundingClientRect();


                const mouseX =
                    event.clientX -
                    rect.left;


                const mouseY =
                    event.clientY -
                    rect.top;


                const rotateY =
                    (
                        mouseX /
                        rect.width -
                        0.5
                    ) * 10;


                const rotateX =
                    (
                        0.5 -
                        mouseY /
                        rect.height
                    ) * 10;


                card.style.transform =
                    `perspective(1000px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateZ(14px)`;

            }
        );


        card.addEventListener(
            "pointerleave",
            () => {

                card.style.transform = "";

            }
        );

    });

}


// =========================
// Hero 3D Parallax
// =========================

const heroVisual =
    document.querySelector(
        ".hero-visual"
    );


if (
    heroVisual &&
    window.matchMedia(
        "(pointer:fine)"
    ).matches
) {

    window.addEventListener(
        "pointermove",
        event => {

            const x =
                event.clientX /
                window.innerWidth -
                0.5;


            const y =
                event.clientY /
                window.innerHeight -
                0.5;


            heroVisual.style.transform =
                `rotateY(${x * 7}deg)
                 rotateX(${y * -5}deg)`;

        },
        {
            passive: true
        }
    );


    window.addEventListener(
        "pointerleave",
        () => {

            heroVisual.style.transform =
                "";

        }
    );

}


// =========================
// Particle System
// =========================

const canvas =
    document.getElementById(
        "particleCanvas"
    );

const ctx =
    canvas?.getContext("2d");


if (canvas && ctx) {

    const reducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;


    const mouse = {
        x: null,
        y: null,
        radius: 150
    };


    let particles = [];


    function resizeCanvas() {

        const dpr =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        canvas.width =
            Math.floor(
                window.innerWidth * dpr
            );


        canvas.height =
            Math.floor(
                window.innerHeight * dpr
            );


        canvas.style.width =
            `${window.innerWidth}px`;


        canvas.style.height =
            `${window.innerHeight}px`;


        ctx.setTransform(
            dpr,
            0,
            0,
            dpr,
            0,
            0
        );

    }


    function createParticles() {

        const count =
            reducedMotion
                ? 30
                : Math.min(
                    105,
                    Math.floor(
                        window.innerWidth / 12
                    )
                );


        particles =
            Array.from(
                {
                    length: count
                },
                () => ({

                    x:
                        Math.random() *
                        window.innerWidth,

                    y:
                        Math.random() *
                        window.innerHeight,

                    vx:
                        (
                            Math.random() -
                            0.5
                        ) * 0.28,

                    vy:
                        (
                            Math.random() -
                            0.5
                        ) * 0.28,

                    size:
                        Math.random() *
                        1.5 +
                        0.35,

                    alpha:
                        Math.random() *
                        0.35 +
                        0.08

                })
            );

    }


    function drawParticles() {

        ctx.clearRect(
            0,
            0,
            window.innerWidth,
            window.innerHeight
        );


        particles.forEach(
            particle => {

                if (!reducedMotion) {

                    particle.x +=
                        particle.vx;

                    particle.y +=
                        particle.vy;


                    if (
                        particle.x < -10
                    ) {
                        particle.x =
                            window.innerWidth + 10;
                    }


                    if (
                        particle.x >
                        window.innerWidth + 10
                    ) {
                        particle.x = -10;
                    }


                    if (
                        particle.y < -10
                    ) {
                        particle.y =
                            window.innerHeight + 10;
                    }


                    if (
                        particle.y >
                        window.innerHeight + 10
                    ) {
                        particle.y = -10;
                    }

                }


                // Mouse interaction

                if (
                    mouse.x !== null &&
                    mouse.y !== null
                ) {

                    const dx =
                        particle.x -
                        mouse.x;

                    const dy =
                        particle.y -
                        mouse.y;

                    const distance =
                        Math.hypot(
                            dx,
                            dy
                        );


                    if (
                        distance <
                        mouse.radius &&
                        distance > 0
                    ) {

                        particle.x +=
                            (dx / distance) *
                            0.45;

                        particle.y +=
                            (dy / distance) *
                            0.45;

                    }

                }


                // Particle

                ctx.beginPath();

                ctx.fillStyle =
                    `rgba(
                        220,
                        205,
                        255,
                        ${particle.alpha}
                    )`;

                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );

                ctx.fill();

            }
        );


        // Connecting lines

        if (!reducedMotion) {

            for (
                let i = 0;
                i < particles.length;
                i++
            ) {

                for (
                    let j = i + 1;
                    j < particles.length;
                    j++
                ) {

                    const a =
                        particles[i];

                    const b =
                        particles[j];


                    const dx =
                        a.x - b.x;

                    const dy =
                        a.y - b.y;


                    const distance =
                        Math.hypot(
                            dx,
                            dy
                        );


                    if (
                        distance < 110
                    ) {

                        const opacity =
                            (
                                1 -
                                distance / 110
                            ) * 0.045;


                        ctx.beginPath();

                        ctx.strokeStyle =
                            `rgba(
                                207,
                                195,
                                255,
                                ${opacity}
                            )`;

                        ctx.lineWidth = 1;

                        ctx.moveTo(
                            a.x,
                            a.y
                        );

                        ctx.lineTo(
                            b.x,
                            b.y
                        );

                        ctx.stroke();

                    }

                }

            }

        }


        if (!reducedMotion) {

            requestAnimationFrame(
                drawParticles
            );

        }

    }


    resizeCanvas();

    createParticles();

    drawParticles();


    window.addEventListener(
        "resize",
        () => {

            resizeCanvas();

            createParticles();

            if (reducedMotion) {
                drawParticles();
            }

        }
    );


    window.addEventListener(
        "pointermove",
        event => {

            if (
                window.matchMedia(
                    "(pointer:fine)"
                ).matches
            ) {

                mouse.x =
                    event.clientX;

                mouse.y =
                    event.clientY;

            }

        },
        {
            passive: true
        }
    );


    window.addEventListener(
        "pointerleave",
        () => {

            mouse.x = null;
            mouse.y = null;

        }
    );

}


// =========================
// Project Card Hover Depth
// =========================

document
    .querySelectorAll(".project-card")
    .forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.style.zIndex = "10";

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.zIndex = "";

            }
        );

    });


// =========================
// Page Load
// =========================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

        console.log(
            "Mohan S Portfolio — Dynamic Anime Mode Online 🚀"
        );

    }
);