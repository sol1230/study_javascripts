let elementById = document.getElementById("selector");
// console.log(`elementById : ${elementById}`);
// elementById.innerHTML = "<b>Change selector</b>";

let titleByID = document.getElementById("title");
// titleByID.innerHTML = "Title By Id";

let listByclassName = document.getElementsByClassName("list");
// console.log(`${listByclassName}`);

let pByTagName = document.getElementsByTagName("p");
console.log(`${pByTagName}`);
// buttonByTagName.innerHTML = "클릭하세요";

let queryTitle = document.querySelector("#title");
// queryTitle.innerHTML = "query Title";

let queryItems = document.querySelectorAll(".item");
// queryItems.forEach((item, index) => {
//   console.log(item);
// });

let queryLists = document.querySelectorAll(".list");
let queryList = document.querySelector(".list");

// change properties from  querySelector
queryTitle.style.color = "blue";
queryTitle.style.fontSize = "2rem";
queryTitle.style.backgroundColor = "rgba(255,0,0,0.5)";

let queryContent = document.querySelector("#contentId");
