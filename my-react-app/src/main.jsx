import { createRoot } from 'react-dom/client'
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <h1>This is the content of the Header component</h1>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <Header />
);
       