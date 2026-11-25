import { createRoot } from 'react-dom/client'

function Car({color = "green", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="BMW" />
);