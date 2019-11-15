// @flow
import { ThemeProvider } from 'styled-components';
import React from 'react';
import Head from 'next/head';
import dynamic from "next/dynamic";
// import HeadTag from '../../atoms/HeadTag';
import Theme from '../../../styles/theme';
import Header from '../../organisms/Header';
// import Footer from '../../organisms/Footer';
// import config from '../../../config';

// mocks
import headerFooter from '../../../mock/header-footer.json';

const Footer = dynamic(() => import( '../../organisms/Footer' ), {
      loading: () => <div>loading</div>
})
  
const Layout = ({ children, className }) => {
return(
  <ThemeProvider theme={Theme}>
    <>
     <Head>
        <meta
          name="viewport"
          content="user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, width=device-width, shrink-to-fit=no"
        />
        {/* {meta && <HeadTag metaData={meta} title={title} />} */}
      </Head>
      <Header pageData={headerFooter} />
      <main className={`${className || ''}`}>
        {children}
      </main>
      <Footer pageData={headerFooter} />
    </>
  </ThemeProvider>
)};

// Layout.defaultProps = {};

export default Layout;
