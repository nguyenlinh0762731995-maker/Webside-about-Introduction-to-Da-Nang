// =====================================================
// Đà Nẵng — script.js
// =====================================================

console.log("Đà Nẵng site — script.js đã tải thành công.");

document.addEventListener("DOMContentLoaded", () => {

    /* ---------- Menu mobile ---------- */
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("mainNav");

    navToggle.addEventListener("click", () => {
        const isOpen = mainNav.classList.toggle("open");
        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", isOpen);
    });

    document.querySelectorAll(".main-nav a").forEach(link => {
        link.addEventListener("click", () => {
            mainNav.classList.remove("open");
            navToggle.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });

    /* ---------- Header đổi nền khi cuộn + progress bar ---------- */
    const header = document.getElementById("siteHeader");
    const progressBar = document.getElementById("progressBar");
    const backToTopBtn = document.getElementById("backToTop");

    const onScroll = () => {
        const scrollY = window.scrollY;

        header.classList.toggle("scrolled", scrollY > 60);
        backToTopBtn.classList.toggle("show", scrollY > 400);

        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        progressBar.style.width = progress + "%";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---------- Reveal khi cuộn tới (IntersectionObserver) ---------- */
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));

    /* ---------- Highlight menu theo section đang xem ---------- */
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".main-nav a");

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.main-nav a[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(sec => navObserver.observe(sec));

    /* ---------- Năm hiện tại ở footer ---------- */
    const footerCredit = document.querySelector(".footer-credit");
    if (footerCredit) {
        const year = new Date().getFullYear();
        footerCredit.textContent = `© ${year} · Website giới thiệu Đà Nẵng · Thực hiện bởi sinh viên`;
    }
});        const progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        progressBar.style.width = progress + "%";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* ---------- Reveal khi cuộn tới (IntersectionObserver) ---------- */
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealEls.forEach(el => revealObserver.observe(el));

    /* ---------- Highlight menu theo section đang xem ---------- */
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".main-nav a");

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const link = document.querySelector(`.main-nav a[href="#${id}"]`);
            if (!link) return;
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove("active"));
                link.classList.add("active");
            }
        });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach(sec => navObserver.observe(sec));

    /* ---------- Năm hiện tại ở footer ---------- */
    const footerCredit = document.querySelector(".footer-credit");
    if (footerCredit) {
        const year = new Date().getFullYear();
        footerCredit.textContent = `© ${year} · Website giới thiệu Đà Nẵng · Thực hiện bởi sinh viên`;
    }
});
