import { useState } from "react";
import confetti from "canvas-confetti";
import Square from "./components/Square";
import { TURNS } from "./constants";
import { checkEndGame, checkWinner } from "./logic/board";
import WinnerModal from "./components/WinnerModal";

function App() {
  const [board, setBoard] = useState(() => {
    const board = window.localStorage.getItem("board");
    return board ? JSON.parse(board) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turn = window.localStorage.getItem("turn");
    return turn ? turn : TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset</button>
      <section className="game">
        {board.map((cell, index) => (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {cell}
          </Square>
        ))}
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
