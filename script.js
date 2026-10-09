const btnAction = document.getElementById('btnAction');

if (btnAction) {
  btnAction.addEventListener('click', () => {
    alert('Bravo ! Tu as cliqué sur le bouton 🎉');
  });
}

const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Merci pour votre message !');
    contactForm.reset();
  });
}

document.querySelectorAll('a[href^=\"#\"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
