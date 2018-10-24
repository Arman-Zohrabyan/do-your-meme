import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class Menu extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand tag={Link} to="/">Do Your Meme</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/vkontakte">ВКонтакте</NavLink>
              </NavItem>
              {/*<NavItem>
                <NavLink href="https://github.com/arman-zohrabyan">GitHub</NavLink>
              </NavItem>*/}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Menu;
