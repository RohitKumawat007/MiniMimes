document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const label = button.textContent.trim();
    alert(`You clicked on "${label}"!`);
    // You can replace this with actual navigation like:
    // window.location.href = 'your-page.html';
  });
});
