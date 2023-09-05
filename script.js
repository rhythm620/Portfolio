document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("typed-text");
    const text = "Welcome to Rhythm's Portfolio";
    const typingSpeed = 100; // Adjust typing speed (lower value for faster typing)
    const erasingSpeed = 25; // Adjust erasing speed (lower value for faster erasing)
    const pauseDuration = 1000; // Time to pause after typing and erasing
    let charIndex = 0;
    let isTyping = true;

    function typeText() {
        if (charIndex < text.length) {
            textElement.innerHTML += text.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            isTyping = false;
            setTimeout(eraseText, pauseDuration);
        }
    }

    function eraseText() {
        const currentText = textElement.innerHTML;
        if (currentText.length > 0) {
            textElement.innerHTML = currentText.slice(0, -1);
            setTimeout(eraseText, erasingSpeed);
        } else {
            isTyping = true;
            charIndex = 0;
            setTimeout(typeText, pauseDuration);
        }
    }

    setTimeout(typeText, pauseDuration);
});
