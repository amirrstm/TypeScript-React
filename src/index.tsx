import '@styles/antd.less';
import '@styles/styles.scss';

import GlobalStyles from '@config/ConfigureGlobalStyle';
import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { App } from './app';
import { theme } from './core/configs/ConfigureTheme';

ReactDom.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyles />
  </ThemeProvider>,
  document.getElementById('root'),
);
