document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const phoneInput = document.getElementById('phone');

    // Allow only numeric input for phone number
    phoneInput.addEventListener('input', function () {
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
    });

    contactForm.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });

    function validateForm() {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation rules
        if (name === '') {
            alert('Please enter your name.');
            return false;
        }

        if (email === '' || !isValidEmail(email)) {
            alert('Please enter a valid email address.');
            return false;
        }

        if (phone === '' || !isValidPhoneNumber(phone)) {
            alert('Please enter a valid phone number.');
            return false;
        }

        if (message === '') {
            alert('Please enter your message.');
            return false;
        }

        return true;
    }

    function isValidEmail(email) {
        // Add your email validation logic here
        return true;
    }

    function isValidPhoneNumber(phone) {
        // Add your phone number validation logic here
        return true;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.fade');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 5 seconds
});