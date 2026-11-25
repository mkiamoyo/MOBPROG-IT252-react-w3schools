import { createRoot } from 'react-dom/client'
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "blue"};
  }
  changeColor = () => {
    this.setState({favoritecolor: "green"});
  }
  render() {
    return (
      <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button type="button" onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);