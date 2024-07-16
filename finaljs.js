document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav .links a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1); 
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            const mailtoLink = `mailto:genrogabriel1@gmail.com?subject=Message%20from%20${encodeURIComponent(name)}%20(${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
            
         
            const tempLink = document.createElement('a');
            tempLink.href = mailtoLink;
            tempLink.target = '_blank';
            tempLink.click(); 

            alert('Thank you for your message! We will get back to you shortly.');

            this.reset(); 
        } else {
            alert('Please fill in all fields.');
        }
    });
});
