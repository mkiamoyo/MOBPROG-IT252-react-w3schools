import { createRoot } from 'react-dom/client';
import styles from './BlueHeader.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);