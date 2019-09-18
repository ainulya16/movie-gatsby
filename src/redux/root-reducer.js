import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form/immutable';
// import home from './Home/reducer';
// import product from './product/reducer';
// import customer from './Customer/reducer';
// import payment from './payment/reducer';
// import domain from './Domain/reducer';

const rootReducer = {
  form: formReducer,
  // home,
  // product,
  // customer,
  // payment,
  // domain,
};

export default combineReducers(rootReducer);
