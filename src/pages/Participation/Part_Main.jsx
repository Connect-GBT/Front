import React from "react";
import ContentCard from "../../components/ContentCard";
import styled from "styled-components";
import Resume from "../../images/Profile.png"
import Consultation from "../../images/Consultation.png"
import Neighbour from "../../images/Neighbour.png"
import Read from "../../images/Read.png"
import { Container, Contents } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";

const WelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    font-family: NanumSquareRound;
    padding-top: 30px;
    padding-bottom: 10px;
`;

function PartMain(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/main');
    };

    const cardContents = [
        {
            title: "이력서 등록하기",
            subTitle: "나의 이력서",
            icon: Resume,
            path: "/resume" 
          },
          {
            title: "AI 취업 컨설팅받기",
            subTitle: "취업에 대한 도움을 받고 싶다면",
            icon: Consultation,
            path: "/aiconsulting"
          },
          {
            title: "관련 외부 기관 보기",
            subTitle: "대면으로도 도움을 받고 싶다면",
            icon: Neighbour,
            path: "/organization"
          },
          {
            title: "일간 뉴스레터 읽기",
            subTitle: "세상을 보는 눈을 넓히고 싶다면",
            icon: Read,
            path: "/newsletter"
          }
    ];

    const handleCardClick = (path) => {
        navigate(path);
    };

    return(
        <Container>
            <Header title="사회 참여 훈련" onBackClick={handleBackClick}/>
            <Contents>
                <WelcomeText>
                    반갑습니다 [닉네임]님<br/>
                    사회 참여 훈련에 오신 것을 <br/>
                    환영합니다.
                </WelcomeText>
                {cardContents.map((card, index) => (
                    <ContentCard
                        key={index}
                        image={card.icon}
                        title={card.title}
                        subTitle={card.subTitle}
                        onClick={() => handleCardClick(card.path)}
                    />
                ))}
            </Contents>
            <Navbar/>
        </Container>
    );
}

export default PartMain;

