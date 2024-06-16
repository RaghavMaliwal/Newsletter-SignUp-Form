let submit = document.querySelector("#submit");
let email = document.getElementById("emails");
let errormess = document.getElementById("error");
let inputPage = document.querySelector(".container");
let successPage = document.querySelector(".successMessage");
let dismiss = document.querySelector("#dismiss");

let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

submit.addEventListener("click", checkMail);
dismiss.addEventListener("click", dismissss);

function checkMail() {
  let email = document.getElementById("emails");

  let flag = 1;
  console.log(email);

  let isValid = emailPattern.test(email.value);

  if (isValid == false) {
    showError();
  } else {
    thank();
  }
}

function showError() {
  errormess.style.visibility = "visible";
  email.style.border = "2px solid hsl(4, 100%, 67%)";
  email.style.backgroundColor = "hsl(4, 100%, 90%)";
}

function thank() {
  inputPage.style.visibility = "hidden";
  errormess.style.visibility = "hidden";
  inputPage.style.height = "0";
  inputPage.style.width = "0";
  successPage.style.visibility = "visible";
  successPage.style.height = "540px";
  successPage.style.width = "540px";
  successPage.style.margin = "180px";
}

function dismissss() {
  inputPage.style.visibility = "visible";
  inputPage.style.height = "640px";
  inputPage.style.width = "920px";
  successPage.style.visibility = "hidden";
  successPage.style.height = "0";
  successPage.style.width = "0";
  successPage.style.margin = "0";
  email.value = "";
}
