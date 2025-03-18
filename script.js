// Resaltar las secciones al pasar el ratón
document.querySelectorAll('section').forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.backgroundColor = '#e1e1e1';
    });
  
    section.addEventListener('mouseleave', () => {
      section.style.backgroundColor = '';
    });
  });
  