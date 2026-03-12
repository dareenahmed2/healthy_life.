function showTip(){
  const tips=[
    "Take deep breaths 💨",
    "Go for a short walk 🚶",
    "Listen to calming music 🎵",
    "Write your thoughts down 📝"
  ];
  document.getElementById('tip').innerText = tips[Math.floor(Math.random()*tips.length)];
}