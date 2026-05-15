// Sample Dictionaries
const wordsEN = ["the", "be", "to", "of", "and", "a", "in", "that", "have", "I", "it", "for", "not", "on", "with", "he", "as", "you", "do", "at", "this", "but", "his", "by", "from", "they", "we", "say", "her", "she", "or", "an", "will", "my", "one", "all", "would", "there", "their", "what", "so", "up", "out", "if", "about", "who", "get", "which", "go", "me", "when", "make", "can", "like", "time", "no", "just", "him", "know", "take", "people", "into", "year", "your", "good", "some", "could", "them", "see", "other", "than", "then", "now", "look", "only", "come", "its", "over", "think", "also", "back", "after", "use", "two", "how", "our", "work", "first", "well", "way", "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"];
const wordsBN = ["আমি", "তুমি", "সে", "এবং", "কি", "এই", "যে", "না", "করা", "আমার", "তার", "থেকে", "হয়", "জন্য", "একটি", "ও", "সাথে", "কোন", "ছিল", "আর", "পারে", "আমরা", "কিন্তু", "পর", "হবে", "করে", "আছে", "বা", "তাই", "কিভাবে", "যদি", "বলল", "এক", "সময়", "এখন", "অনেক", "দিন", "সব", "কেউ", "কিছু", "কথা", "মানুষ", "ভাল", "কাজ", "আমাদের", "দিয়ে", "তখন", "খুব", "যাবে", "করতে", "মতো", "নিজের", "তাকে", "এমন", "আবার", "গেল", "শুধু", "নিয়ে", "তো", "হয়ে", "তবে", "অন্য", "দিন", "বড়", "সামনে", "প্রথম", "কাছে", "দিতে", "আগে", "নতুন", "দেখতে", "যারা", "হলে"];

const sentencesBN = {
    easy: [
        "আমি প্রতিদিন সকালে ঘুম থেকে উঠে হাঁটতে যাই। প্রকৃতির মাঝে সময় কাটাতে আমার খুব ভালো লাগে। স্বাস্থ্য ভালো রাখার জন্য নিয়মিত ব্যায়াম করা উচিত।",
        "বই পড়া একটি খুব ভালো অভ্যাস। এর মাধ্যমে আমরা নতুন অনেক কিছু শিখতে পারি। ভালো বই আমাদের সবচেয়ে ভালো বন্ধু হতে পারে।",
        "আমাদের গ্রামটি দেখতে খুব সুন্দর। গ্রামের পাশ দিয়ে একটি ছোট নদী বয়ে গেছে। নদীর দুই তীরে সবুজ ধানের খেত বাতাসে দুলতে থাকে।"
    ],
    medium: [
        "বাংলাদেশ একটি নদীমাতৃক দেশ। এ দেশের প্রাকৃতিক সৌন্দর্য যে কাউকে মুগ্ধ করে। বর্ষাকালে বৃষ্টির রিমঝিম শব্দ শুনতে বেশ শান্তিদায়ক মনে হয়।",
        "প্রযুক্তির উন্নয়নের সাথে সাথে আমাদের জীবনযাত্রার মান অনেক উন্নত হয়েছে। ইন্টারনেট আমাদের পুরো বিশ্বকে হাতের মুঠোয় এনে দিয়েছে, যার ফলে যোগাযোগ ব্যবস্থা হয়েছে দ্রুত।",
        "সফলতা অর্জনের জন্য কঠোর পরিশ্রম এবং অধ্যাবসায় অত্যন্ত জরুরি। জীবনে বাধা আসবেই, কিন্তু সেই বাধা অতিক্রম করে সামনের দিকে এগিয়ে যাওয়াই হলো আসল কাজ।"
    ],
    hard: [
        "রবীন্দ্রনাথ ঠাকুর বাংলা সাহিত্যের এক উজ্জ্বল নক্ষত্র। ১৯১৩ সালে তিনি 'গীতাঞ্জলি' কাব্যের জন্য সাহিত্যে নোবেল পুরস্কার লাভ করেন, যা সমগ্র এশিয়ার জন্য এক বিশাল গর্বের বিষয়।",
        "বিজ্ঞান ও প্রযুক্তির অভূতপূর্ব উৎকর্ষ সাধনের ফলে বর্তমান বিশ্ব এক 'গ্লোবাল ভিলেজ'-এ পরিণত হয়েছে। এর প্রভাব শিক্ষা, স্বাস্থ্য, অর্থনীতি ও যোগাযোগের ক্ষেত্রে সুস্পষ্ট।",
        "বায়ান্নর ভাষা আন্দোলন এবং একাত্তরের মুক্তিযুদ্ধ—এই দুটি ঐতিহাসিক ঘটনা বাঙালি জাতির অস্তিত্বের সাথে ওতপ্রোতভাবে জড়িয়ে আছে। আত্মত্যাগের মাধ্যমে আমরা পেয়েছি স্বাধীন মানচিত্র।"
    ]
};

