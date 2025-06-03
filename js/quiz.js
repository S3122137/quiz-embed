const quizData = [
    {
        question: "以下哪个是JavaScript的基本数据类型？",
        choices: [
            { text: "Array", correct: false },
            { text: "Object", correct: false },
            { text: "String", correct: true },
            { text: "Function", correct: false }
        ]
    },
    {
        question: "CSS中，哪个属性用于改变文本颜色？",
        choices: [
            { text: "text-color", correct: false },
            { text: "font-color", correct: false },
            { text: "color", correct: true },
            { text: "text-style", correct: false }
        ]
    },
    {
        question: "HTML5中，哪个标签用于播放视频？",
        choices: [
            { text: "<media>", correct: false },
            { text: "<video>", correct: true },
            { text: "<movie>", correct: false },
            { text: "<play>", correct: false }
        ]
    },
    {
        question: "Who is the author of \"The Art of War\"?",
        choices: [
            { text: "Sun Tzu", correct: false },
            { text: "Sun Wu", correct: true },
            { text: "Wu Qi", correct: false }
        ],
        explanation: "Sun Wu was a renowned military strategist and statesman during the Spring and Autumn Period, and he is respectfully known as the \"Sage of Warfare\".\n\nWhy NOT Sun Tzu?\nTraditional way of addressing and naming: \"Sun Tzu\" is an honorific title for Sun Wu. In ancient times, the character \"zi\" was used as an honorific title for learned and morally upright men, such as Confucius and Mencius."
    },
    {
        question: "Who was the only female emperor in Chinese history?",
        choices: [
            { text: "Wu Zetian", correct: true },
            { text: "Empress Dowager Cixi", correct: false },
            { text: "Queen Victoria", correct: false },
            { text: "Cleopatra", correct: false }
        ],
        explanation: "Wu Zetian was the only legitimate empress in Chinese history. She ascended the throne in 690 to establish the Wu Zhou dynasty, breaking the traditional patriarchal ruling pattern. Her reign was marked by relatively clear politics, laying the foundation for the Kaiyuan Prosperity."
    },
    {
        question: "Which of the following correctly represents the order of the birth times of Laozi, Confucius, and Mencius from the earliest to the latest in terms of age?",
        choices: [
            { text: "Confucius > Laozi > Mencius", correct: false },
            { text: "Laozi > Confucius > Mencius", correct: true },
            { text: "Mencius > Laozi > Confucius", correct: false }
        ],
        explanation: "Laozi lived approximately from 571 BC to 471 BC. Confucius was born in 551 BC and passed away in 479 BC. Mencius was born around 372 BC and died in 302 BC. Therefore, according to the order of their births, that is, from the oldest to the youngest in terms of age, the sequence is Laozi > Confucius > Mencius."
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const questionEl = document.getElementById('question');
    const choicesEl = document.getElementById('choices');
    const progressEl = document.getElementById('progress');
    const feedbackEl = document.getElementById('feedback');
    
    // Update progress bar
    const progress = ((currentQuestion) / quizData.length) * 100;
    progressEl.innerHTML = `<div id="progress-bar" style="width: ${progress}%"></div>`;
    
    // Show question
    questionEl.textContent = quizData[currentQuestion].question;
    
    // Clear choices and feedback
    choicesEl.innerHTML = '';
    feedbackEl.innerHTML = '';
    feedbackEl.style.display = 'none';
    
    // Add choices
    quizData[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.classList.add('choice-btn');
        button.addEventListener('click', () => checkAnswer(index));
        choicesEl.appendChild(button);
    });
}

function checkAnswer(choiceIndex) {
    const feedbackEl = document.getElementById('feedback');
    const buttons = document.querySelectorAll('.choice-btn');
    
    // Disable all buttons
    buttons.forEach(button => button.disabled = true);
    
    const correct = quizData[currentQuestion].choices[choiceIndex].correct;
    
    // Show feedback and explanation
    feedbackEl.style.display = 'block';
    feedbackEl.innerHTML = `
        <div class="feedback-text">${correct ? 'Correct!' : 'Incorrect!'}</div>
        <div class="explanation">${quizData[currentQuestion].explanation}</div>
    `;
    feedbackEl.className = correct ? 'correct' : 'incorrect';
    
    // Highlight correct answer
    buttons.forEach((button, index) => {
        if (quizData[currentQuestion].choices[index].correct) {
            button.classList.add('correct');
        } else if (index === choiceIndex) {
            button.classList.add('incorrect');
        }
    });
    
    if (correct) score++;
    
    // Delay before next question
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 5000); // Increased delay to allow time to read explanation
}

function showResults() {
    const quizEl = document.getElementById('quiz');
    const resultsEl = document.getElementById('results');
    const scoreEl = document.getElementById('score');
    
    quizEl.style.display = 'none';
    resultsEl.style.display = 'block';
    scoreEl.textContent = `${score} / ${quizData.length}`;
    
    document.getElementById('restart').addEventListener('click', () => {
        quizEl.style.display = 'block';
        resultsEl.style.display = 'none';
        startQuiz();
    });
}

// Start quiz
startQuiz(); 