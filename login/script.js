window.addEventListener('DOMContentLoaded', function() {
  // Your code here
  window.onload = function() {
    // Generate a random number between 1 and 10
    var randomBg = Math.floor(Math.random() * 10) + 1;
    
    // Set the background image
    document.body.style.backgroundImage = "url('../../img/bedwars/" + randomBg + ".png')";
  };

  // Login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const credentials = {
      username: username,
      password: password
    };

    // Send a POST request to the login endpoint
    fetch('https://mcdonelts.city/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Login failed');
      }
      return response.text();
    })
    .then(data => {
      // Handle successful login
      alert(data); // Display success message or redirect to dashboard
      localStorage.setItem('isLoggedIn', true); // Set login to true
    })
    .catch(error => {
      console.error('Login error:', error);
      // Handle login error
      alert('Login failed. Please check your username and password.');
    });
  });
});
