document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    alert('Thank you for your message!');
});

/* Make buttons clickable */
const viewDetailsButtons = document.querySelectorAll('.btn-primary, .btn-gold');
viewDetailsButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('View Details button clicked!');
    });
});