// DOM Elements
const wordsContainer = document.getElementById("words-container");
const timerElement = document.getElementById("timer");
const typingSection = document.getElementById("typing-section");
const resultsSection = document.getElementById("results-section");
const wpmValue = document.getElementById("wpm-value");
const accValue = document.getElementById("acc-value");
const keyValue = document.getElementById("key-value");
const restartBtn = document.getElementById("restart-btn");
const timeBtns = document.querySelectorAll(".time-btn");
const langBtns = document.querySelectorAll(".lang-btn");
const diffSelector = document.getElementById("difficulty-selector");
const diffBtns = document.querySelectorAll(".diff-btn");

// Create hidden input for capturing typing (Crucial for Bengali IME)
const hiddenInput = document.createElement("input");
hiddenInput.type = "text";
hiddenInput.autocomplete = "off";
hiddenInput.spellcheck = false;
hiddenInput.style.position = "absolute";
hiddenInput.style.opacity = "0";
hiddenInput.style.pointerEvents = "none";
document.body.appendChild(hiddenInput);

// State Variables
let currentWords = [];
let wordIndex = 0;
let timeLimit = 30;
let timeLeft = timeLimit;
let timer = null;
let isTyping = false;
let currentLanguage = 'en';
let currentDifficulty = 'easy';

let correctKeys = 0;
let incorrectKeys = 0;
let previousInputValue = "";

// Segmenter for splitting text into graphemes safely
const segmenterEN = new Intl.Segmenter('en', { granularity: 'grapheme' });
const segmenterBN = new Intl.Segmenter('bn', { granularity: 'grapheme' });

function getGraphemes(text, lang) {
    const segmenter = lang === 'bn' ? segmenterBN : segmenterEN;
    return Array.from(segmenter.segment(text)).map(s => s.segment);
}

// Initialize Application
function initTest() {
    isTyping = false;
    clearInterval(timer);
    timeLeft = timeLimit;
    timerElement.innerText = timeLeft;
    wordIndex = 0;
    correctKeys = 0;
    incorrectKeys = 0;
    hiddenInput.value = "";
    previousInputValue = "";

    typingSection.classList.remove("hidden");
    resultsSection.classList.add("hidden");
    wordsContainer.innerHTML = "";

    document.body.style.fontFamily = currentLanguage === 'bn' ? "var(--font-bn)" : "var(--font-main)";

    if (currentLanguage === 'bn') {
        const paragraphs = sentencesBN[currentDifficulty];
        currentWords = [];
        while (currentWords.length < 150) {
            const randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
            currentWords = currentWords.concat(randomParagraph.split(" "));
        }
    } else {
        const dictionary = wordsEN;
        currentWords = Array.from({ length: 150 }, () => dictionary[Math.floor(Math.random() * dictionary.length)]);
    }

    currentWords.forEach(word => {
        const wordEl = document.createElement('div');
        wordEl.classList.add('word');

        // Split word into graphemes to prevent Bengali font breaking
        const chars = getGraphemes(word, currentLanguage);

        chars.forEach(char => {
            const letterEl = document.createElement('span');
            letterEl.classList.add('letter');
            letterEl.innerText = char;
            wordEl.appendChild(letterEl);
        });
        wordsContainer.appendChild(wordEl);
    });

    updateVisuals();
    hiddenInput.focus();
}

// Keep focus on hidden input
document.addEventListener("click", () => {
    if (resultsSection.classList.contains("hidden")) {
        hiddenInput.focus();
    }
});

// Restart via Tab + Enter
document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && document.activeElement === restartBtn) {
        initTest();
        restartBtn.blur();
    }
});

// Handle Backspacing to previous word
hiddenInput.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && hiddenInput.value === "" && wordIndex > 0) {
        const prevWordEl = wordsContainer.childNodes[wordIndex - 1];
        if (prevWordEl.classList.contains('error')) {
            wordIndex--;
            prevWordEl.classList.remove('error');
            
            // Extract what was typed
            let recoveredText = "";
            prevWordEl.querySelectorAll('.letter').forEach(l => {
                if (l.classList.contains('correct') || l.classList.contains('incorrect')) {
                    recoveredText += l.innerText;
                }
            });
            hiddenInput.value = recoveredText;
            previousInputValue = recoveredText;
            updateVisuals();
            e.preventDefault();
        }
    }
});

