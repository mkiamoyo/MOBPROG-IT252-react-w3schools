import { createRoot } from 'react-dom/client';
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={`${styles.mybutton} ${styles.primary}`}>
        My Primary Button
      </button>
      <br/>
      <br/>
      <button className={`${styles.mybutton} ${styles.secondary}`}>
        My Secondary Button
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);