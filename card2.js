const exercises=[
  "Jumping jacks",
  "Push-ups",
  "Squats",
  "Plank hold"
];
let timerId;

function startExercise(){
  const ex=exercises[Math.floor(Math.random()*exercises.length)];
  document.getElementById('exercise').innerText = ex + ' - 30 seconds';
  document.getElementById('startBtn').disabled = true;
  let count=30;
  document.getElementById('timer').innerText = count;
  timerId = setInterval(()=>{
    count--;
    document.getElementById('timer').innerText = count;
    if(count<=0){
      clearInterval(timerId);
      document.getElementById('timer').innerText = '';
      document.getElementById('startBtn').disabled = false;
      showTip();
    }
  },1000);
}

function showTip(){
  const tips=[
    "Walk 30 minutes daily 🚶‍♂️",
    "Do stretching before exercises 🤸",
    "Include cardio in routine 🏃",
    "Exercise 3x per week 🏋️"
  ];
  document.getElementById("tip").innerText=tips[Math.floor(Math.random()*tips.length)];
}