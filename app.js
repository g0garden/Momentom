'use strict'
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");

const handleLoginBtn = (e) => {
  const userName = loginInput.value;
  
  if(userName === ""){
    alert("이름을 입력하세요!")
  }
  console.log(userName);
} 


loginBtn.addEventListener("click", handleLoginBtn);