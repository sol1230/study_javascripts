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
// [
//   {question_uid: Q1, answer_uid: [E1, E2], answer: };
//   {question_uid: Q2, answer_uid: [E1, E2, E3]};
//   {question_uid: Q3, answer_uid: [E1, E2]};
//   {question_uid: Q4, answer_uid: [E1, E2, E3, E4, E5]};
//   {question_uid: Q5, answer_uid: [E1, E2, E3]};
// ]
// 1차 : [Q1, Q2, Q3, Q4, Q5]
// 2차 : Array in Array [[Q1, E1, E2], ...]
let polls = []; // 전체 묶음
let question_compare;
let question_a = []; // 내부 묶음
for (let idx = 0; idx < queAnsCnn.length; idx++) {
  if (question_compare != queAnsCnn[idx]["question_uid"]) {
    if (question_a.length > 0) {
      polls.push(question_a);
      question_a = [];
    }
    // console.log(`!== : ${queAnsCnn[idx]["question_uid"]}`);
    // console.log(`!== : ${queAnsCnn[idx]["answer_uid"]}`);
    question_a.push(queAnsCnn[idx]["question_uid"]);
    question_a.push(queAnsCnn[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${queAnsCnn[idx]["answer_uid"]}`);
    question_a.push(queAnsCnn[idx]["answer_uid"]);
  }
  question_compare = queAnsCnn[idx]["question_uid"]; // 이전 uid 입력
}
polls.push(question_a); // Q5
console.log(`${polls}`);
