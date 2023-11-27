// script.js

function showContent(option) {
    var contentContainers = ["content", "About", "Services", "Contact"];

    contentContainers.forEach(function(container) {
        document.getElementById(container).style.display = "none";
    });

    switch (option) {
        case 'Home':
            document.getElementById("content").style.display = "block";
            break;
        case 'About':
            document.getElementById("About").style.display = "block";
            break;
        case 'Services':
            document.getElementById("Services").style.display = "block";
            break;
        case 'Contact':
            document.getElementById("Contact").style.display = "block";
            break;
        default:
            document.getElementById("content").style.display = "block";
    }
}

// Додайте інші функції, якщо потрібно

// Решта вашого існуючого JavaScript-коду
const wordlist = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon", "mango", "nectarine",
    "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "watermelon", "blueberry", "blackberry", "cranberry",
    "apricot", "peach", "pear", "plum", "pineapple", "lime", "coconut", "guava", "kiwifruit", "pomegranate", "melon", "grapefruit"
];

function generateRandomWord() {
    const randomIndex = Math.floor(Math.random() * wordlist.length);
    return wordlist[randomIndex];
}

function generateSeedPhrase() {
    return Array.from({ length: 12 }, () => generateRandomWord());
}

const generateBtn = document.getElementById("generateBtn");
const wordContainers = Array.from(document.querySelectorAll('.word'));

generateBtn.addEventListener("click", () => {
    const generatedSeedPhrase = generateSeedPhrase();
    generatedSeedPhrase.forEach((word, index) => {
        wordContainers[index].textContent = word;
    });

    // Show the seed phrase container after generating the seed phrase
    document.getElementById('seedPhraseContainer').classList.add('visible');
});

const confirmBtn = document.getElementById("confirmBtn");

confirmBtn.addEventListener("click", () => {
    // Add logic to handle confirmation and redirection
    const confirmed = confirm("Do you want to proceed with the transaction?");
    if (confirmed) {
        window.location.href = "mainpage.html";
    }
});

// Додайте інші функції, якщо потрібно
