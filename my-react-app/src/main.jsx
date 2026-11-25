import { createRoot } from 'react-dom/client'

function Car(props) {
  return (
    <h2>I am a {props.color} Mari Krisha Iana!</h2>
  );
}

createRoot(document.getElementById('root')).render(
  <Car color="green"/>
);
