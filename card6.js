let clicks = 0;
let timerId;

function startChallenge(){
  clicks = 0;
  document.getElementById("count").innerText = clicks;
  document.getElementById("startBtn").disabled = true;
  document.getElementById("circle").onclick = () => {
    clicks++;
    document.getElementById("count").innerText = clicks;
  };
  timerId = setTimeout(endChallenge, 10000);
}

function endChallenge(){
  document.getElementById("startBtn").disabled = false;
  document.getElementById("circle").onclick = null;
  alert("Time's up! You clicked " + clicks + " times.");
  showTip();
}

function showTip(){
  const tips = [
    "Take short exercise breaks during the day.",
    "Health is built by small daily habits.",
    "Always warm up before starting any workout."
  ];
  document.getElementById("tip").innerText = tips[Math.floor(Math.random()*tips.length)];
}