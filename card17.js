function saveHabits(){
  const habits = {
    water: document.getElementById('h1').checked,
    walk: document.getElementById('h2').checked,
    sleep: document.getElementById('h3').checked
  };
  localStorage.setItem('dailyHabits', JSON.stringify(habits));
  document.getElementById('status').innerText = 'Saved!';
}

// load
const stored = JSON.parse(localStorage.getItem('dailyHabits')||'{}');
if(stored.water) document.getElementById('h1').checked=true;
if(stored.walk) document.getElementById('h2').checked=true;
if(stored.sleep) document.getElementById('h3').checked=true;