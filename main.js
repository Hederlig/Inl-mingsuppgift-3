let button = document.querySelector("#changeButton");
let checkAwnser = document.querySelector("#getResults");
let list = (document.querySelector("#list").style.listStyle = "none");
let awnser = document.querySelectorAll("[value='true']");
let results = document.querySelector("#results");


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

checkAwnser.addEventListener("click", () => {
  let counter = 0;
  awnser.forEach((input) => {
    if (input.checked) {
      counter++;
    }
  });
  results.innerHTML = " Your final score is " + counter + " out of 7";
});

