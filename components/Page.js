import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import Meta from "../components/Meta";
import Header from "../components/Header";

const theme = {
    offWhite: "#e5e3e3",
    black: "#393939",
    green: "#B2C9AB",
    teal: "#92B6B1",
    blue: "#788AA3",
    purple: "#666A86",
    maxWidth: "550px",
    bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
    background: ${props => props.theme.offWhite}
    color: ${props => props.theme.black};
    height: 100vh;
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Inner>{this.props.children}</Inner>
                </StyledPage>
            </ThemeProvider>
        );
    }
}

export default Page;
