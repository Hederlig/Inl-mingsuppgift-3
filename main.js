let button = document.querySelector("#changeButton");
let checkAwnser = document.querySelector("#getResults");
let list = (document.querySelector("#list").style.listStyle = "none");
let awnser = document.querySelectorAll("[value='true']");
let results = document.querySelector("#results");
//Från länken
var checks = document.querySelectorAll(".towns");

button.addEventListener("click", () => {
  let body = document.querySelector("body");
  if (body.style.background === "black") {
    body.style.background = "white";
    body.style.color = "black";
  } else {
    body.style.background = "black";
    body.style.color = "red";
  }
});

// https://stackoverflow.com/questions/43456868/javascript-limit-selected-checkboxes-to-2
// Studera och lär dig.
var max = 2;
for (var i = 0; i < checks.length; i++)
  checks[i].onclick = selectiveCheck;
function selectiveCheck (event) {
  var checkedChecks = document.querySelectorAll(".towns:checked");
  if (checkedChecks.length >= max + 1)
    return false;
}

checkAwnser.addEventListener("click", () => {
  let counter = 0;
  awnser.forEach((input) => {
    if (input.checked) {
      counter++;
    }
  });
  results.innerHTML = " Your final score is " + counter + " out of 7";
});

