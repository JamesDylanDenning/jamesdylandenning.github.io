const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navItems = navLinks;
  const currentScrollPos = window.pageYOffset;

  sections.forEach(section => {
    if (
      section.offsetTop <= currentScrollPos &&
      section.offsetTop + section.offsetHeight > currentScrollPos
    ) {
      navItems.forEach(link => {
        link.classList.remove('active');
        if (section.getAttribute('id') === link.getAttribute('href')) {
          link.classList.add('active');
        }
      });
    }
  });
});