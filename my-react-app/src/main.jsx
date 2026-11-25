import { createRoot } from 'react-dom/client';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`;

function App() {
  return (
    <div>
      <Button btntype="primary">Primary Button</Button>
      <br />
      <br />
      <Button>Secondary Button</Button>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);