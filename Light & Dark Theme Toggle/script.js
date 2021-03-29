const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
    // change website's theme
    document.body.classList.toggle('dark');
});