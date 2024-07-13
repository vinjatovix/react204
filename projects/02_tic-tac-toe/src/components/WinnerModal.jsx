import Square from "./Square";

const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) {
    return;
  }

  const winnerText =
    winner === false ? "It's a draw!" : `Player ${winner} wins!`;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">
          {winner && <Square isSelected={true}>{winner}</Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Restart</button>
        </footer>
      </div>
    </section>
  );
};

export default WinnerModal;
