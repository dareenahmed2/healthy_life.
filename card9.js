let breathingInterval;
function startBreathing(){
  document.getElementById("startBtn").disabled = true;
  let phase = 0; // 0 inhale,1 hold,2 exhale
  document.getElementById("status").innerText = "Inhale...";
  document.getElementById("tip").innerText = "";
  breathingInterval = setInterval(()=>{
    const circle = document.getElementById("circle");
    if(phase === 0){
      circle.style.transform = "scale(1.5)";
      document.getElementById("status").innerText = "Hold...";
      phase = 1;
    } else if(phase === 1){
      document.getElementById("status").innerText = "Exhale...";
      phase = 2;
    } else {
      circle.style.transform = "scale(1)";
      document.getElementById("status").innerText = "Inhale...";
      phase = 0;
    }
  }, 4000);
  setTimeout(stopBreathing, 20000);
}

function stopBreathing(){
  clearInterval(breathingInterval);
  document.getElementById("status").innerText = "Done! Feel calmer 😊";
  document.getElementById("startBtn").disabled = false;
  document.getElementById("tip").innerText = "Practice this whenever stressed.";
}