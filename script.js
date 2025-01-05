// Simple script for handling button clicks (if you want to add actions)
document.querySelector('.close-btn').addEventListener('click', function() {
    alert("Close button clicked.");
});

document.querySelector('.minimize-btn').addEventListener('click', function() {
    alert("Minimize button clicked.");
});

document.querySelector('.maximize-btn').addEventListener('click', function() {
    alert("Maximize button clicked.");
});
// Toggle the Explorer dropdown when clicked
document.getElementById('explorer').addEventListener('click', function() {
    this.classList.toggle('active');
});
