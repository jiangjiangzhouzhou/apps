import React from "react";
import styled from "styled-components";

const Container = styled.span`
color: rgba(255, 255, 255, 0.7);
`
const Text = ({children}) => {
    return (
        <Container> {children} </Container>
    )
}

export default Text;