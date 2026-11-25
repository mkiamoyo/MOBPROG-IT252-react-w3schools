import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar() {
  const [brand, setBrand] = useState("BMW");
  const [model, setModel] = useState("M4");
  const [year, setYear] = useState("2022");
  const [color, setColor] = useState("dark green");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);