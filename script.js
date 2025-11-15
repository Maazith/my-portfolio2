// Form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const successMessage = document.getElementById('form-success');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear error messages
    function clearError(errorElement) {
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    // Show error message
    function showError(errorElement, message) {
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Validate name
    function validateName() {
        const name = nameInput.value.trim();
        if (name === '') {
            showError(nameError, 'Name is required');
            nameInput.setAttribute('aria-invalid', 'true');
            return false;
        } else if (name.length < 2) {
            showError(nameError, 'Name must be at least 2 characters');
            nameInput.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            clearError(nameError);
            nameInput.setAttribute('aria-invalid', 'false');
            return true;
        }
    }

    // Validate email
    function validateEmail() {
        const email = emailInput.value.trim();
        if (email === '') {
            showError(emailError, 'Email is required');
            emailInput.setAttribute('aria-invalid', 'true');
            return false;
        } else if (!emailRegex.test(email)) {
            showError(emailError, 'Please enter a valid email address');
            emailInput.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            clearError(emailError);
            emailInput.setAttribute('aria-invalid', 'false');
            return true;
        }
    }

    // Validate message
    function validateMessage() {
        const message = messageInput.value.trim();
        if (message === '') {
            showError(messageError, 'Message is required');
            messageInput.setAttribute('aria-invalid', 'true');
            return false;
        } else if (message.length < 10) {
            showError(messageError, 'Message must be at least 10 characters');
            messageInput.setAttribute('aria-invalid', 'true');
            return false;
        } else {
            clearError(messageError);
            messageInput.setAttribute('aria-invalid', 'false');
            return true;
        }
    }

    // Real-time validation on input
    nameInput.addEventListener('blur', validateName);
    nameInput.addEventListener('input', function() {
        if (nameInput.value.trim() !== '') {
            clearError(nameError);
        }
    });

    emailInput.addEventListener('blur', validateEmail);
    emailInput.addEventListener('input', function() {
        if (emailInput.value.trim() !== '' && emailRegex.test(emailInput.value.trim())) {
            clearError(emailError);
        }
    });

    messageInput.addEventListener('blur', validateMessage);
    messageInput.addEventListener('input', function() {
        if (messageInput.value.trim() !== '') {
            clearError(messageError);
        }
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Clear previous success message
        successMessage.textContent = '';

        // Validate all fields
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        // If all validations pass
        if (isNameValid && isEmailValid && isMessageValid) {
            // Simulate form submission (in a real application, you would send data to a server)
            const formData = {
                name: nameInput.value.trim(),
                email: emailInput.value.trim(),
                message: messageInput.value.trim()
            };

            // Show success message
            successMessage.textContent = 'Thank you! Your message has been sent successfully.';
            successMessage.style.display = 'block';

            // Reset form
            form.reset();

            // Clear all error messages
            clearError(nameError);
            clearError(emailError);
            clearError(messageError);

            // Remove aria-invalid attributes
            nameInput.removeAttribute('aria-invalid');
            emailInput.removeAttribute('aria-invalid');
            messageInput.removeAttribute('aria-invalid');

            // Scroll to success message
            successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

            // Hide success message after 5 seconds
            setTimeout(function() {
                successMessage.textContent = '';
                successMessage.style.display = 'none';
            }, 5000);

            // In a real application, you would send the formData to your server here
            console.log('Form submitted:', formData);
        } else {
            // Focus on first invalid field
            if (!isNameValid) {
                nameInput.focus();
            } else if (!isEmailValid) {
                emailInput.focus();
            } else if (!isMessageValid) {
                messageInput.focus();
            }
        }
    });
});

