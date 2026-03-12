function showFact(){
  const facts=[
    "Apples are 86% water.",
    "Carrots improve eyesight due to vitamin A.",
    "Almonds are high in healthy fats.",
    "Broccoli contains vitamin C."
  ];
  document.getElementById('fact').innerText = facts[Math.floor(Math.random()*facts.length)];
}