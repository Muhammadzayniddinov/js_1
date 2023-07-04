let num = +prompt("Ishlamohchi bolgan misollar sonini kiriting");

while (isNaN(num) || num == 0) {
  num = +prompt("Ishlamohchi bolgan misollar sonini kiriting");
}

for (let i = 0; i < num; i++) {
  let problemText = problem();
  let answer = eval(problemText);
  let userAnswer = +prompt(problemText);
  if (userAnswer == answer) {
    alert("Javobingiz to'g'ri");
  } else {
    alert(`Javobingiz noto'g'ri. To'g'ri javob: ${answer}.`);
  }
}

function problem() {
  let a = Math.round(Math.random() * 100);
  let b = Math.round(Math.random() * 3);
  let c = Math.round(Math.random() * 50);
  let d = "";

  if (b == 0) {
    d = "+";
  } else if (b == 1) {
    d = "-";
  } else if (b == 2) {
    d = "*";
  } else {
    d = "/";
  }

  return `${a} ${d} ${c}`;
}
