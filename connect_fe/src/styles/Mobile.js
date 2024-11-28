import {Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
`;

const Content = styled.div`
    width: 100%;
    max-width: 402px;
    overflow: auto;
    box-shadow: 0px 0px 32px #0000002f;
    background-color: #ffffff;
`;

const Header = styled.div`
    width: 100%;
    max-width: 390px;
    img {
        width: 100%;
        height: auto;
        object-fit: contain; 
    }
`

const Mobile = () => {
    return (
        <>
            <Container>
                <Content>
                    {/* <Header>
                        <img src="/images/header.png" alt="Header" />   
                    </Header> */}
                    <Outlet /> 
                </Content>
            </Container>
        </>
    )
};

export default Mobile;