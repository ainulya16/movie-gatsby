import React from 'react';
import { arrayOf, object } from 'prop-types';
import styled from 'styled-components';
import { Icon } from '@aia-digital/ui-library';
import { Image } from '../../Image';

const Nav = styled.nav`
  & {
    height: 88px;
    width: 100%;
    position: sticky;
    top: 0;
    background-color: #d31045;
    z-index: 999;
    padding: 0 48px;
    @media (max-width: 992px) {
      height: 80px;
      padding: 0;
    }
    @media (max-width: 768px) {
      height: 60px;
      padding: 0;
    }
  }
`;
const MobileMenu = styled.div`
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  a {
    width: 44px;
  }
  svg {
    margin: 0 20px;
  }
  @media (min-width: 993px) {
    display: none;
  }
`;
const Menu = styled.div`
  & {
    height: 88px;
    float: ${({ position }) => position || 'left'};
    @media (max-width: 992px) {
      display: none;
    }
  }
  ul {
    display: flex;
    flex-direction: row;
    margin-bottom: 0;
    list-style: none;
    align-items: center;
  }
  ul li a {
    padding: 24px;
    display: table-cell;
    height: 88px;
    vertical-align: bottom;
    width: 100px;
    font-size: 20px;
    line-height: 20px;
    font-family: 'AIATitle';
    text-transform: uppercase;
    color: #fff;
  }
`;
const Logo = styled(Image)`
  & {
    width: 44px;
    height: 44px;
    margin-right: 10vw;
    @media (max-width: 992px) {
      margin: 0%;
    }
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }
  }
`;
const IconContainer = styled.div`
  height: 88px;
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    margin: 0 10px;
  }
`;
const Navbar = ({ menuLinks }) => {
  return (
    <Nav>
      <MobileMenu>
        <Icon name="menu-nav" size="xs" />
        <a href="http://aia.com.sg" target="_blank" rel="noopener noreferrer">
          <Logo filename="aia-logo-white.png" />
        </a>
        <Icon name="contact-nav" size="xs" />
      </MobileMenu>

      <Menu>
        <ul>
          <a href="http://aia.com.sg" target="_blank" rel="noopener noreferrer">
            <Logo filename="aia-logo-white.png" />
          </a>
          {menuLinks.map((item, index) => (
            <li key={index.toString()}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
      </Menu>
      <Menu position="right">
        <IconContainer>
          <a href="aia.com.sg">
            <Icon name="search-nav" size="xs" />
          </a>
          <a href="aia.com.sg">
            <Icon name="contact-nav" size="xs" />
          </a>
        </IconContainer>
      </Menu>
    </Nav>
  );
};

Navbar.propTypes = {
  menuLinks: arrayOf(object),
};
Navbar.defaultProps = {
  menuLinks: {},
};

export default Navbar;
