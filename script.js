document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Basic Validation
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const phone = document.getElementById('phone').value.trim();

            let isValid = true;
            let errors = [];

            if (name === '') {
                isValid = false;
                errors.push('Numele este obligatoriu.');
            }

            if (email === '') {
                isValid = false;
                errors.push('Adresa de email este obligatorie.');
            } else {
                // Basic email format validation
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    isValid = false;
                    errors.push('Adresa de email nu este validă.');
                }
            }

            if (message === '') {
                isValid = false;
                errors.push('Mesajul este obligatoriu.');
            }

            // Optional: Phone number validation (basic)
            // if (phone !== '' && !/^\d{10,}$/.test(phone.replace(/\s/g, ''))) {
            //     isValid = false;
            //     errors.push('Numărul de telefon nu este valid.');
            // }

            if (isValid) {
                // If valid, construct mailto link
                const subject = `Contact Form Submission from ${name}`;
                const body = `Nume: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nMesaj:\n${message}`;

                let mailtoLink = `mailto:termorom@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                // Check if mailto link exceeds URL length limits (especially in IE)
                if (mailtoLink.length > 2000) {
                    alert('Mesajul este prea lung pentru a fi trimis direct prin clientul de email. Vă rugăm scurtați mesajul sau contactați-ne direct.');
                    return;
                }

                // Attempt to open mail client
                window.location.href = mailtoLink;
                alert('Formularul a fost pregătit pentru trimitere! Verificați clientul dvs. de email.');
                contactForm.reset(); // Reset form after submission
            } else {
                // If not valid, display errors
                alert('Vă rugăm corectați următoarele erori:\n\n' + errors.join('\n'));
            }
        });
    }
});
