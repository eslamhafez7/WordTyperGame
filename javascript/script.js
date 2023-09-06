const startGame = document.querySelector('.start');
const levelNameSpan = document.querySelector(".message .lvl");
const levelSeconds = document.querySelector(".message .seconds");
const comingWord = document.querySelector(".upcoming-words");
const input = document.querySelector(".input");
let timeLeftElement = document.querySelector(".time span");
let score = document.querySelector(".score .got");
const totalScore = document.querySelector(".score .total");
const theWord = document.querySelector(".the-word");
const gameOverAlert = document.querySelector(".game-over");
let start;
let gameInProgress = false;
let isFirstWin = true; 

const wordList = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
    "Go",
    "Rust",
    "PHP",
    "TypeScript",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue",
    "Node.js",
    "Webpack",
    "Bootstrap",
    "jQuery",
    "Express",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "SQLite",
    "Oracle",
    "SQL",
    "Spring",
    "Flask",
    "Symfony",
    "RubyMotion",
    "Flutter",
    "Xamarin",
    "API",
    "HTTP",
    "REST",
    "GraphQL",
    "MVC",
    "OOP",
    "JSON",
    "AJAX",
    "Scalability",
    "DevOps",
    "Git",
    "GitHub",
];

const levels = {
    "Easy": 9,
    "Medium": 6,
    "Hard": 4
};

const setLevelInLocalsorage = (level) => {
    localStorage.setItem("selectedLevel", level)
}
const getSelectedLevelFromLocalStorage = () => {
    return localStorage.getItem("selectedLevel")
}

let defaultLevel = getSelectedLevelFromLocalStorage() || "Easy";
let defaultLevelWords = levels[defaultLevel];
let defaultLevelSeconds = levels[defaultLevel];
levelNameSpan.innerHTML = defaultLevel;
levelSeconds.innerHTML = defaultLevelSeconds;
timeLeftElement.innerHTML = defaultLevelSeconds;
totalScore.innerHTML = wordList.length;


const levelSelect = document.getElementById("levelSelect");
levelSelect.value = defaultLevel;
levelSelect.addEventListener("change", function() {
    defaultLevel = this.value;
    defaultLevelSeconds = levels[defaultLevel];
    levelSeconds.innerHTML = defaultLevelSeconds;
    levelNameSpan.innerHTML = defaultLevel;
    timeLeftElement.innerHTML = defaultLevelSeconds;
    setLevelInLocalsorage(defaultLevel);
    if(gameInProgress) {
        resetGame();
        clearInterval(start);
    }
});

input.onpaste = function() {
    return false
}

startGame.onclick = function() {
    this.style.display = 'none';
    input.focus();
    gameInProgress = true;
    generateWords()
}

const generateWords = () => {
    if(wordList.length === 0) {
        successAlert();
        return;
    }
    const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
    const wordIndex = wordList.indexOf(randomWord);
    wordList.splice(wordIndex, 1);
    theWord.innerHTML = randomWord;
    comingWord.innerHTML = '';
    for(let i = 0; i < wordList.length; i++) {
        const div = document.createElement("div");
        const divTxt = document.createTextNode(wordList[i]);
        div.appendChild(divTxt);
        comingWord.appendChild(div);
    }
    startPlay();
}

const startPlay = () => {
    document.querySelector(".show_instructions").style.opacity = '0'; 
    timeLeftElement.innerHTML = defaultLevelSeconds;
    start = setInterval(() => {
        timeLeftElement.innerHTML--;
        if(timeLeftElement.innerHTML === "0") {
            clearInterval(start)
            if(theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = '';
                if(wordList.length > 0) {
                    generateWords();
                }else {
                    successAlert()
                }
            }else {
                dangerAlert();
            }
        }
    }, 1000);
}

const increaseScore = () => {
    score.innerHTML++
}

input.addEventListener('input', () => {
    const currentTimeLeft = parseInt(timeLeftElement.innerHTML);
    if (input.value.toLowerCase() === theWord.innerHTML.toLowerCase() && currentTimeLeft > 0) {
        clearInterval(start);
        input.value = '';
        generateWords();
        increaseScore();
    }
});


