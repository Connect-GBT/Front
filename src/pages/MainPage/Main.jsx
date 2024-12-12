import React from 'react';
import styled from 'styled-components';
import Handshake from '../../images/handshake_1.png'
import BatchAssign from '../../images/Batch Assign.png'
import BookMark from '../../images/Bookmark.png'
import ConnectedPeople from '../../images/Connected People.png'
import Robot from '../../images/Robot.svg'
import Event from '../../images/Important Event.png'
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineBell } from "react-icons/ai";
import ContentCard from '../../components/ContentCard';
import SmallCard from '../../components/SmallCard';
import { Container, Contents } from '../../components/Layout';
import Navbar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';


const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
`

const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

const LogoIcon = styled.div`
  width: 44px;  
  height: 44px;  
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;  
  }
`
const LogoText = styled.div`
  display: flex;
  width: 82px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  color: #3B7D79;
  font-family: NanumSquareRound;
  font-size: 24px;
  font-weight: 800;
`
const SubContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const SubText = styled.div`
  display: flex;
  height: 27px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #3B7D79;
  color: #FFF;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 700;  
  padding: 4px 8px;
  cursor: pointer;
`
const AlarmIcon = styled.div`
  display: inline-flex;
  padding: 2px 5px;
  align-items: center;
  svg{
    width: 24px;
    height: 32px;
  }
`

const WelcomeContainer = styled.div`
  width: 320px;
  height: 100px;
  border-radius: 10px;
  border: 3px solid #3B7D79;
  background: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`

const UserIcon = styled.div`
  padding-left: 15px;
  svg{
    width: 70px;
    height: 70px;
  }
`
const WelcomeText = styled.div`
  width: 228px;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 20px;
  font-weight: 700;
`

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


function Main() {
  const navigate = useNavigate();

  const contentCards = [
    {
      image: ConnectedPeople,
      subTitle: "당장 사회에 나가기 어렵다면",
      title: "적응 훈련 하러가기",
      path:'/adaptmain'
    },
    {
      image: BatchAssign,
      subTitle: "사회에 나갈 준비가 되셨다면",
      title: "참여 훈련 하러가기",
      path: '/partmain'
    },
    {
      image: Robot,
      subTitle: "털어놓을 곳이 필요하다면",
      title: "챗봇 상담 이용하기",
      path: '/chatbot'
    }
  ];

  const smallCards = [
    {
      image: BookMark,
      title: "커리큘럼 소개",
      path: '/curriculum'
    },
    {
      image: Event,
      title: "주간 챌린지",
      path: '/challenge'
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
};
  return(
    <Container>
      <Header>
        <LogoContainer>
          <LogoIcon><img src={Handshake} alt='handshake'/></LogoIcon>
          <LogoText>커넥트</LogoText>
        </LogoContainer>
        <SubContainer>
          <SubText onClick={() => navigate('/subscribe')}>구독하기</SubText>
          <AlarmIcon><AiOutlineBell/></AlarmIcon>
        </SubContainer>
      </Header>
      <Contents>
      <WelcomeContainer>
          <UserIcon><BiUserCircle/></UserIcon>
          <WelcomeText>
            반갑습니다 [닉네임]님! <br/>
            브릿지와 함께한지<br/>
            ~일째 입니다!
          </WelcomeText>
        </WelcomeContainer>
        {contentCards.map((card, index) => (
          <ContentCard
            key={index}
            image={card.image}
            subTitle={card.subTitle}
            title={card.title}
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

export default Main;