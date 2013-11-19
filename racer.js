player1 = new Player();
player2 = new Player();

function beginRace() {
  bindEventListeners();
}

function bindEventListeners() {
  document.getElementById('body').addEventListener('keypress', moveCars);
}

function moveCars(event) {
  userPressedLetter = keyPressed(event.keyCode);
  console.log(userPressedLetter);
  if (userPressedLetter === "q") {
    $('#player1_strip td').eq('' + player1.position).removeClass('active');
    player1.advance();
    $('#player1_strip td').eq('' + player1.position).addClass('active');
    isWinner1();
  }
  if (userPressedLetter === "p") {
    $('#player2_strip td').eq('' + player2.position).removeClass('active');
    player2.advance();
    $('#player2_strip td').eq('' + player2.position).addClass('active');
    isWinner2();
  }
}

function keyPressed(keycode) {
  return String.fromCharCode(keycode);
}

function isWinner1(playerNumber) {
  if (player1.position === 10) {
    alert("Congratulations Player Q!!!");
  }
}

function isWinner2(playerNumber) {
  if (player2.position === 10) {
    alert("Congratulations Player P!!!");
  }
}
