let queryRemoveBtn = document.querySelector("#removeBtn");
queryRemoveBtn.addEventListener("click", (event) => {
  remove(event);
});

function remove(event) {
  let queryRemove = document.querySelector("#remove");
  queryRemove.style.display = "none";
}

let queryHideBtn = document.querySelector("#hideBtn");
queryHideBtn.addEventListener("click", (event) => {
  hide(event);
});

function hide(event) {
  let queryHide = document.querySelector("#hide");
  queryHide.style.visibility = "hidden";
}

let queryResetAllBtn = document.querySelector("#resetAllBtn");
queryResetAllBtn.addEventListener("click", (event) => {
  resetAll(event);
});

function resetAll(event) {
  let queryRemove = document.querySelector("#remove");
  queryRemove.style.display = "block";

  let queryHide = document.querySelector("#hide");
  queryHide.style.visibility = "visible";
}
