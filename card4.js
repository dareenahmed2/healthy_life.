let count=0;

function setupGlasses(){
  const container = document.getElementById('glasses');
  container.innerHTML='';
  for(let i=0;i<8;i++){
    const glass=document.createElement('div');
    glass.className='glass';
    glass.onclick = ()=>{
      if(!glass.classList.contains('filled')){
        glass.classList.add('filled');
        count++;
        document.getElementById('result').innerText = count + ' cups consumed';
        if(count===8){
          document.getElementById('message').innerText = 'Well done! You reached 8 cups!';
          showTip();
        }
      }
    };
    container.appendChild(glass);
  }
}

function showTip(){
  const tips = [
    "Drink a glass of water when you wake up 💦",
    "Carry a water bottle with you everywhere.",
    "Flavor your water with lemon or mint 🍋",
    "Set a reminder to sip regularly.⌛"
  ];
  document.getElementById("tip").innerText = tips[Math.floor(Math.random()*tips.length)];
}

// initialize on load
window.onload = setupGlasses;