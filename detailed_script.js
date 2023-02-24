// Check if user is logged in
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  // Redirect to login page if user is not logged in
  window.location.href = 'index.html';
}

// Get user ID from query string
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('id');

// Fetch user data from API
fetch(`https://reqres.in/api/users/${userId}`)
.then((response) => response.json())
.then((data) => {
const detailsContainer = document.querySelector('#details-container');

// Create details HTML
const detailsHTML = `
<div class="details">
  <p>
    <span class="label">ID:</span>
    <span class="value">${data.data.id}</span>
  </p>
  <p>
    <span class="label">Email:</span>
    <span class="value">${data.data.email}</span>
  </p>
  <p>
    <span class="label">First Name:</span>
    <span class="value">${data.data.first_name}</span>
  </p>
  <p>
    <span class="label">Last Name:</span>
    <span class="value">${data.data.last_name}</span>
  </p>
  <img src="${data.data.avatar}" alt="User Avatar">
</div>
`;

// Add details HTML to container
detailsContainer.innerHTML = detailsHTML;
});
    