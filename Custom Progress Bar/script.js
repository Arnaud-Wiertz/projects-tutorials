// select .progress-done
const progress = document.querySelector(".progress-done");

// Encompassing setTimeout arrow function - delay = 500ms
setTimeout(() => {
    // .progress-done appears
    progress.style.opacity = 1;
    // width of .progress-done = data stored in data-done + add % 
    progress.style.width = progress.getAttribute('data-done') + '%';
}, 500)