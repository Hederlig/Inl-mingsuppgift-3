let button = document.querySelector("#changeButton");

document.body.style.display.center

button.addEventListener("click", () => {
  let body = document.querySelector("body");
    if (body.style.background === "black") {
    body.style.background = "white";
    body.style.color = "black"
  } else {
    body.style.background = "black";
    body.style.color = "pink"
  }
});
