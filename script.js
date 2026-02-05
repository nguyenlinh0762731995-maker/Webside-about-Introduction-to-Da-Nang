// ===============================
// Chào mừng
// ===============================
window.onload = function () {
    console.log("Website Giới thiệu Thành phố Đà Nẵng đã sẵn sàng!");
};

// ===============================
// Cuộn mượt khi click menu
// ===============================
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===============================
// Highlight menu theo vị trí cuộn
// ===============================
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.style.color = "#0077ff";
        if (link.getAttribute("href") === "#" + current) {
            link.style.color = "#ff6b6b";
        }
    });
});

// ===============================
// NÚT BACK TO TOP
// ===============================
const backToTopBtn = document.createElement("button");
backToTopBtn.innerText = "⬆";
document.body.appendChild(backToTopBtn);

backToTopBtn.style.position = "fixed";
backToTopBtn.style.bottom = "30px";
backToTopBtn.style.right = "30px";
backToTopBtn.style.padding = "12px 16px";
backToTopBtn.style.fontSize = "20px";
backToTopBtn.style.border = "none";
backToTopBtn.style.borderRadius = "50%";
backToTopBtn.style.backgroundColor = "#0077ff";
backToTopBtn.style.color = "white";
backToTopBtn.style.cursor = "pointer";
backToTopBtn.style.display = "none";
backToTopBtn.style.boxShadow = "0 6px 15px rgba(0,0,0,0.2)";

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ===============================
// Animation khi scroll
// ===============================
const revealSections = document.querySelectorAll("section");

const revealOnScroll = () => {
    revealSections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

// Gán style ban đầu
revealSections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// ===============================
// Tự động cập nhật năm ở footer
// ===============================
const footer = document.querySelector("footer p");
const year = new Date().getFullYear();
footer.innerHTML = `© ${year} | Website giới thiệu Đà Nẵng`;
