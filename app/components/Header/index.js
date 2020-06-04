import styled from 'styled-components';
import React from 'react';
import Menu from './Menu';
import Logo from './Logo';
import logo from './logo.svg';

function Header() {

  const styles = {
    'padding': '20px',
    'display': 'flex',
    'justifyContent': 'flex-start',
    'alignItems': 'center',
    'flexWrap':'wrap'
  }

  const linkStyles = {
    'width': '200px'
  }

  return(
    <header style={styles}>
      <a style={linkStyles} href='/'>
        <Logo className='logo' src={logo} alt='Hello Fredrik - Logo'/>
      </a>
      <Menu />
    </header>
  );
}

export default Header;
