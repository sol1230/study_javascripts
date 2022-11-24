function changeText() {
  let queryChangeText = document.querySelector("#changetext");
  queryChangeText.innerHTML = "Change on Me!";
}

let queryclickalert = document.querySelector("#clickalert");
// queryclickalert =>  <div id="clickalert">Click on Me! with alert()</div>
// typeof queryclickalert => object
// {queryclickalert} => {}오브젝트

// element.addEcentListener(event, function, useCapture)
queryclickalert.addEventListener("click", clickAlert);
function clickAlert() {
  alert("click on Me!");
}

let queryButton = document.querySelector("#buttonChangeText");
queryButton.addEventListener("click", targetText);

function targetText(event) {
  let queryTargetText = document.querySelector("#targetText");
  queryTargetText.innerHTML = "Target Text!";
}
