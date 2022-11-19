// 화면 정의서 대로 출력
// datatypes : Array, Object
//

const fs = require("fs");
const { format } = require("path");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/case/input.txt";
let input = fs.readFileSync(filepath).toString().split("\n").map(Number);

// let input_answers = [];
// for(let i = 0; i < 5; i++){

// }

// 문항
let questions = [
  {
    question_uid: "Q1",
    question: "1. 해당 매장 방문 시 매장은 청결하였습니까?",
    order: "1",
  },
  {
    question_uid: "Q2",
    question: "2. 직원이 제조한 음료는 맛이 좋았습니까?",
    order: "2",
  },
  {
    question_uid: "Q3",
    question: "3. 주문시 직원은 고객님께 친절하였습니까?",
    order: "3",
  },
  {
    question_uid: "Q4",
    question: "4. 해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    order: "4",
  },
  {
    question_uid: "Q5",
    question: "5. 주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    order: "5",
  },
];

// 답항
let answers = [
  { answer_uid: "E1", answer: "(1) 전혀 아니다", order: "1" },
  { answer_uid: "E2", answer: "(2) 아니다", order: "2" },
  { answer_uid: "E3", answer: "(3) 보통이다", order: "3" },
  { answer_uid: "E4", answer: "(4) 그렇다", order: "4" },
  { answer_uid: "E5", answer: "(5) 매우 그렇다", order: "5" },
];

// 문항 - 답항 연결
let queAnsCnn = [
  { question_uid: "Q1", answer_uid: "E1" },
  { question_uid: "Q1", answer_uid: "E2" },
  { question_uid: "Q1", answer_uid: "E3" },
  { question_uid: "Q2", answer_uid: "E1" },
  { question_uid: "Q2", answer_uid: "E2" },
  { question_uid: "Q2", answer_uid: "E3" },
  { question_uid: "Q2", answer_uid: "E4" },
  { question_uid: "Q3", answer_uid: "E1" },
  { question_uid: "Q3", answer_uid: "E2" },
  { question_uid: "Q4", answer_uid: "E1" },
  { question_uid: "Q4", answer_uid: "E2" },
  { question_uid: "Q4", answer_uid: "E3" },
  { question_uid: "Q4", answer_uid: "E4" },
  { question_uid: "Q4", answer_uid: "E5" },
  { question_uid: "Q5", answer_uid: "E1" },
  { question_uid: "Q5", answer_uid: "E2" },
  { question_uid: "Q5", answer_uid: "E3" },
];

let idx;
let compare;
for (idx = 0; idx < queAnsCnn.length; idx++) {
  //   let answer_string = answers.answer담기
  if (compare != queAnsCnn[idx]["question_uid"]) {
    console.log(`!= : ${queAnsCnn[idx]["question_uid"]}`);
    console.log(`!= : ${queAnsCnn[idx]["answer_uid"]}`);
  } else {
    console.log(`== : ${queAnsCnn[idx]["answer_uid"]}`);
  }
  compare = queAnsCnn[idx]["question_uid"];
}
console.log(`queAnsCnn.length : ${queAnsCnn.length}, idx : ${idx}`);
