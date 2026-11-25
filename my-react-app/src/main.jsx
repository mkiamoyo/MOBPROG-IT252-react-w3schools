import { createRoot } from 'react-dom/client'

function Car({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="BMW" model="M4" color="dark green" year={2022} />
);