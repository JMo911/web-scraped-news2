import React from 'react';
import { Nav, NavbarBrand, NavLink, Button } from 'reactstrap';

export default class MyNav extends React.Component {
  render() {
    return (
      <div>
        <Nav className='navbar navbar-dark bg-dark'>
            <NavbarBrand href="/">LoL Feed</NavbarBrand>
            <NavLink href="/">Home</NavLink> 
            <NavLink href="#">Saved Articles</NavLink> 
            <Button color="primary">Scrape New Articles</Button>{' '}
            <Button color="primary">Clear Articles</Button>{' '}
        </Nav>
      </div>
    );
  }
}