hiddenInput.addEventListener("input", (e) => {
    if (!isTyping && hiddenInput.value.trim().length > 0) {
        startTimer();
    }

    const currentWordEl = wordsContainer.childNodes[wordIndex];
    if (!currentWordEl) return;

    let typedText = hiddenInput.value;

    // Handle spacebar to move to next word
    if (typedText.endsWith(" ")) {
        typedText = typedText.slice(0, -1); // remove space
        
        const expectedChars = getGraphemes(currentWords[wordIndex], currentLanguage);
        const typedChars = getGraphemes(typedText, currentLanguage);
        
        // Mark as error if incomplete or has mistakes
        if (typedChars.length < expectedChars.length || currentWordEl.querySelectorAll('.incorrect').length > 0) {
            currentWordEl.classList.add('error');
        }

        wordIndex++;
        hiddenInput.value = "";
        previousInputValue = "";
        
        // Scroll down if needed
        const nextWordEl = wordsContainer.childNodes[wordIndex];
        if (nextWordEl && nextWordEl.offsetTop > currentWordEl.offsetTop) {
            wordsContainer.scrollTop += nextWordEl.offsetHeight + 10;
        }
        
        updateVisuals();
        return;
    }

    updateVisuals();

    // Track total keystrokes differences for stats
    const typedChars = getGraphemes(typedText, currentLanguage);
    const expectedChars = getGraphemes(currentWords[wordIndex], currentLanguage);
    const prevTypedChars = getGraphemes(previousInputValue, currentLanguage);
    
    if (typedChars.length > prevTypedChars.length) {
        const addedCharIndex = typedChars.length - 1;
        if (addedCharIndex < expectedChars.length) {
             if (typedChars[addedCharIndex] === expectedChars[addedCharIndex]) {
                 correctKeys++;
             } else {
                 incorrectKeys++;
             }
        } else {
            incorrectKeys++;
        }
    }
    
    previousInputValue = typedText;
});

function updateVisuals() {
    document.querySelectorAll('.letter').forEach(l => l.classList.remove('active', 'active-space'));
    
    const currentWordEl = wordsContainer.childNodes[wordIndex];
    if (!currentWordEl) return;

    const expectedChars = getGraphemes(currentWords[wordIndex], currentLanguage);
    const typedChars = getGraphemes(hiddenInput.value, currentLanguage);
    const letters = currentWordEl.querySelectorAll('.letter');

    letters.forEach(l => l.classList.remove('correct', 'incorrect'));

    for (let i = 0; i < letters.length; i++) {
        if (i < typedChars.length) {
            if (typedChars[i] === expectedChars[i]) {
                letters[i].classList.add("correct");
            } else {
                letters[i].classList.add("incorrect");
            }
        }
    }

    if (typedChars.length < letters.length) {
        letters[typedChars.length].classList.add('active');
    } else {
        letters[letters.length - 1].classList.add('active-space');
    }
}

function startTimer() {
    isTyping = true;
    timer = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            endTest();
        }
    }, 1000);
}

function endTest() {
    clearInterval(timer);
    typingSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    restartBtn.focus();
    hiddenInput.blur();

    const totalTimeMinutes = timeLimit / 60;
    const wpm = Math.round((correctKeys / 5) / totalTimeMinutes);
    const totalKeys = correctKeys + incorrectKeys;
    const accuracy = totalKeys > 0 ? Math.round((correctKeys / totalKeys) * 100) : 0;

    wpmValue.innerText = wpm;
    accValue.innerText = `${accuracy}%`;
    keyValue.innerHTML = `<span class="correct-text">${correctKeys}</span> | <span class="incorrect-text">${incorrectKeys}</span>`;
}

timeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        timeBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        timeLimit = parseInt(e.target.getAttribute('data-time'));
        initTest();
    });
});

langBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        langBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentLanguage = e.target.getAttribute('data-lang');
        if (currentLanguage === 'bn') {
            diffSelector.classList.remove('hidden');
        } else {
            diffSelector.classList.add('hidden');
        }
        initTest();
    });
});

diffBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        diffBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        currentDifficulty = e.target.getAttribute('data-diff');
        initTest();
    });
});
restartBtn.addEventListener("click", initTest);

initTest();