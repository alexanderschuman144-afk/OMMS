const root = document.documentElement;
const button = document.getElementById('themeToggle');

button.addEventListener('click', () => {
  root.classList.toggle('dark');
  button.textContent = root.classList.contains('dark') ? 'Light' : 'Dark';
});
