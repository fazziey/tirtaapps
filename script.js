// ── Contact Button ──────────────────────────────────────────
document.getElementById("contactBtn").addEventListener("click", function () {
    const box = document.getElementById("contactInfo");
    const isVisible = box.classList.contains("visible");

    if (isVisible) {
        box.classList.remove("visible");
        box.innerHTML = "";
    } else {
        box.innerHTML = `
            <strong>Tim Support Tirta Apps</strong><br>
            📧 <a href="mailto:fazzyfitraturrahman93@gmail.com">fazzynurfitratulrahman@gmail.com</a><br>
            💬 <a href="https://wa.me/6285335015609" target="_blank">+62 853-3501-5609</a> (WhatsApp)
        `;
        box.classList.add("visible");
    }
});

// ── Bottom Tab Bar Active State ──────────────────────────────
const tabItems = document.querySelectorAll(".tab-item");
const sections = ["home", "download", "panduan", "bantuan"];

function setActiveTab(id) {
    tabItems.forEach(tab => {
        tab.classList.toggle("active", tab.dataset.section === id);
    });
}

// Highlight tab based on scroll position
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
        }
    });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
});

// Also update on tab click immediately
tabItems.forEach(tab => {
    tab.addEventListener("click", () => {
        setActiveTab(tab.dataset.section);
    });
});