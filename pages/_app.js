import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import HeaderDefault from '../components/layouts/HeaderDefault';
import FooterDefault from '../components/layouts/FooterDefault';

const styles = {
    layout: {
        display: 'flex',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
    },
    header: {
        height: 60,
    },
    main: {
        flex: 1,
    },
    footer: {
        height: 60,
    },
}

const theme = {
    colors: {
        primary: '#0070f3'
    }
}

export default class RootApp extends App {
    render() {
        const { Component, ...pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Static Website</title>
                </Head>
                <div style={styles.layout}>
                    <header style={styles.header}>Header</header>
                    <HeaderDefault></HeaderDefault>
                    <main style={styles.main}>
                        <ThemeProvider theme={theme}>
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </main>
                    <FooterDefault title='test1'></FooterDefault>
                </div>
            </React.Fragment>
        );
    }
}