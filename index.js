function validateForm(event) {
    event.preventDefault(); // Prevent form submission for now
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('Please fill in all fields.');
    } else {
        
        alert('Form submitted successfully!');
        
    }
}
