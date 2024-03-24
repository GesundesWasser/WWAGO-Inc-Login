window.addEventListener('DOMContentLoaded', function() {
  // Your code here
  window.onload = function() {
    // Generate a random number between 1 and 10
    var randomBg = Math.floor(Math.random() * 10) + 1;
    
    // Set the background image
    document.body.style.backgroundImage = "url('../img/bedwars/" + randomBg + ".png')";
  };

  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(this);

    // Convert form data to URL-encoded format
    const urlEncodedData = new URLSearchParams(formData).toString();

    // Send the registration request using fetch API
    fetch('https://mcdonelts.city/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: urlEncodedData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      // Show success message
      alert(data);

      // Optionally, redirect to another page after successful registration
      // window.location.href = '/success.html';
    })
    .catch(error => {
      console.error('There was a problem with the registration:', error);
      // Show error message
      alert('There was a problem with the registration. Please try again later.');
    });
  });
});
