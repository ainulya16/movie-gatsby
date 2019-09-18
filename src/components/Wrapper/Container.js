import styled from 'styled-components';

const Container = styled.div`
  @media (max-width: 768px) {
    margin: 5px;
  }
  /* Small devices (tablets, 768px and up) */
  @media (min-width: 768px) and (max-width: 992px) {
    margin: 10px;
  }
  /* Medium devices (desktops, 992px and up) */
  @media (min-width: 992px) and (max-width: 1200px) {
    margin: 44px;
  }
  /* Large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    margin: 64px;
  }

  /* padding: 0 50px; */
  display: block;
  margin: 64px;
  @media (max-width: 768px) {
    margin: 64px 0 0 0;
  }
`;

export default Container;
