/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout';
import Carousel from './components/Carousel';
import { baseUrl, apiKey } from '../../utils/constants';

const title = "Movie";

const Home = props => {
  const [ carousel, setCarousel ] = useState([]);
  useEffect(()=>{
    const request = (params) => {
      axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
      .then(res=>setCarousel(res.data.results));
    }
    request();
  },[])
  return (
    <Layout title={title}>
      <Carousel data={carousel} />
    </Layout>
  );
};

export default Home;
