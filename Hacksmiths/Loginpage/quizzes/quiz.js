const questions =[
    {
        question: "A diamond that reflects multiple colours is most similar to?",
        options:[
            {text: "arrays of different datatypes", correct:false},
            {text: "derived datatype made of more than one datatype", correct:true},
            {text: "different loop functionalities", correct:false},
            {text: "Switch-case functionality", correct:false},
        ]
    },
    {
        question: "I operate between two statements based on a condition.What am I?",
        options:[
            {text: "Logical operators", correct:false},
            {text: "Relational Operators", correct:false},
            {text: "Assignment Operators", correct:false},
            {text: "Ternary operators", correct:true},
        ]
    },
    {
        question: "What causes a loop to not stop?",
        options:[
            {text: "no termination statement", correct:true},
            {text: "no break statement", correct:false},
            {text: "updation is fractional", correct:false},
            {text: "none of these", correct:false},
        ]
    },
    {
        question: "I am step-by-step guide to your problems. What am I?",
        options:[
            {text: "Pseudocode", correct:false},
            {text: "Flowchart", correct:false},
            {text: "Algorithm", correct:true},
            {text: "Function", correct:false},
        ]
    },
    {
        question: "A door opening at the correct key best matches the functionality of?",
        options:[
            {text: "switch-case", correct:false},
            {text: "conditional statements", correct:true},
            {text: "both of these", correct:false},
            {text: "none", correct:false},
        ]
    },
    {
        question: "I combine data and functions to create real-world entities.What am I?",
        options:[
            {text: "block of code", correct:false},
            {text: "function", correct:false},
            {text: "object", correct:true},
            {text: "class", correct:false},
        ]
    },
    {
        question: "I deal with handling unexpected errors in tasks?",
        options:[
            {text: "block of code", correct:false},
            {text: "function", correct:false},
            {text: "object", correct:true},
            {text: "class", correct:false},
        ]
    },
    {
        question: "I help your program decide between different paths.What am I?",
        options:[
            {text: "Conditionals", correct:true},
            {text: "Switch-case", correct:false},
            {text: "try-catch block", correct:false},
            {text: "all of these", correct:false},
        ]
    },
    {
        question: "Storing data in an organised manner in a sequence represents an?",
        options:[
            {text: "Array", correct:false},
            {text: "List", correct:false},
            {text: "Queue", correct:false},
            {text: "All of these", correct:true},
        ]
    },
    {
        question: "Which of these is a file-handling mechanism?",
        options:[
            {text: "scripting", correct:false},
            {text: "importing package", correct:false},
            {text: "including a header file", correct:true},
            {text: "all of these", correct:false},
        ]
    }
    ];

    const questionElement = document.getElementById("question");
    const answerButtons = document.getElementById("options");
    const submitButton = document.getElementById("submit");

    let currentQuestionIndex = 0;
    let score =0;

    function startQuiz(){
        currentQuestionIndex=0;
        score=0;
        submitButton.innerHTML="Next";
        showQuestion();
    }

    function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex+1;
        questionElement.innerHTML = questionNo+"."+currentQuestion.question;

        currentQuestion.answers.forEach(answer =>{
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click", selectAnswer);
        });
    }

    function resetState(){
        submitButton.style.display="none";
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild);
        }
    }

    function selectAnswer(){
        const selectedBtn = e.target;
        const isCorrect = selectedBtn.dataset.correct === "true";
        if(isCorrect){
            selectedBtn.classList.add("correct");
            score++;
        }else{
            selectedBtn.classList.add("incorrect");
        }
        Array.from(answerButtons.children).forEach(button=>{
            if(button.dataset.correct === "true"){
                button.classList.add("correct");
            }
            button.disabled=true; 
        });
        submitButton.style.display="block";
    }

    function showScore(){
        resetState();
        questionElement.innerHTML='You scored ${score} out of ${questions,length)!';
        submitButton.innerHTML="Play Again";
        submitButton.style.display="block";
    }

    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }

    submitButton.addEventListener("click", ()=>{
        if (currentQuestionIndex < questions.length){
            handleNextButton();
        }else{
            startQuiz();
        }
    })
    function startQuiz();




