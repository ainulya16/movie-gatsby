/* eslint-disable react/prop-types */
import React from 'react';
import Layout from '../components/Layout';

const title = "Movie";

const Home = props => {
  return (
    <Layout title={title}>
      <div>
        <p>Banner</p>
      </div>
    </Layout>
  );
};

export default Home;
