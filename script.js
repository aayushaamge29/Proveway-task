function toggleBox(header) {
  const box = header.parentElement;
  const isActive = box.classList.contains('active');

  document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));

  if (!isActive) {
    box.classList.add('active');
  }
}
