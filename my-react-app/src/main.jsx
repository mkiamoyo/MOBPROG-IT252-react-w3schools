import React from 'react';
import { createRoot } from 'react-dom/client'

class Car extends React.Component {
  constructor() {
    super();
    this.state = {color: "green"};
  }
  render() {
    return <h2>I am a {this.state.color} Car!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <Car />
);