import { useState } from "react";
import "./App.css";

function App() {
  // Angka Fibonacci saat ini
  const [current, setCurrent] = useState<number>(1);

  // Angka Fibonacci sebelumnya
  const [previous, setPrevious] = useState<number>(0);

  // Fungsi untuk menghitung Fibonacci berikutnya
  const getNextFibonacci = (): number => {
    return current + previous;
  };

  // Dipanggil saat tombol diklik
  const handleClick = (): void => {
    const next = getNextFibonacci();

    setPrevious(current);
    setCurrent(next);
  };

  return (
    <div className="container">
      <h1>Penghitung Fibonacci</h1>

      <div className="number">{current}</div>

      <button onClick={handleClick}>
        Fibonacci Berikutnya
      </button>
    </div>
  );
}

export default App;