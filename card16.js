function showTip(){
  const tips=[
    "Take breaks from screens every 20 minutes 👀",
    "Eat carrots for vitamin A 🥕",
    "Get your eyes checked regularly 👓",
    "Wear sunglasses on sunny days 😎"
  ];
  document.getElementById('tip').innerText = tips[Math.floor(Math.random()*tips.length)];
}