document.addEventListener('DOMContentLoaded', () => {
    const correctPassword = "ruyav44";
    
    // Handle the form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const enteredPassword = document.getElementById('password').value;
        const errorMessageElement = document.getElementById('error-message');
        
        if (enteredPassword === correctPassword) {
            const correctAudio = new Audio('ses/ruyav44dogru.mp3');
            correctAudio.play();
            setTimeout(() => {
                window.location.href = 'bomb/bomb.html';
            }, 6000);
        } else {
            const incorrectAudio = new Audio('ses/ruyav44yanlis.mp3');
            incorrectAudio.play();
            errorMessageElement.innerText = "You Entered The Wrong Password. Our Telegram Address For Help: t.me/ruyav44";
            errorMessageElement.style.display = 'block';
            setTimeout(() => {
                location.reload();
            }, 6000);
        }
    });
});
