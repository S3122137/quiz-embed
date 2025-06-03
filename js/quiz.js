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
    
    // 更新进度条
    const progress = ((currentQuestion) / quizData.length) * 100;
    progressEl.innerHTML = `<div id="progress-bar" style="width: ${progress}%"></div>`;
    
    // 显示问题
    questionEl.textContent = quizData[currentQuestion].question;
    
    // 清空选项
    choicesEl.innerHTML = '';
    
    // 添加选项
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
    
    // 禁用所有按钮
    buttons.forEach(button => button.disabled = true);
    
    const correct = quizData[currentQuestion].choices[choiceIndex].correct;
    
    // 显示反馈
    feedbackEl.style.display = 'block';
    feedbackEl.textContent = correct ? '回答正确！' : '回答错误！';
    feedbackEl.className = correct ? 'correct' : 'incorrect';
    
    // 高亮正确答案
    buttons.forEach((button, index) => {
        if (quizData[currentQuestion].choices[index].correct) {
            button.classList.add('correct');
        } else if (index === choiceIndex) {
            button.classList.add('incorrect');
        }
    });
    
    if (correct) score++;
    
    // 延迟后进入下一题
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
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

// 开始测验
startQuiz(); 