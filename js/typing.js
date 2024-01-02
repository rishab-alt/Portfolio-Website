document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('typing-text');
    const wordsToType = ['Aviation Enthusiast', 'Network / Tech Geek', 'Github Contributor', 'Very Funny Person']; // Add your desired words
    const typingSpeed = 100; // Adjust the typing speed in milliseconds
    const wordDelay = 1000; // Adjust the delay between words in milliseconds

    let wordIndex = 0;
    let charIndex = 0;

    function typeCharacter() {
        textElement.textContent += wordsToType[wordIndex][charIndex];
        charIndex++;

        if (charIndex < wordsToType[wordIndex].length) {
            anime({ targets: textElement, opacity: 1, easing: 'linear' });
            setTimeout(typeCharacter, typingSpeed);
        } else {
            anime({ targets: textElement, opacity: 0, easing: 'linear' });
            setTimeout(function() {
                textElement.textContent = '';
                wordIndex = (wordIndex + 1) % wordsToType.length;
                charIndex = 0;
                typeCharacter();
            }, wordDelay);
        }
    }

    typeCharacter();
});
