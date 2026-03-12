window.onload=function(){
let name=localStorage.getItem("user");
if(name){
document.getElementById("welcome").innerText="Welcome "+name+" 👋";
}
}

function openPage(page){
window.location.href=page;
}