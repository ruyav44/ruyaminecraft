document.addEventListener('DOMContentLoaded', async () => {
    // Fetch the password from the external site
    let response = await fetch('https://paste.tc/raw/ruyapanel');
    let correctPassword = await response.text().trim();
    
    // Handle the form submission
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let enteredPassword = document.getElementById('password').value;
        let errorMessageElement = document.getElementById('error-message');
        
        if (enteredPassword === correctPassword) {
            let correctAudio = new Audio('ses/ruyav44dogru.mp3');
            correctAudio.play();
            setTimeout(() => {
                window.location.href = '/ruyasunucum/index.html';
            }, 6000);
        } else {
            let incorrectAudio = new Audio('ses/ruyav44yanlis.mp3');
            incorrectAudio.play();
            errorMessageElement.innerText = "You Entered The Wrong Password. Our Telegram Address For Help: t.me/ruyav44";
            errorMessageElement.style.display = 'block';
            setTimeout(() => {
                location.reload();
            }, 6000);
        }
    });
});
