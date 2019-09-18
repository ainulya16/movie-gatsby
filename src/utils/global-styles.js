import { createGlobalStyle } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'antd/dist/antd.css';
// import '../assets/css/slick.min.css';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'AIAMedium';
  }
  @media (max-width: 575px) {
    .wrap_center .ant-form-item-label {
      text-align: center !important;
    }
  }
`;

export default GlobalStyle;
