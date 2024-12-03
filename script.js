function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name) {
        alert("Name is required.");
        return false; 
    }

    if (!email) {
        alert("Email is required.");
        return false; 
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email address.");
        return false; 
    }

    if (!message) {
        alert("Message is required.");
        return false; 
    }

    return true;
}