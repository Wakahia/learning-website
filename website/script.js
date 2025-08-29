// Simple hover brightness effect for buttons
const links = document.querySelectorAll('.social-links a');
links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.filter = 'brightness(1.2)';
  });
  link.addEventListener('mouseleave', () => {
    link.style.filter = 'brightness(1)';
  });
});
