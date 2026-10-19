document.querySelectorAll('[data-icon]').forEach((el) => {
  const name = el.dataset.icon;
  const className = el.className || 'w-4 h-4';
  const svg = window.Icon(name, className);
  el.replaceWith(svg);
});