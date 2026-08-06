// ===============================
// SECUCC Health Care Pharmacy v2.0
// ===============================

// Scroll to Top Button
const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Search Button
const searchButton = document.querySelector(".search-box button");
const searchInput = document.querySelector(".search-box input");

searchButton.addEventListener("click", () => {

    const medicine = searchInput.value.trim();

    if (medicine === "") {
        alert("Please enter a medicine name.");
    } else {
        alert("You searched for: " + medicine);
    }

});

// Welcome Message
window.addEventListener("load", () => {
    console.log("Welcome to SECUCC Health Care Pharmacy");
});
