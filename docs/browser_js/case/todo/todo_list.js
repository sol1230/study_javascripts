// item 추가 : 입력 후 add or enter, 입력 없을 시 alter window
let queryInput = document.querySelector("#input"); // 입력
let queryItems = document.querySelector("#items"); // todo 출력
let queryAddBtn = document.querySelector("#addBtn"); // add버튼

// click
queryAddBtn.addEventListener("click", (event) => {
  todoList(event);
});

// enter
queryInput.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    // event.code : 한글 두 번 입력
    todoList(event);
    return;
  }
});

// add todo
function todoList(event) {
  if (queryInput.value != "" && queryInput.value != "undefined") {
    let newItem = `<div class="items">
    <div>${queryInput.value}</div>
    <span class="icon">
    <div class="like">
    <i class="material-icons">favorite_border</i>
    </div>
    <div class="delete">
    <i class="material-icons">delete</i>
    </div>
    </span>
    </div>`;

    queryItems.insertAdjacentHTML("beforeend", newItem);
  } else {
    // 빈칸 입력시
    alert("please enter a task");
    return;
  }
}

// item 좋아요 : 토글링 효과 , item remove
queryItems.addEventListener("click", (event) => {
  if (event.target.innerHTML == "favorite_border") {
    event.target.innerHTML = "favorite";
    return;
  }
  if (event.target.innerHTML == "favorite") {
    event.target.innerHTML = "favorite_border";
    return;
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
});
