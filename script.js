document.addEventListener('DOMContentLoaded', () => {
    const correctPassword = "adminpw123"; // amk şifresini crackleyemeninde amk 
    
    // Handle the form submission
document.getElementById("hintButton").addEventListener("click", function() {
    var hint = document.getElementById("hint");
    hint.style.display = hint.style.display === "none" ? "block" : "none";
    
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const enteredPassword = document.getElementById('password').value;
        const errorMessageElement = document.getElementById('error-message');
        
        if (enteredPassword === correctPassword) {
            const correctAudio = new Audio('ses/yanlis.mp3'); // sesler karıştı aq WQEQWEQWE
            correctAudio.play();
            setTimeout(() => {
                window.location.href = 'https://ruyav44.github.io/ruyaminecraft/bomb/bomb.html';
            }, 6000);
        } else {
            const incorrectAudio = new Audio('ses/dogru.mp3'); // sesler karıştı aq WQEQWEQWE
            incorrectAudio.play();
            errorMessageElement.innerText = "You Entered The Wrong Password. Try Again Later!";
            errorMessageElement.style.display = 'block';
            setTimeout(() => {
                location.reload();
            }, 6000);
        }
    });
});


