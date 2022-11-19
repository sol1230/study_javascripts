const { match } = require("assert");
const fs = require("fs");
const filepath =
  process.platform === "linux"
    ? "/dev/stdin"
    : "docs/vanilla_js/case/input.txt";
let input = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

// 문항
let questions = [
  {
    question_uid: "Q1",
    question: "1. 해당 매장 방문 시 매장은 청결하였습니까?",
    order: "1",
    answer_u: "E1 E2",
  },
  {
    question_uid: "Q2",
    question: "2. 직원이 제조한 음료는 맛이 좋았습니까?",
    order: "2",
    answer_u: "E1 E2 E3 E4",
  },
  {
    question_uid: "Q3",
    question: "3. 주문시 직원은 고객님께 친절하였습니까?",
    order: "3",
    answer_u: "E1 E2",
  },
  {
    question_uid: "Q4",
    question: "4. 해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    order: "4",
    answer_u: "E1 E2 E3 E4 E5",
  },
  {
    question_uid: "Q5",
    question: "5. 주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    order: "5",
    answer_u: " E1 E2 E3",
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
// let queAnsCnn = [
// { question_uid: "Q1", answer_uid: "E1" },
// { question_uid: "Q1", answer_uid: "E2" },
// { question_uid: "Q1", answer_uid: "E3" },
// { question_uid: "Q2", answer_uid: "E1" },
// { question_uid: "Q2", answer_uid: "E2" },
// { question_uid: "Q2", answer_uid: "E3" },
// { question_uid: "Q2", answer_uid: "E4" },
// { question_uid: "Q3", answer_uid: "E1" },
// { question_uid: "Q3", answer_uid: "E2" },
// { question_uid: "Q4", answer_uid: "E1" },
// { question_uid: "Q4", answer_uid: "E2" },
// { question_uid: "Q4", answer_uid: "E3" },
// { question_uid: "Q4", answer_uid: "E4" },
// { question_uid: "Q4", answer_uid: "E5" },
// { question_uid: "Q5", answer_uid: "E1" },
// { question_uid: "Q5", answer_uid: "E2" },
// { question_uid: "Q5", answer_uid: "E3" },
// ];

// let idx;
// let compare;
// let answer_input = answers.answer;

// for (idx = 0; idx < queAnsCnn.length; idx++) {
//   if (compare != queAnsCnn[idx]["question_uid"]) {
//     console.log(`!= : ${questions[idx]["question"]}`);
//     console.log(`!= : ${answers[idx]["answer"]}`);
//   } else {
//     console.log(`== :${answers[idx]["answer"]}`);
//   }
//   compare = queAnsCnn[idx]["question_uid"];
//   console.log(`답) (${input[i]})`);
// }
// console.log(`queAnsCnn.length : ${queAnsCnn.length}, idx : ${idx}`);

// 문항 function
function questionF(i) {
  console.log(`${questions[i]["question"]}`);
}

// 답 문항 fuction
function answerF(answer_u) {
  if (answer_u == "E1 E2") {
    console.log("(1) 전혀 아니다. (2) 아니다.");
  } else if (answer_u == "E1 E2 E3") {
    console.log("(1) 전혀 아니다. (2) 아니다. (3) 보통이다.");
  } else if (answer_u == "E1 E2 E3 E4") {
    console.log("(1) 전혀 아니다. (2) 아니다. (3) 보통이다. (4) 그렇다.");
  } else if (answer_u == "E1 E2 E3 E4 E5") {
    console.log(
      "(1) 전혀 아니다. (2) 아니다. (3) 보통이다. (4) 그렇다. (5) 매우 그렇다."
    );
  }
}

// 출력
for (let i = 0; i < questions.length; i++) {
  questionF(i);
  answerF(questions[i]["answer_u"]);
  console.log(`답) (${input[i]})`);
}

console.log("---------설문자 선택---------");

function resultF(i) {
  let inputs = input[i] - 1; // 인덱스 값은 하나 작으니까 -1
  console.log(`${answers[inputs]["answer"]}`);
}

for (let i = 0; i < questions.length; i++) {
  questionF(i);
  resultF(i);
}
console.log("\n");

console.log("이용해주셔서 고맙습니다.");

// 문항 - 답 문항 출력
// questions.forEach((element) => {
//   if (element["question_uid"] == "Q1") {
//     console.log(`${questions[0]["question"]}`);
//     console.log(
//       `${answers[0]["answer"]} ${answers[1]["answer"]} ${answers[2]["answer"]}`
//     );
//     console.log(`${userAnswer}`);
//   }
//   if (element["question_uid"] == "Q2") {
//     console.log(`${questions[1]["question"]}`);
//     console.log(
//       `${answers[0]["answer"]} ${answers[1]["answer"]} ${answers[2]["answer"]} ${answers[3]["answer"]}`
//     );
//     console.log(`답) ${userAnswer}`);
//   }
//   if (element["question_uid"] == "Q3") {
//     console.log(`${questions[2]["question"]}`);
//     console.log(`${answers[0]["answer"]} ${answers[1]["answer"]}`);
//     console.log(`답) ${userAnswer}`);
//   }
//   if (element["question_uid"] == "Q4") {
//     console.log(`${questions[3]["question"]}`);
//     console.log(
//       `${answers[0]["answer"]} ${answers[1]["answer"]} ${answers[2]["answer"]} ${answers[3]["answer"]} ${answers[4]["answer"]}`
//     );
//     console.log(`답) ${userAnswer}`);
//   }
//   if (element["question_uid"] == "Q5") {
//     console.log(`${questions[4]["question"]}`);
//     console.log(
//       `${answers[0]["answer"]} ${answers[1]["answer"]} ${answers[2]["answer"]}`
//     );
//     console.log(`답) ${userAnswer}`);
//   }
// });

// 설문자 선택
// questions.forEach((element_1) => {
//   if (element_1["question_uid"] == "Q1") {
//     console.log(`${questions[0]["question"]}`);
//     console.log(`답) ${userAnswer}`);
//   }
//   if (element_1["question_uid"] == "Q2") {
//     console.log(`${questions[1]["question"]}`);
//     console.log(`답) ${userAnswer}`);
//   }
//   if (element_1["question_uid"] == "Q3") {
//     console.log(`${questions[2]["question"]}`);
//     console.log(`답) ${userAnswer}`);
//   }
//   if (element_1["question_uid"] == "Q4") {
//     console.log(`${questions[3]["question"]}`);
//     console.log(`답) ${userAnswer}`);
//   }
//   if (element_1["question_uid"] == "Q5") {
//     console.log(`${questions[4]["question"]}`);
//     console.log(`답) ${userAnswer}`);
//   }
// });
