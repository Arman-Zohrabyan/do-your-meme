import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';
import StringHelper from '../helpers/StringHelper';
import Language from '../classes/Language';


class Menu extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  handleExpendCollapse = () => {
    const { isOpen } = this.state;
    if (isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  }

  render() {
    const { pathname } = this.props.location;

    return (
      <Navbar
        color='light'
        light
        expand='md'
        className={`navbar-${StringHelper.onlyEngLetters(pathname)}`}
      >
        <Container>
          <NavbarBrand
            tag={Link}
            to='/'
            onClick={this.handleExpendCollapse}
          >
            Do Your Meme
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink
                  tag={Link}
                  to='/vkontakte'
                  active={pathname === '/vkontakte'}
                  onClick={this.handleExpendCollapse}
                >{Language.take('menu.vk')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  tag={Link}
                  to='/facebook'
                  active={pathname === '/facebook'}
                  onClick={this.handleExpendCollapse}
                >{Language.take('menu.fb')}</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href='https://github.com/arman-zohrabyan'
                  target='_blank'
                >GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default withRouter(Menu);
