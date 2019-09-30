import React from 'react';
import { arrayOf, object } from 'prop-types';
import Slider from 'react-slick';
import uniqid from 'uniqid';
import styled from 'styled-components';
// import { BackgroundImage } from '../../../components/Image';

const BackgroundImage = styled.div`
  background-image: url(${props => props.url});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 400px;
`;
const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slideToShow: 1,
  slideToScroll: 1,
}

const Item = ({backdrop_path, original_name}) => {
  const url = 'https://image.tmdb.org/t/p/original/' + backdrop_path;
  return (
    <BackgroundImage url={url}>
      <p>{original_name}</p>
    </BackgroundImage>
  )
}
const Carousel = ({ data }) => {
  return (
    <Slider {...settings}>
      {data.map(item=> <Item key={uniqid()} {...item} />)}
    </Slider>
  )
}

Carousel.propTypes = {
  data: arrayOf(object).isRequired,
};

export default Carousel;
