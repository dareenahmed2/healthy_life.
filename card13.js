let medInterval;
function startMeditation(){
  let phase=0;
  document.getElementById('status').innerText='Inhale...';
  medInterval=setInterval(()=>{
    if(phase===0){document.getElementById('status').innerText='Hold...';phase=1;}
    else if(phase===1){document.getElementById('status').innerText='Exhale...';phase=2;}
    else{document.getElementById('status').innerText='Inhale...';phase=0;}
  },4000);
  setTimeout(()=>{clearInterval(medInterval);document.getElementById('status').innerText='Done! Relaxed.';},20000);
}