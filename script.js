let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;

let highScore = 0;
const messageContent = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "⛔ No Number!";
    messageContent("⛔ No Number!");
    // when player win
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    messageContent("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    function changeBackground() {
      let body = document.getElementsByTagName("body")[0];
      body.style.background = "linear-gradient(to bottom, #00c6ff, #0072ff)";
    }
    document.querySelector("body").style.background = changeBackground();

    document.querySelector(".number").style.width = "30rem";

    //checked if highscore is greater than score;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // when guess is wrond
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "📈Too high!" : " 📉Too low!";

      messageContent(guess > secretNumber ? "📈Too high!" : " 📉Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //   document.querySelector(".message").textContent = "🎆You lost the game!";

      messageContent("🎆You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  } //when the guess is to high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = "📈Too high!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "🎆You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
  // when the guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = " 📉Too low!";
  //       score--;
  //       document.querySelector(".score").textContent = score;
  //     } else {
  //       document.querySelector(".message").textContent = "🎆You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }
});

//again button

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  function changeBackground() {
    let body = document.getElementsByTagName("body")[0];
    body.style.background =
      "radial-gradient(circle,  rgba(154, 116, 133, 1) 0%, rgba(98, 140, 187, 1) 100%)";
  }
  document.querySelector("body").style.background = changeBackground();

  document.querySelector(".number").style.width = "15rem";
});
