// إذا المستخدم محفوظ بالفعل، نبدأ مباشرة
if(localStorage.getItem("user")){
  window.location.href = "home.html";
}

let mode = 'login'; // or 'register'

function login(){
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const nameInput = document.getElementById('name').value.trim();
  const error = document.getElementById('error');
  const box = document.querySelector('.login-box');

  if(!email || !password || (mode==='register' && !nameInput)){
    showError('Please fill in all required fields 🔥');
    return;
  }

  const stored = JSON.parse(localStorage.getItem('account') || '{}');

  if(mode === 'register'){
    // register new account with explicit name
    stored.email = email;
    stored.password = password;
    stored.name = nameInput;
    localStorage.setItem('account', JSON.stringify(stored));
    localStorage.setItem('user', JSON.stringify({email:stored.email,name:stored.name}));
    window.location.href = 'home.html';
  } else {
    // login
    if(stored.email === email && stored.password === password){
      localStorage.setItem('user', JSON.stringify({email:stored.email,name:stored.name}));
      window.location.href = 'home.html';
    } else {
      showError('Email or password incorrect ❌');
    }
  }
}

function showError(msg){
  const error = document.getElementById('error');
  const box = document.querySelector('.login-box');
  error.innerText = msg;
  error.style.visibility = 'visible';
  box.classList.add('shake');
  setTimeout(()=>{ box.classList.remove('shake'); }, 300);
}

function toggleMode(e){
  e.preventDefault();
  const toggle = document.getElementById('toggleText');
  const btn = document.getElementById('submitBtn');
  const nameHint = document.getElementById('name-hint');
  const nameField = document.getElementById('name');
  if(mode === 'login'){
    mode = 'register';
    toggle.innerHTML = 'Already have an account? <a href="#" onclick="toggleMode(event)">Login</a>';
    btn.innerText = 'Register';
    nameHint.innerText = '';
    nameField.style.display = 'block';
  } else {
    mode = 'login';
    toggle.innerHTML = 'Don\'t have an account? <a href="#" onclick="toggleMode(event)">Sign up</a>';
    btn.innerText = 'Login';
    nameHint.innerText = 'Just your first name is enough 😊';
    nameField.style.display = 'none';
  }
}

// message rotation stays same
let messages=[
  "Welcome to Healthy Life 👋",
  "Eat Healthy, Stay Happy! 🥗",
  "Your Health is Your Wealth 💪",
  "Ready to explore health tips? 🌟",
  "Start your journey now! 🚀"
];
let i=0;
function changeMessage(){
  document.getElementById("welcome-msg").innerText=messages[i];
  i=(i+1)%messages.length;
}
setInterval(changeMessage,3000);

// hide error when typing
['email','password','name'].forEach(id=>{
  document.getElementById(id).addEventListener('input',()=>{
    document.getElementById('error').style.visibility='hidden';
  });
});

// greeting update
const nameField = document.getElementById('name');
const nameGreeting = document.getElementById('name-greeting');
nameField.addEventListener('input', ()=>{
  const v = nameField.value.trim();
  nameGreeting.innerText = v ? 'Hello, ' + v + '!' : '';
});

// footer remains
const footer=document.createElement('p');
footer.id='login-footer';
footer.innerText='Healthy Life © 2026 - Stay Active, Stay Healthy';
document.querySelector('.login-box').appendChild(footer);