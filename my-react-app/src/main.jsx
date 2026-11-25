import { createRoot } from 'react-dom/client';
import styles from './MyStyles.module.css';

function App() {
  return (
    <div>
      <h1 className="myheader">
        My Header
      </h1>
      <p className={styles.myparagraph}>
        My Paragraph
      </p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);