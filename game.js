let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];

function handleClick(index) {
  if (board[index] === "") {
    board[index] = currentPlayer;
    document.getElementById("board").children[index].innerText = currentPlayer;
    if (checkWin()) {
      setTimeout(() => {
        alert(currentPlayer + " wins!");
        resetBoard();
      }, 100);
    } else if (checkDraw()) {
      alert("It's a draw!");
      resetBoard();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (let condition of winConditions) {
    if (
      board[condition[0]] !== "" &&
      board[condition[0]] === board[condition[1]] &&
      board[condition[1]] === board[condition[2]]
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return board.every(cell => cell !== "");
}

function resetBoard() {
  board = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll(".cell").forEach(cell => cell.innerText = "");
}
