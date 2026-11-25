import { createRoot } from 'react-dom/client';

const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightgreen"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Header />
);