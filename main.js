// Get all radio inputs and content elements
document.querySelectorAll('.input-radio').forEach(container => {
    const radio = container.querySelector('input[type="radio"]');
    const content = container.querySelector('.debit-card-content');
    
    // Toggle on container click
    container.addEventListener('click', (e) => {
        if (!radio.checked) {
            radio.checked = true;
            // Trigger change event manually
            const event = new Event('change');
            radio.dispatchEvent(event);
            document.getElementById('fullname').focus()
            
            setTimeout(() => {
                const firstInput = content.querySelector('input');
                if (firstInput) firstInput.focus();
            }, 300);
        }
    });

    // Handle radio changes
    radio.addEventListener('change', () => {
        document.querySelectorAll('.debit-card-content').forEach(c => {
            c.classList.remove('card-active');
        });
        if (radio.checked) {
            content.classList.add('card-active');
        }
    });
});

// Close dropdowns when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.input-radio')) {
        document.querySelectorAll('.debit-card-content').forEach(c => {
            c.classList.remove('card-active');
        });
    }
});

// Initialize first item
document.querySelector('.debit-card-content').classList.add('card-active');



// document.addEventListener('DOMContentLoaded', function() {
//     const inputs = document.querySelectorAll('.verification-input');
//     const randomCode = Math.floor(100000 + Math.random() * 900000).toString();
    
//     for (let i = 0; i < inputs.length; i++) {
//         inputs[i].value = randomCode[i];
//     }

//     let timeLeft = 40;
//     const timeElapseElement = document.getElementById('time-elapse');
//     const countdown = setInterval(function() {
//         if (timeLeft <= 0) {
//             clearInterval(countdown);
//             window.location.href = 'confirmation.html';
//             window.location.href = 'login.html';
//         } else {
//             timeElapseElement.textContent = `Expires in 00:${timeLeft < 10 ? '0' : ''}${timeLeft} secs`;
//             timeLeft--;
//         }
//     }, 1000);
// });