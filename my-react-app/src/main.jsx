import React from 'react';
import { createRoot } from 'react-dom/client'

class Car extends React.Component {
  render() {
    return <h2>I am a {this.props.color} Car!</h2>;
  }
}

createRoot(document.getElementById('root')).render(
  <Car color="green"/>
);