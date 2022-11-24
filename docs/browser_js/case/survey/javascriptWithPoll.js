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

// // 답 문항 fuction
// function answerF(answer_u) {
//   if (answer_u == "E1 E2") {
//     console.log("(1) 전혀 아니다. (2) 아니다.");
//   } else if (answer_u == "E1 E2 E3") {
//     console.log("(1) 전혀 아니다. (2) 아니다. (3) 보통이다.");
//   } else if (answer_u == "E1 E2 E3 E4") {
//     console.log("(1) 전혀 아니다. (2) 아니다. (3) 보통이다. (4) 그렇다.");
//   } else if (answer_u == "E1 E2 E3 E4 E5") {
//     console.log(
//       "(1) 전혀 아니다. (2) 아니다. (3) 보통이다. (4) 그렇다. (5) 매우 그렇다."
//     );
//   }
// }

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

// let a = body.addEventListener("load", survey(), flase);

let queryButtonPrev = document.querySelector("#prev");
queryButtonPrev.addEventListener("click", survey);

let i = 0;

function printPrev() {
  if (i == 0) {
    return;
  }
  i--;
  survey();
}

let queryButtonNext = document.querySelector("#next");
queryButtonNext.addEventListener("click", survey);

function printNext() {
  i++;
  survey();
}

function survey() {
  for (let i = 0; i < questions.length; i++) {
    let queryQuestion = document.querySelector("#survey > .question");
    queryQuestion.innerHTML = questions[i].question;
  }

  let queryAnswer = document.querySelector("#survey > .answer");
  queryAnswer.innerHTML = "";
  queAnsCnn.forEach((element) => {
    if (element.question_uid == questions[i].question_uid) {
      answers.forEach((queAnsCnn) => {
        if (queAnsCnn.answer_uid == answers[i].answer_uid) {
          let radio = `<input type="radio" name="answer" id="answer" value="radio${answers.order}"/>`;
          let label = `<label for="answer">${answers.answer} </label><br>`;
          queryAnswer.innerHTML += radio + label;
        }
      });
    }
  });
}

function result() {
  for (let i = 0; i < questions.length; i++) {}
}
