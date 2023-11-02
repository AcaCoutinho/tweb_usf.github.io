function login(){
  var uname = document.getElementById("uname");
  var psw = document.getElementById("psw");

  if(uname.value == "defesa" && psw.value == "admin"){
    window.open("acesso.html");
    window.close("login.html");
  }
  else{
    alert("Usuário ou Password inválidos");
  }
}