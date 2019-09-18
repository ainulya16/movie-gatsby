/* eslint-disable react/prop-types */
import React from 'react';
import { arrayOf, object } from 'prop-types';
import styled from 'styled-components';
import uniqid from 'uniqid';


const Nav = styled.div`
  height: inherit;
  width: 100%;
  position: relative;
  padding: 0 48px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    > li {
      margin: 0 5px;
    }
  }
  @media (max-width: 992px) {
    /* padding: 20px; */
  }
  @media (max-width: 768px) {
    /* padding: 0; */
  }
`;

const ItemLink = ({ name, link }) => {
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  )
}
const Navbar = ({ menuLinks }) => {
  return (
    <Nav>
      <h1>NETFELIX</h1>
      <ul>
        {menuLinks.map(item=> <ItemLink key={uniqid()} {...item} />)}
      </ul>
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
