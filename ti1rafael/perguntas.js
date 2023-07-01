const questions = [
    {
      question: "Qual seu horario livre",
      answers: ["Manha", "Tarde", "O dia Todo"],
    },
    {
      question: "Voce Tera Horario Livre em quais dias?",
      answers: ["Todos os dias da semana", "Todos os dias da semana e sabado", "Personalizado"],
    },
    {
      question: "Quantas aulas por dia voce quer fazer",
      answers: ["1", "2", "4", "Personalizado"],
    },
    {
      question: "Pergunta PlaceHolder",
      answers: ["r1", "r2", "r3","r4","r5"],
    },
    {
      question: "Pergunta PlaceHolder2",
      answers: ["r1", "r2"],
    },
  ];
  
  const userAnswers = [];
  
  function generateQuiz() {
    const quizContainer = document.getElementById("quiz-container");
  
    questions.forEach((question, index) => {
      const questionDiv = document.createElement("div");
      questionDiv.className = "question";
  
      const questionText = document.createElement("p");
      questionText.textContent = `${index + 1}. ${question.question}`;
      questionDiv.appendChild(questionText);
  
      question.answers.forEach((answer, answerIndex) => {
        const label = document.createElement("label");
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = `question-${index}`;
        radio.value = answer;
  
        label.appendChild(radio);
        label.appendChild(document.createTextNode(answer));
  
        questionDiv.appendChild(label);
      });
  
      quizContainer.appendChild(questionDiv);
    });
  }
  
  function saveAnswer() {
    userAnswers.length = 0;
  
    questions.forEach((question, index) => {
      const selectedAnswer = document.querySelector(`input[name="question-${index}"]:checked`);
  
      if (selectedAnswer) {
        userAnswers.push({
          question: question.question,
          answer: selectedAnswer.value,
        });
      }
    });
  }
  
  function clearAnswers() {
    userAnswers.length = 0;
  }
  
  function handleSubmit() {
    saveAnswer();
  
    const submitButton = document.getElementById("submit-button");
    const editButton = document.getElementById("edit-button");
  
    submitButton.style.display = "none";
    editButton.style.display = "inline-block";
  
    showResults();
  }
  
  function handleEdit() {
    const quizContainer = document.getElementById("quiz-container");
    const resultsContainer = document.getElementById("results-container");
    const submitButton = document.getElementById("submit-button");
    const editButton = document.getElementById("edit-button");
  
    quizContainer.style.display = "block";
    resultsContainer.style.display = "none";
    submitButton.style.display = "inline-block";
    editButton.style.display = "none";
  
    clearAnswers();
  }
  
  function showResults() {
    const quizContainer = document.getElementById("quiz-container");
    const resultsContainer = document.getElementById("results-container");
  
    quizContainer.style.display = "none";
    resultsContainer.style.display = "block";
  
    resultsContainer.innerHTML = "";
  
    const resultText = document.createElement("p");
    resultText.textContent = "Suas Respostas:";
    resultsContainer.appendChild(resultText);
  
    userAnswers.forEach((userAnswer, index) => {
      const answerText = document.createElement("p");
      answerText.textContent = `${index + 1}. ${userAnswer.question}: ${userAnswer.answer}`;
      resultsContainer.appendChild(answerText);
    });
  }
  
  window.onload = generateQuiz;
  