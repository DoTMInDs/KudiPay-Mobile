


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