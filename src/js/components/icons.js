const icons = {
  'user-round': `<path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" />`,
  mail: `<rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />`,
  'id-card': `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 8v4a2 2 0 0 1-2 2h-1.5" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />`,
  'building-2': `<path d="M6 22V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v18" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9v11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-9" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" />`,
  building: `<rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9 22v-4h6v4" /><path d="M8 6h8" /><path d="M8 10h8" /><path d="M8 14h8" />`,
  'map-pin': `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />`,
  'map-pinned': `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /><path d="M12 2v4" /><path d="M12 18v4" />`,
  hash: `<line x1="4" x2="20" y1="9" y2="9" /><line x1="4" x2="20" y1="15" y2="15" /><line x1="9" x2="9" y1="3" y2="21" /><line x1="15" x2="15" y1="3" y2="21" />`,
  map: `<polygon points="3 11 22 2 13 21 11 13 3 11" />`,
  'user-round-plus': `<path d="M18 20a6 6 0 0 0-12 0" /><circle cx="12" cy="10" r="4" /><line x1="12" x2="12" y1="16" y2="20" /><line x1="10" x2="14" y1="18" y2="18" />`,
};

function Icon(name, className = 'w-4 h-4') {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('xmlns', svgNS);
  svg.setAttribute('viewBox', '0 0 24 24');
  svg.setAttribute('fill', 'none');
  svg.setAttribute('stroke', 'currentColor');
  svg.setAttribute('stroke-width', '2');
  svg.setAttribute('stroke-linecap', 'round');
  svg.setAttribute('stroke-linejoin', 'round');
  svg.setAttribute('aria-hidden', 'true');
  svg.className.baseVal = className;
  const pathData = icons[name];
  if (pathData) {
    svg.innerHTML = pathData;
  }
  return svg;
}

window.Icon = Icon;