import App, { Container } from 'next/app';
import React from 'react';
import Layout from '../components/templates/Layout';
import '../static/styles/vendor/index.css';
import GlobalStyle from '../styles'; // eslint-disable-line no-unused-vars

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Layout>
          <GlobalStyle />
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
