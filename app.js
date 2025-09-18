const questions = [
  {
    question: "what is your name ?",
    options: ["Zaid", "Sameer", "Sohaib", "Arham"],
    answer: "Zaid",
  },
  {
    question: "What is the currency of Pakistan ?",
    options: ["Rupee", "Dollar", "Taka", "Dinar"],
    answer: "Rupee",
  },
  {
    question: "Which sea lies to the south of pakistan ?",
    options: ["Red Sea", "Arabian Sea", "Caspian Sea", "Black Sea"],
    answer: "Arabian Sea",
  },
  {
    question: "What is the national sport of pakistan ?",
    options: ["Cricket", "Hockey", "Football", "Kabaddi"],
    answer: "Hockey",
  },
  {
    question: "Who is the founder of pakistan ?",
    options: ["Quaid-e-Azam", "Liaquat Ali Khan", "Sameer Baloch", "Zaid"],
    answer: "Quaid-e-Azam",
  },
  {
    question: "What is the capital of Pakistan?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    answer: "Islamabad",
  },
  {
    question: "When did Pakistan come into being?",
    options: ["1940", "1945", "1947", "1950"],
    answer: "1947",
  },
  {
    question: "Which city is called the City of Lights?",
    options: ["Lahore", "Islamabad", "Karachi", "Multan"],
    answer: "Karachi",
  },
  {
    question: "What is the national language of Pakistan?",
    options: ["Punjabi", "Sindhi", "Urdu", "Pashto"],
    answer: "Urdu",
  },
  {
    question: "Which is the largest province of Pakistan by area?",
    options: ["Punjab", "Sindh", "Balochistan", "Khyber Pakhtunkhwa"],
    answer: "Balochistan",
  },
];

let index = 0;
let score = 0;

function showQuestion() {
  document.getElementById("question").innerText = questions[index].question;

  let answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  questions[index].options.forEach((option) => {
    let btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = function () {
      checkAnswer(option);
    };
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === questions[index].answer) {
    score += 10;
  }

  index++;

  if (index < questions.length) {
    showQuestion();
  } else {
    document.getElementById("question").innerText = "Quiz Finished";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("result").innerText =
      "Your total score is: " + score + " / 100";
  }
}

// start quiz
showQuestion();
