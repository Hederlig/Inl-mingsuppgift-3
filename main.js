let button = document.querySelector("#changeButton");
let list = document.querySelector("#list").style.listStyle = "none"

button.addEventListener("click", () => {
  let body = document.querySelector("body");
    if (body.style.background === "black") {
    body.style.background = "white";
    body.style.color = "black"
  } else {
    body.style.background = "black";
    body.style.color = "red"
  }
});
