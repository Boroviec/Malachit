// Shared navigation utilities — included on every page

function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Smooth page transitions
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href$=".html"]');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // Skip current page or cross-origin links
            if (href === window.location.pathname.split('/').pop() || this.hostname !== window.location.hostname) {
                return;
            }

            e.preventDefault();
            document.body.classList.add('page-transition');

            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    });
});
