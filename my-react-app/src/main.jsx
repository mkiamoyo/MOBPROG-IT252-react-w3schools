import { createRoot } from 'react-dom/client';
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.primary}>
        Primary Button
      </button>
      <br/>
      <br/>
      <button className={styles.secondary}>
        Secondary Button
      </button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);