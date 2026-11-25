import { createRoot } from 'react-dom/client'
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "blue"};
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "green"})
    }, 1000)
  }
  render() {
    return (
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);