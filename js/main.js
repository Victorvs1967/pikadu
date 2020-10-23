const menuToggle = document.querySelector('#menu-toggle'),
      sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', event => {
    event.preventDefault();
    sidebar.classList.toggle('active');
});