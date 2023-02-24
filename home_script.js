// Check if user is logged in
const user = JSON.parse(localStorage.getItem('user'));
if (!user) {
  // Redirect to login page if user is not logged in
  window.location.href = 'index.html';
}

// Logout button event listener
const logoutButton = document.querySelector('#logout-button');
logoutButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Clear user details from local storage
  localStorage.removeItem('user');

  // Redirect to login page
  window.location.href = 'index.html';
});

// Fetch user data from API
fetch('https://reqres.in/api/users')
.then((response) => response.json())
.then((data) => {
  const userList = document.querySelector('#user-list');

  // Add each user to the list
  data.data.forEach((user) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${user.first_name} ${user.last_name}`;
    listItem.dataset.id = user.id;
    userList.appendChild(listItem);
  });

// Add click event listener to each list item
const listItems = document.querySelectorAll('li');
listItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    const userId = e.target.dataset.id;
    // Redirect to detailed view page with user ID
    window.location.href = `detailed.html?id=${userId}`;
  });
});
});

