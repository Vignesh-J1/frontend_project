const form = document.querySelector('#login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = form.elements.name.value.trim();
  const phone = form.elements.phone.value.trim();
  const email = form.elements.email.value.trim();

  // Save user details in local storage
  localStorage.setItem('user', JSON.stringify({ name, phone, email }));

  // Redirect to home page
  window.location.href = 'home.html';
})