// 문항
let questions = [
  {
    question_uid: "Q1",
    question: "해당 매장 방문 시 매장은 청결하였습니까?",
    order: "1",
    answer_u: "E1 E2",
  },
  {
    question_uid: "Q2",
    question: "직원이 제조한 음료는 맛이 좋았습니까?",
    order: "2",
    answer_u: "E1 E2 E3 E4",
  },
  {
    question_uid: "Q3",
    question: "주문시 직원은 고객님께 친절하였습니까?",
    order: "3",
    answer_u: "E1 E2",
  },
  {
    question_uid: "Q4",
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    order: "4",
    answer_u: "E1 E2 E3 E4 E5",
  },
  {
    question_uid: "Q5",
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    order: "5",
    answer_u: " E1 E2 E3",
  },
];

// 답항
let answers = [
  { answer_uid: "E1", answer: "전혀 아니다", order: "1" },
  { answer_uid: "E2", answer: "아니다", order: "2" },
  { answer_uid: "E3", answer: "보통이다", order: "3" },
  { answer_uid: "E4", answer: "그렇다", order: "4" },
  { answer_uid: "E5", answer: "매우 그렇다", order: "5" },
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
// 3차 : Object in Array [{question_uid: Q1, answer_uid: [E1, E2]}, ...]

let polls = []; // 전체 묶음
let question_compare;
let question_a = {}; // 내부 묶음
let answer_a = []; // 내부 설문 답변 묶음
for (let idx = 0; idx < queAnsCnn.length; idx++) {
  if (question_compare != queAnsCnn[idx]["question_uid"]) {
    if (Object.keys(question_a).length > 0) {
      question_a["answer_uid"] = answer_a;
      polls.push(question_a);
      question_a = {};
      answer_a = [];
    }
    // console.log(`!== : ${queAnsCnn[idx]["question_uid"]}`);
    // console.log(`!== : ${queAnsCnn[idx]["answer_uid"]}`);
    // question_a.push(queAnsCnn[idx]["question_uid"]);
    question_a["question_uid"] = queAnsCnn[idx]["question_uid"];
    answer_a.push(queAnsCnn[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${queAnsCnn[idx]["answer_uid"]}`);
    answer_a.push(queAnsCnn[idx]["answer_uid"]);
    if (idx + 1 >= queAnsCnn.length) {
      question_a["answer_uid"] = answer_a;
      polls.push(question_a);
    }
  }
  question_compare = queAnsCnn[idx]["question_uid"]; // 이전 uid 입력
}
// polls.push(question_a); // Q5
// console.log(`${polls}`);

// 출력
// [{question_uid: Q1, answer_uid: [E1, E2], ...}]
// polls[0]["question_uid"];
// polls[0]["answer_uid"][0];
// polls[0]["answer_uid"][1];

// polls[1]["question_uid"];
// polls[1]["answer_uid"][0];
// polls[1]["answer_uid"][1];
// polls[1]["answer_uid"][2];

// 설문 문항 가져오는 함수
function getQuestionsByUid(question_uid) {
  let question_desc;
  for (ques of questions) {
    if (ques["question_uid"] === question_uid) {
      // === : 값, 데이터 타입까지 비교
      question_desc = ques["question"];
      break;
    }
  }
  return question_desc;
}

// 설문 답 문항 가져오는 함수
function getAnswersByUid(answer_uid) {
  let answer_desc;
  for (ans of answers) {
    if (ans["answer_uid"] === answer_uid) {
      answer_desc = ans["answer"];
      break;
    }
  }
  return answer_desc;
}

for (poll of polls) {
  // console.log(
  //   `${poll["question_uid"]}. ${getQuestionsByUid(poll["question_uid"])}`
  // ); // == polls[idx]
  let answer_uids = poll["answer_uid"];
  answer_uids.forEach((answer_uid, index) => {
    // console.log(`${index + 1}.${getAnswersByUid(answer_uid)}`);
  });
}

// Event handles next 누르면 순서대로 출력
// 대상 변수는 polls

let queryNext = document.querySelector("#next");
queryNext.addEventListener("click", setPollContents);
// if (index == 4) {
//   console.log("마지막 페이지 입니다.");
// }

let index = 0;

function setPollContents() {
  if (index == polls.length) {
    alert("마지막 페이지 입니다.");
    return;
  } else {
    let queryContents = document.querySelector("#poll-contents");
    // polls[0]["question_uid"]   // 설문 문항
    // polls[0]["answer_uid"]   // 설문 답 문항
    // console.log(getQuestionsByUid(polls[index]["question_uid"]));
    let desc = `<div>${index + 1}. ${getQuestionsByUid(
      polls[index]["question_uid"]
    )}</div>`;
    polls[index]["answer_uid"].forEach((answer_a, index) => {
      // console.log(`${index + 1}. ${getAnswersByUid(answer_a)}`);
      desc =
        desc +
        `<div><input type = "radio" name = "answer" "id = "${index}" ><label for = "${index}">(${
          index + 1
        }). ${getAnswersByUid(answer_a)}</label></div>`;
    });

    queryContents.innerHTML = desc;
    index++;
  }
}

let queryPrev = document.querySelector("#prev");
queryPrev.addEventListener("click", setPollPrev);

function setPollPrev() {
  if (index == 1) {
    alert("이전 페이지가 없습니다.");
    return;
  } else {
    let queryContentsMin = document.querySelector("#poll-contents");
    let prev = `<div>${index - 1}. ${getQuestionsByUid(
      polls[index - 2]["question_uid"]
    )}</div>`;
    polls[index - 2]["answer_uid"].forEach((answer_a, index) => {
      prev =
        prev +
        `<div><input type = "radio" name = "answer" id = "${index}" ><label for = "${index}">(${
          index + 1
        }). ${getAnswersByUid(answer_a)}</label></div>`;
    });
    queryContentsMin.innerHTML = prev;
    index--;
  }
}
