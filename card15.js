function showTip(){
  const tips=[
    "Brush twice a day 🪥",
    "Floss regularly 🧵",
    "Visit the dentist every 6 months 🏥",
    "Avoid too much sugar 🍬"
  ];
  document.getElementById('tip').innerText = tips[Math.floor(Math.random()*tips.length)];
}