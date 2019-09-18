import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'antd';

import Header from '../../Header';
import Footer from './Footer';
import ContainerWrapper from '../../Wrapper/Container';

class Container extends React.PureComponent {
  render() {
    const { children, custom } = this.props;
    return (
      <Layout>
        <Header />
        <Layout>
          <ContainerWrapper>{children}</ContainerWrapper>
          <Footer custom={custom} />
        </Layout>
      </Layout>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  custom: PropTypes.bool,
};

Container.defaultProps = {
  custom: false,
};

export default Container;
