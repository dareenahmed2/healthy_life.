function chooseMood(mood){
  let msg="";
  if(mood==='happy'){
    msg="Great to hear! Keep spreading positivity 😊";
  } else if(mood==='neutral'){
    msg="Thanks for sharing. Maybe try a short walk?";
  } else if(mood==='sad'){
    msg="I'm sorry. Reach out to someone you trust. 💬";
  }
  document.getElementById('tip').innerText = msg;
}