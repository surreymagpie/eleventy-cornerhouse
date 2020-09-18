// Detect if client browser has JavaScript enabled
document.querySelector('html').classList.replace('no-js', 'js');

// Add
const button = document.querySelector('#menu-toggle');
const ul = document.querySelector('#primary-menu');

button.addEventListener('click', () => {
  if (ul.classList.contains('primary-menu--open')) {
    ul.classList.remove('primary-menu--open');
    button.setAttribute('aria-expanded', 'false');
  } else {
    ul.classList.add('primary-menu--open');
    button.setAttribute('aria-expanded', 'true');
  }
});