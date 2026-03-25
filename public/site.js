document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const contactForm = document.getElementById('contactForm');
    if (!contactForm) {
        return;
    }

    const fieldIds = ['name', 'email', 'phone', 'message'];
    const submitBtn = document.getElementById('submitBtn');
    const responseMessage = document.getElementById('responseMessage');

    function setFieldError(fieldId, errorText) {
        const field = document.getElementById(fieldId);
        const errorSpan = document.getElementById(fieldId + 'Error');
        if (!field || !errorSpan) {
            return;
        }

        field.classList.toggle('error', Boolean(errorText));
        errorSpan.textContent = errorText || '';
    }

    function validateField(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) {
            return true;
        }

        const value = field.value.trim();

        if (fieldId === 'name') {
            if (!value) {
                setFieldError(fieldId, 'Name is required');
                return false;
            }
            if (value.length < 2) {
                setFieldError(fieldId, 'Name must be at least 2 characters');
                return false;
            }
        }

        if (fieldId === 'email') {
            if (!value) {
                setFieldError(fieldId, 'Email is required');
                return false;
            }
            if (!isValidEmail(value)) {
                setFieldError(fieldId, 'Please enter a valid email address');
                return false;
            }
        }

        if (fieldId === 'phone' && value && !isValidPhone(value)) {
            setFieldError(fieldId, 'Please enter a valid phone number');
            return false;
        }

        if (fieldId === 'message') {
            if (!value) {
                setFieldError(fieldId, 'Message is required');
                return false;
            }
            if (value.length < 10) {
                setFieldError(fieldId, 'Message must be at least 10 characters long');
                return false;
            }
        }

        setFieldError(fieldId, '');
        return true;
    }

    fieldIds.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        if (!field) {
            return;
        }

        field.addEventListener('blur', function() {
            validateField(fieldId);
        });

        field.addEventListener('input', function() {
            validateField(fieldId);
        });
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (responseMessage) {
            responseMessage.innerHTML = '';
        }

        let isValid = true;
        fieldIds.forEach(function(fieldId) {
            if (!validateField(fieldId)) {
                isValid = false;
            }
        });

        if (!isValid) {
            return;
        }

        const honeypot = document.querySelector('input[name="_hp"]');
        if (honeypot && honeypot.value !== '') {
            return;
        }

        if (!submitBtn) {
            return;
        }

        const originalText = submitBtn.textContent;
        submitBtn.setAttribute('aria-busy', 'true');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const formData = new FormData(contactForm);
        const data = new URLSearchParams(formData);
        const thankYouUrl = new URL('/thank-you/', window.location.origin).pathname;

        const controller = new AbortController();
        const timeoutId = setTimeout(function() {
            controller.abort();
        }, 30000);

        fetch('/__forms/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: data,
            signal: controller.signal
        })
            .then(function() {
                window.location.href = thankYouUrl;
            })
            .catch(function(error) {
                console.error('Error:', error);
                submitBtn.setAttribute('aria-busy', 'false');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                if (responseMessage) {
                    responseMessage.innerHTML = '<p style="color:#d93025;">Server error. Please try again.</p>';
                }
            })
            .finally(function() {
                clearTimeout(timeoutId);
            });
    });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[0-9+()\-\s]{7,20}$/;
    return phoneRegex.test(phone);
}
