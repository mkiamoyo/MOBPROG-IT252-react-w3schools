import { createRoot } from 'react-dom/client';
import styles from './my-style.module.css'; 
  
const Car = () => {
  return <h1 className={styles.bigred}>Hello Car!</h1>;
}
  
createRoot(document.getElementById('root')).render(
  <Car />
);