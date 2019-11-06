import React from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/menu-component';

function App() {
  return (
    <div>
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">So much confusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;
