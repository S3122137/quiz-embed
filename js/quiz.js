const quizData = [
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
    },
    {
        question: "Which of the following historical figures took Ji Ru (籍孺) as his male favorite?",
        choices: [
            { text: "Xiang Yu", correct: false },
            { text: "Liu Bang", correct: true },
            { text: "Emperor Wu of Han", correct: false },
            { text: "Emperor Wen of Han", correct: false }
        ],
        explanation: "As recorded in Records of the Historian (Shiji), during the reign of Emperor Gaozu (Liu Bang), Ji Ru rose to favor not through ability, but by flattery and charm. Along with Hong Ru under Emperor Hui, these figures were known for their intimate relationships with emperors rather than political talent. Ji Ru became so influential that high officials had to curry favor with him."
    },
    {
        question: "Which of the following individuals was NOT a contemporary of Li Bai?",
        choices: [
            { text: "Theophanes", correct: false },
            { text: "Paul the Deacon", correct: false },
            { text: "Al-Jahiz", correct: true }
        ],
        explanation: "Li Bai lived from 701 to around 762 AD. Both Theophanes (c. 758–817) and Paul the Deacon (c. 720–799) were either contemporaries or close in historical timeframe. However, Al-Jahiz was born in 776 AD, more than a decade after Li Bai died — so they were not contemporaries. Al-Jahiz became one of the most important writers of the Abbasid Golden Age, often seen as the Islamic world's counterpart to the Tang Dynasty's cultural peak. His famous works include: The Book of Misers, The Book of Animals. These are celebrated for their satirical tone, natural observations, and fusion of literature and science."
    },
    {
        question: "Du Fu, one of China's most renowned poets, lived during which dynasty?",
        choices: [
            { text: "Han Dynasty", correct: false },
            { text: "Tang Dynasty", correct: true },
            { text: "Song Dynasty", correct: false },
            { text: "Ming Dynasty", correct: false }
        ],
        explanation: "Du Fu (712–770), often honored as the 'Poet Sage' (诗圣), lived during the Tang Dynasty, a golden age of Chinese poetry and culture. He was a contemporary of Li Bai, but his poetry emphasized realism, social concern, and moral duty. His lifetime spanned the height and decline of the Tang, including the An Lushan Rebellion, which deeply influenced his work. His poems reflect the suffering of common people and are celebrated for their depth, structure, and historical value."
    },
    {
        question: "Which of the following figures lived during the same era as Su Shi?",
        choices: [
            { text: "Charlemagne", correct: false },
            { text: "William the Conqueror", correct: true },
            { text: "Alexander the Great", correct: false }
        ],
        explanation: "Su Shi (1037–1101), also known as Su Dongpo, was a Song Dynasty poet, politician, and calligrapher. William the Conqueror (c. 1028–1087), who famously invaded and unified England in 1066, lived in the same century as Su Shi. Charlemagne ruled during the 8th–9th centuries AD, much earlier. Alexander the Great lived in the 4th century BC, over a millennium before."
    },
    {
        question: "Confucius lived during the Spring and Autumn Period in China from 551 BC to 479 BC. Among the following figures, the one who was NOT from the same period as Confucius is:",
        choices: [
            { text: "Socrates", correct: false },
            { text: "Pythagoras", correct: false },
            { text: "Plato", correct: true },
            { text: "Ahmose II, the Pharaoh of Egypt", correct: false }
        ],
        explanation: "Confucius (551–479 BC) lived during the late Spring and Autumn Period, a time of intellectual ferment in ancient China. Socrates (470–399 BC) and Pythagoras (c. 580–500 BC) had lifespans that overlapped with Confucius, placing them roughly in the same global historical window. Ahmose II, Pharaoh of Egypt (570–526 BC), also ruled during Confucius's lifetime. However, Plato (427–347 BC) was born decades after Confucius passed away, making him not a contemporary of Confucius."
    },
    {
        question: "Which of the following historical figures was NOT from the same era as the author of The Art of War, Sun Wu (Sun Tzu)?",
        choices: [
            { text: "Alexander the Great", correct: true },
            { text: "Cyrus the Great", correct: false },
            { text: "Wu Zixu", correct: false },
            { text: "Bimbisara", correct: false }
        ],
        explanation: "Sun Wu was active around the late Spring and Autumn Period, approximately in the 6th century BC. Wu Zixu, a prominent minister of the Wu state, was Sun Wu's contemporary and even a political ally. Cyrus the Great (c. 600–530 BC), the founder of the Achaemenid Empire, lived slightly earlier than Sun Wu but their timelines partially overlapped. Bimbisara, the king of Magadha in India (c. 558–491 BC), ruled during the same general historical period. In contrast, Alexander the Great (356–323 BC) lived more than two centuries later, during the Hellenistic era. He belongs to a much later historical context, making him not from the same era as Sun Wu."
    },
    {
        question: "The famous 'Detective Dee' stories are entirely based on historical records.",
        choices: [
            { text: "True", correct: false },
            { text: "False", correct: true }
        ],
        explanation: "Di Renjie was indeed a historical figure — a respected official during the Tang Dynasty, known for his integrity and loyalty to Empress Wu Zetian. However, the 'Detective Dee' persona — a brilliant investigator solving mysterious crimes — is largely fictional. This image stems from traditional Chinese detective novels like 'Di Gong An', and was later made globally famous by Robert van Gulik's adaptations. While Di Renjie did serve as a judge and was praised for fair governance, there is no historical record of him solving intricate murders or using forensic science. The stories are a blend of historical fact and imaginative fiction, designed to entertain and inspire."
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