const resetGame = () => {
    defaultLevel = localStorage.getItem("selectedLevel");
    defaultLevelWords = levels[defaultLevel];
    defaultLevelSeconds = levels[defaultLevel];
    levelNameSpan.innerHTML = defaultLevel;
    levelSeconds.innerHTML = defaultLevelSeconds;
    timeLeftElement.innerHTML = defaultLevelSeconds;
    document.querySelector(".show_instructions").style.opacity = '1'; 
    score.innerHTML = 0;
    wordList.length = 0;
    wordList.push(
        "JavaScript",
        "Python",
        "Java",
        "C++",
        "Ruby",
        "Swift",
        "Go",
        "Rust",
        "PHP",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Angular",
        "Vue",
        "Node.js",
        "Webpack",
        "Bootstrap",
        "jQuery",
        "Express",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "SQLite",
        "Oracle",
        "SQL",
        "Spring",
        "Flask",
        "Symfony",
        "RubyMotion",
        "Flutter",
        "Xamarin",
        "API",
        "HTTP",
        "REST",
        "GraphQL",
        "MVC",
        "OOP",
        "JSON",
        "AJAX",
        "Scalability",
        "DevOps",
        "Git",
        "GitHub",
    );
    theWord.innerHTML = '';
    comingWord.innerHTML = '';
    startGame.style.display = "block";
    input.blur();
    input.value = '';
    score.innerHTML = 0;
}



const addNewWords = () => {
    defaultLevel = localStorage.getItem("selectedLevel");
    defaultLevelWords = levels[defaultLevel];
    defaultLevelSeconds = levels[defaultLevel];
    levelNameSpan.innerHTML = defaultLevel;
    levelSeconds.innerHTML = defaultLevelSeconds;
    timeLeftElement.innerHTML = defaultLevelSeconds;
    document.querySelector(".show_instructions").style.opacity = '1'; 
    score.innerHTML = 0;
    wordList.length = 0;
    const newWords = [
        "Apple",
        "Banana",
        "Carrot",
        "Dolphin",
        "Elephant",
        "Flower",
        "Giraffe",
        "Happiness",
        "Iguana",
        "Jellyfish",
        "Kangaroo",
        "Lion",
        "Monkey",
        "Nectar",
        "Orange",
        "Penguin",
        "Quokka",
        "Raccoon",
        "Squirrel",
        "Tiger",
        "Umbrella",
        "Violet",
        "Watermelon",
        "Xylophone",
        "Yellow",
        "Zebra",
        "Bicycle",
        "Chameleon",
        "Dragon",
        "Eagle",
        "Fox",
        "Gorilla",
        "Hedgehog",
        "Icicle",
        "Jaguar",
        "Koala",
        "Lighthouse",
        "Mango",
        "Nightingale",
        "Octopus",
        "Panda",
        "Quail",
        "Rhinoceros",
        "Sloth",
    ];
    wordList.push(...newWords);
    theWord.innerHTML = '';
    comingWord.innerHTML = '';
    startGame.style.display = "block";
    input.blur();
    input.value = '';
    score.innerHTML = 0;
};


const successAlert = () => {
    Swal.fire({
        title: "Congratulations!",
        text: `You've completed the game successfully! Your score is ${parseInt(score.innerHTML) + 1}`,
        icon: "success",
        showCancelButton: true,
        confirmButtonText: isFirstWin ? "Keep Going!" : "Start New Game",
        cancelButtonText: "Reset Game",
        customClass: {
            title: "success-title",
            confirmButton: "success-button",
            cancelButton: "reset-button"
        }
    }).then((result) => {
        if (result.isConfirmed) {
            if(isFirstWin) {
                addNewWords();
                isFirstWin = false;
            }else {
                resetGame();
                window.location.reload();
            }
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            resetGame();
        }
    });
}


const dangerAlert = () => {
    Swal.fire({
        title: "Game Over!",
        text: `Your Score Is ${parseInt(score.innerHTML)} Try again?`,
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Start a New Game",
        cancelButtonText: "Reset Game",
    }).then((result) => {
        if (result.isConfirmed) {
            resetGame();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            resetGame();
        }
    });
}

const handleInstructionsPopup = () => {
    const overlay = document.querySelector(".instructions-overlay");
    const close = document.querySelector(".instructions-container .close");
    overlay.classList.toggle("visible");
    close.addEventListener('click', () => {
    overlay.classList.remove("visible")
    })
}
document.querySelector(".show_instructions").addEventListener('click', handleInstructionsPopup);