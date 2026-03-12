function checkHydration(){
  const n=parseInt(document.getElementById('num').value,10);
  let msg="";
  if(n<4) msg="You need to drink more water.";
  else if(n<8) msg="Almost there, keep sipping!";
  else msg="Great, well hydrated!";
  document.getElementById('result').innerText=msg;
}