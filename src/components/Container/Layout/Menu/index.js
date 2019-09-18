import React from 'react';
// import Router from 'next/router';
import { string } from 'prop-types';
import { Menu, Icon } from 'antd';

function MenuComponent({ mode }) {
  return (
    <Menu
      defaultSelectedKeys={['/']}
      // selectedKeys={[Router.router ? Router.router.asPath : '/']}
      mode={mode}
      theme="dark"
      id={mode === 'horizontal' ? 'desktop-nav' : 'mobile-nav'}
    >
      <Menu.Item id="home" key="/">
        <Icon type="home" />
        {'Home'}
      </Menu.Item>
      <Menu.Item
        id="product-detail"
        key="/product-detail"
        // onClick={() => Router.push('/product-detail')} // use this for a while, still find the best practice to change the route
      >
        {'Product Detail'}
      </Menu.Item>
      <Menu.Item
        id="product-step"
        key="/product-step"
        // onClick={() => Router.push('/product-step')} // use this for a while, still find the best practice to change the route
      >
        {'Product Step'}
      </Menu.Item>
      <Menu.Item id="about" key="/about">
        <a href="/" rel="noopener noreferrer">
          {'About Us'}
        </a>
      </Menu.Item>
    </Menu>
  );
}

MenuComponent.propTypes = {
  mode: string.isRequired,
};

export default MenuComponent;
