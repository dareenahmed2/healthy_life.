function saveHabits(){
  const habits = {
    water: document.getElementById('h1').checked,
    exercise: document.getElementById('h2').checked,
    veggies: document.getElementById('h3').checked
  };
  localStorage.setItem('habits', JSON.stringify(habits));
  document.getElementById('status').innerText = 'Saved! Come back any time.';
}

function loadHabits(){
  const stored = JSON.parse(localStorage.getItem('habits')||'{}');
  if(stored.water) document.getElementById('h1').checked=true;
  if(stored.exercise) document.getElementById('h2').checked=true;
  if(stored.veggies) document.getElementById('h3').checked=true;
}

loadHabits();