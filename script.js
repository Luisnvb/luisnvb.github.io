// Make entire card clickable via keyboard (Enter/Space)
document.querySelectorAll('.card').forEach(card => {
  card.setAttribute('tabindex', '0');

  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});