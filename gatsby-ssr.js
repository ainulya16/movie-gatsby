import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { ServerStyleSheet, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import configureStore from './src/redux/configure-store';
import { theme } from './src/utils/constants';
import GlobalStyle from './src/utils/global-styles';

export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(bodyComponent));

  replaceBodyHTMLString(body);
  setHeadComponents([sheet.getStyleElement()]);
};

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const helmet = Helmet.renderStatic();
  setHtmlAttributes(helmet.htmlAttributes.toComponent());
  setBodyAttributes(helmet.bodyAttributes.toComponent());
  setHeadComponents([
    helmet.title.toComponent(),
    helmet.link.toComponent(),
    helmet.meta.toComponent(),
    helmet.noscript.toComponent(),
    helmet.script.toComponent(),
    helmet.style.toComponent(),
  ]);
};

// const { store, persistor } = configureStore();
export const wrapRootElement = ({ element }) => ( // eslint-disable-line
  // <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          {element}
      </PersistGate>
  // </Provider>
);

export const wrapPageElement = ({ element, props }) => ( // eslint-disable-line
  <ThemeProvider theme={theme}>
      <React.Fragment>
          <GlobalStyle />
          {element}
      </React.Fragment>
  </ThemeProvider>
);
