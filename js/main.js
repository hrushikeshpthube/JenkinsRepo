document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('.btn');
  if (btn) {
    btn.addEventListener('click', () => {
      alert('Redirecting you to booking page!');
    });
  }
});
