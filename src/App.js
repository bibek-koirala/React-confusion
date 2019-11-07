import React,{ Component } from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/menu-component';
import { Dishes } from './Shared/dishes'

class App extends Component {
  constructor(props){
    super(props);

    this.state={
      dishes:Dishes
    };
  }
  render(){
  return (
    <div>
      <Navbar dark color="primary">
      <div className="container">
        <NavbarBrand href="/">So much confusion</NavbarBrand>
      </div>
      </Navbar>
      <Menu dishes={this.state.dishes} />
    </div>
  );}
}

export default App;
