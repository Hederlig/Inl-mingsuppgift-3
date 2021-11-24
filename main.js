let button = document.querySelector("#changeButton");
let checkAwnser = document.querySelector("#getResults");
let list = (document.querySelector("#list").style.listStyle = "none");
let div = document.getElementById("results")
let points = document.createElement("p")

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
  if (document.getElementById("true1").checked) {
    counter++;
  }
  if (document.getElementById("true2").checked) {
    counter++;
  }
  if (document.getElementById("true3").checked) {
    counter++;
  }
  if (document.getElementById("true4").checked) {
    counter++;
  }
  if (document.getElementById("true5").checked) {
    counter++;
  }
  if (document.getElementById("true6").checked) {
    counter++;
  }
  if (
    document.getElementById("stronghold").checked == true &&
    document.getElementById("fortress").checked == true &&
    document.getElementById("tower").checked == false &&
    document.getElementById("necropolis").checked == false &&
    document.getElementById("inferno").checked == false && 
    document.getElementById("castle").checked == false &&
    document.getElementById("dungeon").checked == false &&
    document.getElementById("rampart").checked == false
  ) {
    counter++;
  }


  points.textContent = `Your final score is ${counter} out of 7`;
  div.appendChild(points);
 
  if (counter == 7) {
    points.style.color = "#32CD32";
} else if (counter > 3) {
    points.style.color = "#FFA500";
} else {
    points.style.color = "#ff0000";
}

});
