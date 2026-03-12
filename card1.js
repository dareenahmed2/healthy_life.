const questions=[
  {q:"Which is highest in vitamin C?", options:["Apple","Orange","Banana"], answer:1},
  {q:"Which food is a protein source?", options:["Bread","Chicken","Candy"], answer:1},
  {q:"Which is a healthy fat?", options:["Avocado","Chips","Soda"], answer:0}
];
let current=-1;
function newQuestion(){
  current=Math.floor(Math.random()*questions.length);
  const obj=questions[current];
  document.getElementById("question").innerText=obj.q;
  const container=document.getElementById("answers");
  container.innerHTML="";
  obj.options.forEach((opt,i)=>{
    const btn=document.createElement("button");
    btn.innerText=opt;
    btn.onclick=()=>checkAnswer(i);
    container.appendChild(btn);
  });
  document.getElementById("feedback").innerText="";
  document.getElementById("tip").innerText="";
}
function checkAnswer(choice){
  if(current<0) return;
  const correct=questions[current].answer;
  if(choice===correct){
    document.getElementById("feedback").innerText="Correct! 🎉";
  } else {
    document.getElementById("feedback").innerText="Wrong, try again.";
  }
  showTip();
}
function showTip(){
  const tips=[
    "Eat more fruits 🍓",
    "Drink plenty of water 💧",
    "Include vegetables 🥦",
    "Avoid too much sugar 🍬"
  ];
  document.getElementById("tip").innerText=tips[Math.floor(Math.random()*tips.length)];
}