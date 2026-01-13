
document.addEventListener("DOMContentLoaded", function () {

    const menuLinks = document.querySelectorAll(".menu-link");
    const currentPage = window.location.pathname.split("/").pop();

    menuLinks.forEach(link => {

        // HOVER
        link.addEventListener("mouseover", function () {
            if (!this.classList.contains("active")) {
                this.style.color = "orange";
            }
        });

        link.addEventListener("mouseout", function () {
            if (!this.classList.contains("active")) {
                this.style.color = "";
            }
        });

        // CLICK
        link.addEventListener("click", function () {
            menuLinks.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });

        // SAYFA YÜKLENİNCE AKTİF OLANI BUL
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

    });

});
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
    });
}
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("themeBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            document.body.style.backgroundColor = "gray";
        });
    }
});
const activities = document.querySelectorAll(".activity");

activities.forEach(activity => {

    activity.addEventListener("mouseover", function () {
        const info = this.querySelector(".info");
        if (info) info.style.display = "inline";
    });

    activity.addEventListener("mouseout", function () {
        const info = this.querySelector(".info");
        if (info) info.style.display = "none";
    });

});
let likeCount = 0; // GLOBAL DEĞİŞKEN

const likeBtn = document.getElementById("likeBtn");
const likeCountSpan = document.getElementById("likeCount");

if (likeBtn && likeCountSpan) {
    likeBtn.addEventListener("click", function () {
        likeCount++;
        likeCountSpan.textContent = likeCount;
    });
}
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); // SAYFA YENİLENMESİN

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Lütfen tüm alanları doldurun!");
        } else {
            alert("Mesajınız başarıyla gönderildi");
            contactForm.reset();
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {

    const zoomImages = document.querySelectorAll(".zoom-img");

    zoomImages.forEach(img => {
        img.addEventListener("click", function () {
            this.classList.toggle("zoomed");
        });
    });

});
document.addEventListener("DOMContentLoaded", function () {
    alert("PortCity Tanıtım Sitesine Hoş Geldiniz");
});

