import React from "react";
import styled from "styled-components";
import { Container, Contents } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";

const Title = styled.div`
    width: 100%;
    display: flex;
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 700;
    padding-left: 100px;
    padding-top: 20px;
    padding-bottom: 15px;
`
const SubScribeContainer = styled.div`
    width: 300px;
    height: auto;
    background: white;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 15px;
    padding-bottom: 15px;
    gap: 10px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`
const SubscribeTitle = styled.div`
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 500;
    padding-top: 15px;
`
const SubscribeContents = styled.div`
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 700;
`
function SubscribeCheck(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/mypage');
    }

    return(
        <Container>
            <Header title="구독 정보 확인" onBackClick={handleBackClick}/>
            <Contents>
                <Title>내 구독 정보</Title>
                <SubScribeContainer>
                    <SubscribeTitle>구독 시작일</SubscribeTitle>
                    <SubscribeContents>2024-12-01 00:00:00</SubscribeContents>
                    <SubscribeTitle>구독 종료일</SubscribeTitle>
                    <SubscribeContents>2024-12-31 23:59:59</SubscribeContents>
                    <SubscribeTitle>구독 플랜</SubscribeTitle>
                    <SubscribeContents>사회 적응 훈련</SubscribeContents>
                    <SubscribeTitle>결제 수단</SubscribeTitle>
                    <SubscribeContents>신용카드</SubscribeContents>
                </SubScribeContainer>
            </Contents>
            <Navbar/>
        </Container>
    )
}

export default SubscribeCheck;