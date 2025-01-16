document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.menu-baixo');
    const submenu = dropdown.querySelector('.menu-baixo-content');
    
    dropdown.addEventListener('click', function(event) {
        
        event.preventDefault();
        
        submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    });
});
