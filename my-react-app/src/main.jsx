import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyCar() {
  const [car, setCar] = useState({
    brand: "BMW",
    model: "M4",
    year: "2022",
    color: "dark green"
  });

  return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <MyCar />
);