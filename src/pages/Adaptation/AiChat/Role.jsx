import React from "react";
import styled from "styled-components";
import { Container,Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import Navbar from "../../../components/NavBar";
import { StartBtn } from "../../../components/Description";
import { useNavigate } from "react-router-dom";
import Situation from "../../../images/image 43.png"

const Title = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 700;
    padding-top: 10px;
`
const Image = styled.div`
    width: 300px;
    height: 200px;
    img{
        width:100%;
        height: 100%;
        object-fit: contain;
    }
`
const Description = styled.div`
    width: 300px;
    height: 150px;
    border: 3px solid #3B7D79;
    background: #FFF;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 17px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`

const RoleContainer = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
`
const RoleTitle = styled.div`
    font-family: NanumSquareRound;
    font-size: 20px;
    font-weight: 700;
    padding-top: 10px;
`
const Role = styled.div`
    width: 290px;
    height: 45px;
    border-radius: 10px;
    border: 3px solid #3B7D79;
    background: #FFF;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 16px;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
    margin-top: 10px;
`
function AiChatMain(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    return(
        <Container>
            <Header title="AI 역할극 채팅" onBackClick={handleBackClick}/>
            <Contents>
                <Title>[상황 설명]</Title>
                <Image><img src={Situation} alt="situation"/></Image>
                <Description>
                요즘 날씨가 부쩍 추워졌습니다.<br/>
                그런 사이, 당신의 동료가 새로운<br/>
                스웨터를 입고 왔습니다. <br/><br/>
                때마침 새로운 아우터를 사려고 합니다.<br/>
                상대방과 함께 쇼핑을 가고 싶습니다.
                </Description>
                <RoleContainer>
                    <RoleTitle>[나의 역할]</RoleTitle>
                    <Role>함께 쇼핑하는 것을 권유</Role>
                    <RoleTitle>[상대 역할]</RoleTitle>
                    <Role>스웨터를 사온 동료</Role>
                </RoleContainer>
                <StartBtn onClick={() => navigate('/aichat/main')}>시작하기</StartBtn>
            </Contents>
            <Navbar/>
        </Container>
    )
}
export default AiChatMain;