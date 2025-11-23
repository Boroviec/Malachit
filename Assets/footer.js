// Load footer on all pages
document.addEventListener('DOMContentLoaded', function() {
    fetch('Assets/footer.html')
        .then(response => response.text())
        .then(data => {
            // Find all footer placeholders or insert at the end of body
            const footerPlaceholder = document.getElementById('footer-placeholder');
            if (footerPlaceholder) {
                footerPlaceholder.innerHTML = data;
            } else {
                // If no placeholder, append to body
                document.body.insertAdjacentHTML('beforeend', data);
            }
        })
        .catch(error => console.error('Error loading footer:', error));
});
