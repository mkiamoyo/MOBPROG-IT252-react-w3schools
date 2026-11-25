import { createRoot } from 'react-dom/client'

function Car(props) {
  const {brand, model} = props;
  return (
    <h2>I love my {brand} {model}!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car brand="BMW" model="M4" color="dark green" year={2022} />
);