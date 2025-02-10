// Handle menu item selection
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all menu items
        document.querySelectorAll('.menu-item').forEach(i => {
            i.classList.remove('active');
        });
        // Add active class to clicked item
        this.classList.add('active');
    });
});

// Search functionality
document.querySelector('.search-bar input').addEventListener('input', function(e) {
    // Aquí se implementará la funcionalidad de búsqueda
    console.log('Searching for:', e.target.value);
});

// Sort button functionality
document.querySelector('.btn:first-child').addEventListener('click', function() {
    // Aquí se implementará la funcionalidad de ordenación
    console.log('Sort clicked');
});

// Filter button functionality
document.querySelector('.btn:nth-child(2)').addEventListener('click', function() {
    // Aquí se implementará la funcionalidad de filtrado
    console.log('Filter clicked');
});

// Edit client button functionality
document.querySelector('.btn:nth-child(4)').addEventListener('click', function() {
    // Aquí se implementará la funcionalidad de edición
    console.log('Edit client clicked');
});

// Add client button functionality
document.querySelector('.btn-primary').addEventListener('click', function() {
    // Aquí se implementará la funcionalidad de añadir cliente
    console.log('Add client clicked');
});

// Logout functionality
document.querySelector('.logout-btn').addEventListener('click', function() {
    // Aquí se implementará la funcionalidad de logout
    console.log('Logout clicked');
});