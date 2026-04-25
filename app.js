// Minimal progressive enhancement for tab interactions in the UI system demo.
const chips = document.querySelectorAll('.top-tabs .chip');

chips.forEach((chip) => {
  chip.addEventListener('click', () => {
    chips.forEach((c) => c.classList.remove('active'));
    chip.classList.add('active');
  });
});
