import React, { Component } from 'react';
import styled from 'styled-components';

const Footer = styled.div`
    height: 60px;
`;

class FooterDefault extends Component {
    render() {
        return (
            <Footer>{this.props.title}</Footer>
        )
    }
}

export default FooterDefault;