// div.inner 태그 내부에 <div>hello</div> 추가
// 프로그래밍 방식 적용

// create Element
let queryInner = document.querySelector("#container > .inner");
let element = document.createElement("div");
let hellotext = document.createTextNode("hello");
element.appendChild(hellotext);
queryInner.appendChild(element);

// innerHTML
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");
// let item = "<div class='item'>" + animal["name"] + animal["age"] + "</div>";
item = `<div class="item">${animal["name"]} : ${animal["age"]}</div>`;
queryApp.innerHTML = item;

// sncak
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];
let querySnack = document.querySelector("#list");
let snack = "";

productsData.forEach((productsData, index) => {
  snack += `<div id="list">${productsData["title"]} : ${productsData["weight"]}</div>`;
});
querySnack.innerHTML = snack;
