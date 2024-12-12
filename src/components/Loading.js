import React from "react";
import styled from "styled-components";
import Handshake from "../images/handshake_1.png"

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Content = styled.div`
    width: 100%;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`

const Title = styled.div`
    text-align: center;
    font-family: 'NanumSquareRound';
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
`

const Image = styled.div`
    width: 150px;
    height: 150px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const SmallTitle = styled.div`
    text-align: center;
    font-family: 'NanumSquareRound';
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
`

export const Loading = ({title, smalltitle}) => {
    return(
        <Content>
            <Title dangerouslySetInnerHTML={{__html: title}} />
            <Image><img src={Handshake} alt="handshake"/></Image>
            <SmallTitle dangerouslySetInnerHTML={{__html: smalltitle}} />
        </Content>
    )
}