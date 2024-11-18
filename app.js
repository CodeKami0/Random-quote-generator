const quotes = [
  { quote: "Know yourself and you will win all battles.", author: "Sun Tzu" },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "You must be the change you wish to see in the world.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "First they ignore you, then they laugh at you, then they fight you, then you win",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "Man learns through experience, and the spiritual path is full of different kinds of experiences. He will encounter many difficulties and obstacles, and they are the very experiences he needs to encourage and complete the cleansing process",
    author: "Sai Baba",
  },
  {
    quote:
      "The fragrance of flowers spreads only in the direction of the wind. But the goodness of a person spreads in all directions.",
    author: "Chanakya",
  },
  {
    quote:
      "It is no measure of health to be well adjusted to a profoundly sick society.",
    author: "Jiddu Krishnamurti",
  },
];

const btnSpeak = document.querySelector(".speak"),
  btnCopy = document.querySelector(".copy"),
  btnNew = document.querySelector(".btnNew"),
  quoteArea = document.querySelector(".quotes .quote"),
  authorName = document.querySelector(".author span");

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteArea.textContent = `"${randomQuote.quote}"`;
  authorName.textContent = `- ${randomQuote.author}`;
}

window.onload = getRandomQuote;

btnNew.addEventListener("click", () => {
  getRandomQuote();
});

// Speak btn
btnSpeak.addEventListener("click", () => {
  const utterance = new SpeechSynthesisUtterance(
    `${quoteArea.textContent} by ${authorName.textContent}`
  );
  speechSynthesis.speak(utterance);
});

// copy btn
btnCopy.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteArea.textContent);
  alert("Text Copied");
});

function snackbar(text) {
  var x = document.getElementById("snackbar");
  x.innerText = text;
  x.className = "show";
  setTimeout(() => {
    x.className = x.className.repeat("show", "");
  }, 3000);
}
