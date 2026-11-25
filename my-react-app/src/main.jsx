import { createRoot } from 'react-dom/client'

function MyCars() {
  const cars = ['Ford', 'BMW', 'Mercedes-Benz'];
  return (
    <>
      <h1>My Cars:</h1>
      <ul>
        {cars.map((car) => <li>I am a { car }</li>)}
      </ul>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <MyCars />
);