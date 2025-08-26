// Open modal when an image is clicked
document.querySelectorAll('#skills img').forEach(img => {
    img.onclick = function() {
        document.getElementById('modalImg').src = this.src;
        document.getElementById('imgModal').style.display = 'flex';
    }
});

// Close modal when clicking background
document.getElementById('imgModal').onclick = function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
};

// Close modal when clicking the close button
document.getElementById('closeModal').onclick = function() {
    document.getElementById('imgModal').style.display = 'none';
};
