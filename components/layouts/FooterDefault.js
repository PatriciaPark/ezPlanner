import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Footer = styled.div`
    height: 60;
`;

class FooterDefault extends Component {
    render() {
        return (
            <Footer>{this.props.title}</Footer>
        )
    }
}

FooterDefault.propTypes = {
    title: PropTypes.string
}
export default FooterDefault;