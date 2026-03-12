function showActivity(){
  const acts=[
    "Go for a walk in the park",
    "Ride a bicycle",
    "Have a picnic",
    "Play frisbee with friends"
  ];
  document.getElementById('activity').innerText = acts[Math.floor(Math.random()*acts.length)];
}