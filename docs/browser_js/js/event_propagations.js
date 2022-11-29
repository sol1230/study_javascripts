// load 제외 전부 arrow function
// document.querySelector("#item1");

// document.querySelector("#item1"); == event.target
// let queryInputAll = document.querySelectorAll("input");
// for (let queryInput of queryInputAll) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }

// alert
let queryItemList = document.querySelector(".item-list");
queryItemList.addEventListener("click", (event) => {
  if (event.target.id != "" && event.target.id != "undefined") {
    alert(`clicked ${event.target.id} : ${event.target.value}`);
  }
  if (event.target.innerHTML == "delete") {
    event.target.parentElement.parentElement.parentElement.remove();
  }
}); //상위 element에 Event 설정
let newItem = `<li>
                <div>
                    <input type="checkbox" name="" id="item3">
                    <label for="item3">item three</label>
                    <span>
                    <i class="material-icons delete">delete</i>
                  </span>
                </div>
            </li>`;

// 입력 추가
// queryItemList.innerHTML = queryItemList.innerHTML + newItem;
queryItemList.insertAdjacentHTML("beforeend", newItem);
// queryItemList.insertAdjacentHTML("beforebegin", newItem);

// let queryInputs = document.querySelectorAll("input");
// for (let queryInput of queryInputs) {
//   queryInput.addEventListener("click", (event) => {
//     alert(`clicked ${event.target.id} : ${event.target.value}`);
//   });
// }
