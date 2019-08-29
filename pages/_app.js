import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

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

export default class RootApp extends App {
    render() {
        const { Component, ...other } = this.props;
        return (
            <Container>
                <Head>
                    <title>Static Website</title>
                </Head>
                <div style={styles.layout}>
                    <header style={styles.header}>Header</header>
                    <main style={styles.main}>
                        <Component {...other} />
                    </main>
                    <footer style={styles.footer}>Footer</footer>
                </div>
            </Container>
        );
    }
}