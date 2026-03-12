const questions = [
  {
    q: "Which food is highest in vitamin C?",
    options: ["Apple", "Orange", "Banana"],
    answer: 1
  },
  {
    q: "Which of these is a whole grain?",
    options: ["White bread", "Brown rice", "Cookies"],
    answer: 1
  },
  {
    q: "Which vegetable is dark green and leafy?",
    options: ["Carrot", "Spinach", "Potato"],
    answer: 1
  }
];

let currentIndex = -1;

function newQuestion(){
  currentIndex = Math.floor(Math.random()*questions.length);
  const obj = questions[currentIndex];
  document.getElementById("question").innerText = obj.q;
  const container = document.getElementById("answers");
  container.innerHTML = "";
  obj.options.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(i);
    container.appendChild(btn);
  });
  document.getElementById("feedback").innerText = "";
  document.getElementById("tip").innerText = "";
}

function checkAnswer(choice){
  if(currentIndex === -1) return;
  const correct = questions[currentIndex].answer;
  if(choice === correct){
    document.getElementById("feedback").innerText = "Correct! 👍";
  } else {
    document.getElementById("feedback").innerText = "Oops, try again!";
  }
  showTip();
}

function showTip(){
  const tips = [
    "Include a variety of colors on your plate 🍽️",
    "Eat whole fruits instead of juices.",
    "Choose whole grains over refined grains."
  ];
  document.getElementById("tip").innerText = tips[Math.floor(Math.random()*tips.length)];
}