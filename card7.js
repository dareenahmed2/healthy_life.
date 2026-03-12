function updateHours(val){
  document.getElementById('hourValue').innerText = val;
}

function evaluateSleep(){
  const hrs = parseInt(document.getElementById('hours').value,10);
  let msg = '';
  if(hrs<5) msg = 'Too little sleep 😴 Try to rest more.';
  else if(hrs<8) msg = 'Not bad, but aim for 8 hours.';
  else if(hrs<=10) msg = 'Great! That is a healthy amount 👍';
  else msg = 'You slept a lot, make sure it wasn\'t restless.';
  document.getElementById('tip').innerText = msg;
}