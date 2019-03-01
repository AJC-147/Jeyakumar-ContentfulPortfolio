import React, { Fragment } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  }

body {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  font-family: Cabin;
  overflow-x: hidden;
}
`;

const LayoutMate = ({ children }) => (
  <Fragment>
    <GlobalStyle />
        {children}
  </Fragment>
);

LayoutMate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutMate;
