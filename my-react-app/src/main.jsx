import { createRoot } from 'react-dom/client'

function Friend1(props) {
  return (
    <div style={{background: 'lightgreen'}}>
      <h2>Maeve</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Friend2(props) {
  const {brand, model} = props;
  return (
    <div style={{background: 'lightblue'}}>
      <h2>Becca</h2>
      <div>{props.children}</div>
    </div>
  );
}

function Self() {
  return (
    <div>
      <h1>My Two Friends</h1>
      <Friend1>
        <p>
          This was written in the Self component,
          but displayed as a part of the Friend1 component
        </p>
      </Friend1>
      <Friend2>
        <p>
          This was written in the Self component,
          but displayed as a part of the Friend2 component
        </p>
      </Friend2>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <Self/>
);