import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';

import configureStore from './src/redux/configure-store';
import { theme } from './src/utils/constants';
import GlobalStyle from './src/utils/global-styles';

const { store, persistor } = configureStore();

/* eslint-disable react/prop-types */
export const wrapRootElement = ({ element }) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {element}
        </PersistGate>
    </Provider>
);

export const wrapPageElement = ({ element }) => (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            {element}
        </React.Fragment>
    </ThemeProvider>
);
