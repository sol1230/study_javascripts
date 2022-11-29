let querySingle = document.querySelector("#single");
// querySingle.addEventListener("click", singleEvent);
querySingle.addEventListener("click", (event) => {
  singleEvent(event);
});
// querySingle.addEventListener("double-click", singleEvent);

function singleEvent(event) {
  console.log(event);
  querySingle.innerHTML = "Take One Event!";
}

// 엔터로 입력
let queryKeydown = document.querySelector("#keydown");
queryKeydown.addEventListener("keydown", (event) => {
  console.log(event);
  if (event.code == "Enter") {
    keydownDesc(queryKeydown.value);
  }
  console.log(event.target);
});

function keydownDesc(desc) {
  let querKeydownDesc = document.querySelector("#keydownDesc");
  querKeydownDesc.innerHTML = desc;
}

let queryload = document.querySelector("#keydownDesc");
queryload.addEventListener("load", queryLoad());

function queryLoad() {
  queryload.innerHTML = "Done On Load!";
}
