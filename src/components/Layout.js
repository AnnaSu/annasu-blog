import React from 'react';
import Helmet from 'react-helmet';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import useSiteMetadata from './SiteMetadata';
import Header from './Header';
import { highlight } from './highlight';
import COLOR from '../constants/colors.js';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * {
    box-sizing: border-box;
  }
  html, body {
    background-color: ${COLOR.DEFAULT_BG};
  }
  ${highlight()}
`;

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="/img/favicon.ico"
          sizes="32x32"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.png" />
      </Helmet>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default TemplateWrapper;
