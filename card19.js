function check(){
  const ans=document.getElementById('answer').value.trim();
  document.getElementById('result').innerText = ans==8 ? 'Correct!' : 'Try again.';
}