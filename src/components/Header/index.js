import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd/lib';
// import MenuComponent from '../Menu';

const { Header, Sider } = Layout;

const Logo = styled.div`
  justify-content: center;
  width: 30px;
  height: 30px;
  background-image: url('../../static/img/aiawhite-logo.png'); /* The image used */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  margin: 16px 70px 16px 0;
  float: left;
  @media (max-width: 992px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

Header.displayName = 'Header';

// const Mobile = styled.span`
//   color: #fff;
//   display: none;
//   margin: auto;
//   @media (max-width: 992px) {
//     display: block;
//   }
// `;

class NavHeader extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };
  }

  // handleToggle = () => {
  //   this.setState(state => ({
  //     collapsed: !state.collapsed,
  //   }));
  // };

  render() {
    const { collapsed } = this.state;
    return (
      <>
        <Sider
          trigger={null}
          collapsible
          collapsedWidth="0"
          collapsed={collapsed}
          style={{
            overflow: 'auto',
            height: 'auto',
            left: 0,
          }}
        >
          {/* <MenuComponent mode="inline" /> */}
        </Sider>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            marginLeft: collapsed ? 0 : '200px',
            transition: '.2s',
          }}
        >
          <Logo />
          {/* <Mobile id="toggle-bar" onClick={this.handleToggle}>
            <Icon type="bars" />
          </Mobile> */}
          {/* <MenuComponent mode="horizontal" /> */}
        </Header>
      </>
    );
  }
}

export default NavHeader;
