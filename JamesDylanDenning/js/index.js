
// index.js

window.addEventListener('scroll', () => {
    if (!document.body.classList.contains('scrolled')) {
      document.body.classList.add('scrolled');
    }  
  });
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 0 && !document.body.classList.contains('scrolled')) {
      document.body.classList.add('scrolled');
    } else if (window.pageYOffset === 0) {
      document.body.classList.remove('scrolled');  
    }
  });