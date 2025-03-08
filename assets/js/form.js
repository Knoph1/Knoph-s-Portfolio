// Get form and input elements
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = form.querySelector('button[type="submit"]');

// Form submission event listener
form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent actual form submission

    // Clear previous messages
    clearMessages();

    // Validate form fields
    if (validateForm()) {
        // Submit form data via fetch API
        try {
            const formData = new FormData(form);
            const response = await fetch('../', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            if (result.status === 'success') {
                displaySuccessMessage(result.message);
                form.reset();
            } else {
                displayErrorMessage(result.message);
            }
        } catch (error) {
            displayErrorMessage('Something went wrong. Please try again.');
        }
    }
});

// Form validation
function validateForm() {
    let isValid = true;

    if (!nameInput.value.trim()) {
        showError(nameInput, 'Please enter your name.');
        isValid = false;
    }

    if (!validateEmail(emailInput.value)) {
        showError(emailInput, 'Please enter a valid email address.');
        isValid = false;
    }

    if (!messageInput.value.trim()) {
        showError(messageInput, 'Message cannot be empty.');
        isValid = false;
    }

    return isValid;
}

// Email validation regex
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show error message for input fields
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    const error = document.createElement('small');
    error.textContent = message;
    error.classList.add('error-message');
    formGroup.appendChild(error);
    input.classList.add('error');
}

// Clear previous error/success messages
function clearMessages() {
    document.querySelectorAll('.error-message').forEach((el) => el.remove());
    document.querySelectorAll('.success-message').forEach((el) => el.remove());
    document.querySelectorAll('.error').forEach((el) => el.classList.remove('error'));
}

// Display success message
function displaySuccessMessage(message) {
    const successMessage = document.createElement('p');
    successMessage.textContent = message;
    successMessage.classList.add('success-message');
    form.appendChild(successMessage);

    // Remove success message after 3 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Display general error message (not tied to specific fields)
function displayErrorMessage(message) {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = message;
    errorMessage.classList.add('error-message');
    form.appendChild(errorMessage);
}
