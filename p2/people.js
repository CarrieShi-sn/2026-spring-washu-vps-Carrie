document.addEventListener("DOMContentLoaded", () => {
    const aboutTriggers = document.querySelectorAll(".about-trigger");
    const aboutPanel = document.getElementById("aboutPanel");
    const pageDim = document.getElementById("pageDim");
    const closeAbout = document.getElementById("closeAbout");

    function openAbout() {
        aboutPanel.classList.add("show");
        pageDim.classList.add("show");
        document.body.classList.add("modal-open");
        document.body.classList.add("about-open");
        aboutTriggers.forEach(trigger => trigger.classList.add("active"));
    }

    function closeAboutPanel() {
        aboutPanel.classList.remove("show");
        pageDim.classList.remove("show");
        document.body.classList.remove("modal-open");
        document.body.classList.remove("about-open");
        aboutTriggers.forEach(trigger => trigger.classList.remove("active"));
    }

    aboutTriggers.forEach(trigger => {
        trigger.addEventListener("click", openAbout);
    });

    if (closeAbout) {
        closeAbout.addEventListener("click", closeAboutPanel);
    }

    if (pageDim) {
        pageDim.addEventListener("click", closeAboutPanel);
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeAboutPanel();
        }
    });
});