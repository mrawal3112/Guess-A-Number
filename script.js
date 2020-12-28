var snumber = Math.trunc(Math.random() * 20) + 1;
console.log(snumber);
var score = 20;
var highScore = 0;
document.querySelector(".checkbtn").addEventListener("click", function () {
  const data = Number(document.querySelector(".input-data").value);
  if (score > 1) {
    if (!data) {
      document.querySelector(".message").textContent =
        "------- Enter a valid number in input field -------";
    } else if (snumber === data) {
      document.querySelector(".message").textContent =
        "------- Correct Answer -------";
      if(score > highScore)
      highScore = score;
      else{}
      document.querySelector(".hscore").textContent = highScore;
      document.querySelector(".number-box").style.backgroundColor = "slategrey";
    } else if (snumber < data) {
      document.querySelector(".message").textContent =
        "------- Number is Greater than Random -------";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (snumber > data) {
      document.querySelector(".message").textContent =
        "------- Number is Smaller than Random -------";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else {
    score === 1 ? score-- : "";
    document.querySelector(".message").style.color = "red";
    document.querySelector(".message").textContent = "------ TRY AGAIN -------";
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".retrybtn").addEventListener("click", function () {
  document.querySelector(".message").textContent =
    "------- Start your Game -------";
  document.querySelector(".score").textContent = 20;
  score = 20;
  document.querySelector(".input-data").value = "";
  document.querySelector(".number-box").style.backgroundColor = "black";
  snumber = Math.trunc(Math.random() * 20) + 1;
  console.log(snumber);
  document.querySelector(".message").style.color = 'white';
});
