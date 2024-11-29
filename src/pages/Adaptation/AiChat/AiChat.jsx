import React from "react";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import Navbar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom"
import { Description, InfoBox,StartBtn } from "../../../components/Description";


function AiChat(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/adaptmain');
    };

    return(
        <Container>
        <Header title="AI 역할극 채팅" onBackClick={handleBackClick}/>
        <Contents>
            <Description subtitle="현재 코스는" title="AI 역할극 채팅" />
            <InfoBox>
                대화 상대가 누구인지,
                어떤 위치인지 등<br/>
                다양한 상황과 배경에 따라 <br/>
                나의 역할은 다양해집니다. <br/><br/>
                AI 역할극 채팅은 제공된 <br/>
                특정 상황과 역할에 따라 <br/>
                상대(AI)와 대화를 나누는<br/>
                프로그램입니다.<br/><br/>
                여러 역할들을 수행하며 각 상황에<br/>
                맞는 대처 능력을 높이고,<br/>
                채팅을 통해 소통 능력을<br/>
                높일 수 있습니다.<br/><br/>
                시작하기 버튼을 눌러 <br/>
                AI 채팅방에 입장하세요!
            </InfoBox>
            <StartBtn onClick={() => navigate('/aichat/role')}>시작하기</StartBtn>
        </Contents>
        <Navbar/>
    </Container>
    )
}
export default AiChat;