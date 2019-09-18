import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-styled-components';

configure({ adapter: new Adapter() });

// eslint-disable-next-line func-names
window.matchMedia = window.matchMedia || function () {
  return {
     matches: false,
     addListener() {},
     removeListener() {},
  };
};