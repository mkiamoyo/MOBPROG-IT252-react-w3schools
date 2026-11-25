import { createRoot } from 'react-dom/client'

//Check out the index.html file, were we have added some styles.

function Car() {
  const x = "myclass";
  return (
    <h1 className={x}>Hello World</h1>
  );
}

createRoot(document.getElementById('root')).render(
  <Car />
);