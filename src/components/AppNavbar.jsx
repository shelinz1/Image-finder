import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  Navbar,
  Nav,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Container,
  NavItem,
} from 'reactstrap'

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar
        dark
        expand="sm"
        className="navbar navbar-dark bg-dark container mb-3"
      >
        <Container>
          <NavbarBrand href="/" className="navbar-brand mb-0 text-warning">
            Shedmage
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="navs ml-auto" navbar>
              <NavItem>
                <NavLink to="/" style={linkStyle} className="navHover">
                  Home{' '}
                </NavLink>{' '}
              </NavItem>
              <NavItem>
                <Link to="/about" style={linkStyle} className="navHover">
                  About{' '}
                </Link>{' '}
              </NavItem>
              <NavItem>
                <Link to="/contact" style={linkStyle} className="navHover">
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  borderRadius: '2px',
  padding: '4px',
  margin: '4px',
  fontWeight: 'bold',
}

export default AppNavbar
