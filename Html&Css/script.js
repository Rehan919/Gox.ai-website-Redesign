const menuButton = document.querySelector('.menubutton');
const navLinks = document.querySelector('.navlinks');

menuButton.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('active');
  menuButton.setAttribute('aria-expanded', isOpen);
});
