import React from "react";
import styled from "styled-components";
import { Container,Contents } from "../../components/Layout";
import ContentCard from "../../components/ContentCard";
import Navbar from "../../components/NavBar";
import { Header } from "../../components/Header";
import SmallCard from "../../components/SmallCard";
import { useNavigate } from "react-router-dom";
import Key from "../../images/Key Press.png"
import Bot from "../../images/Bot.png"
import Communication from "../../images/Communication.png"
import BookMark from "../../images/Bookmark.png"
import Event from "../../images/Important Event.png"

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

const SubContents = styled.div`
  width: 320px;
  height: 105px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 21px;
  border: 3px;
  gap: 25px;
`

function AdaptMain(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/main');
    };


    const cardContents = [
        {
            title: "텍스트 시뮬레이션",
            subTitle: "다양한 상황에 익숙해지고 싶다면",
            icon: Key,
            path: "/textsimulation" 
          },
          {
            title: "AI 역할극 채팅",
            subTitle: "역할에 따라 대화하고 싶다면",
            icon: Bot,
            path: "/aichat"
          },
          {
            title: "매칭을 통한 대화",
            subTitle: "실제로 대화를 나누고 싶다면",
            icon: Communication,
            path: "/conversation"
          }
    ];

    const smallCards = [
        {
          image: BookMark,
          title: "커리큘럼 소개",
          path: "/curriculum"
        },
        {
          image: Event,
          title: "주간 챌린지"
        }
      ];

    const handleCardClick = (path) => {
        navigate(path);
    };


    return(
        <Container>
            <Header title="사회 적응 훈련" onBackClick={handleBackClick}/>
            <Contents>
                <WelcomeText>
                    반갑습니다 [닉네임]님<br/>
                    사회 적응 훈련에 오신 것을 <br/>
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
                <SubContents>
                    {smallCards.map((card, index) => (
                        <SmallCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        onClick={() => handleCardClick(card.path)}
                        />
                    ))}
                </SubContents>
            </Contents>
            <Navbar/>
        </Container>
    )
}
export default AdaptMain;