function toggleBox(element) {
  const box = element.parentElement;
  const allBoxes = document.querySelectorAll('.box');

  allBoxes.forEach(b => {
    if (b !== box) {
      b.classList.remove('active');
    }
  });

  box.classList.toggle('active');
}
