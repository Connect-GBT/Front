import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/Layout';
import { Header } from '../../components/Header';
import Navbar from '../../components/NavBar';
import { useNavigate } from 'react-router-dom';

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  gap: 20px;
`
const ContentsBox = styled.div`
    width: 100%;
    max-width: 300px;
    height: 310px;
    border-radius: 10px;
    background: #CEDEDD;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
const ContentTitle = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
`
const ScrollContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  gap: 15px;
  padding: 10px 0 20px 0;
  justify-content: flex-start;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
  
`
const SmallBox = styled.div`
    min-width: 250px;
    height: 230px;
    border-radius: 10px;
    border: 3px solid #3B7D79;
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    flex-shrink: 0;
    margin-left: 22px;
`
const SmallTitle = styled.div`
    height: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 700;
`
const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 15px;
    font-weight: 400;
`
function Curriculum(){

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/main');
    };

    return(
        <Container>
           <Header title="커리큘럼 소개" onBackClick={handleBackClick}/>
            <Contents>
                <ContentsBox>
                    <ContentTitle>[사회 적응 훈련]</ContentTitle>
                    <ScrollContainer>
                        <SmallBox>
                            <SmallTitle>1. 텍스트 시뮬레이션</SmallTitle>
                            <Description>
                                특정 상황에 대한 그림과 설명이<br/>
                                주어지면, 각 상황에서 적절한<br/>
                                대답과 행동을 답안으로 선택합니다.<br/><br/>

                                사회에 나왔을 때 빈번하게<br/>
                                마주할 상황들에 익숙해지며<br/>
                                사회 인지 능력을 높일 수 있습니다.<br/>
                            </Description>
                        </SmallBox>
                        <SmallBox>
                            <SmallTitle>2. AI 역할극 채팅</SmallTitle>
                            <Description>
                                특정 상황이 주어지고, 나와<br/>
                                상대(AI)의 역할이 정해집니다.<br/><br/>
                                
                                여러 역할을 수행하며 각 상황에<br/>
                                맞는 대처 능력을 높이고,<br/>
                                채팅을 통해 소통 능력을<br/>
                                향상시키는 훈련입니다.<br/>
                            </Description>
                        </SmallBox>
                        <SmallBox>
                            <SmallTitle>3. 매칭을 통한 대화</SmallTitle>
                            <Description>
                                이야기를 나누고 싶은<br/>
                                주제를 3가지 이상 선택 후<br/>
                                실제 사람과 매칭을 진행,<br/>
                                채팅으로 대화를 나눕니다.<br/><br/>

                                이전 단계들과 달리<br/>
                                실제로 대화를 나눠보며,<br/>
                                사회에 참여할 수 있는<br/>
                                자신감을 얻는 단계입니다.<br/>
                            </Description>
                        </SmallBox>
                    </ScrollContainer>
                </ContentsBox>
                <ContentsBox>
                    <ContentTitle>[사회 참여 훈련]</ContentTitle>
                    <ScrollContainer>
                        <SmallBox>
                            <SmallTitle>1. 이력서 등록 및 <br/>자기소개서 첨삭</SmallTitle>
                                <Description>
                                    커넥트에 이력서를 등록한 후 <br/>
                                    본인의 자기소개서를 입력하면,<br/>
                                    AI가 자기소개서를 첨삭해줍니다.<br/><br/>

                                    등록한 이력서를 토대로 희망 산업<br/>
                                    및 직무에 맞게, 자기소개서에 넣을 <br/>
                                    소재들을 추출하고, <br/>
                                    내용을 강화하는 훈련입니다.<br/>
                                </Description>
                        </SmallBox>
                        <SmallBox>
                            <SmallTitle>2. 외부 기관 연계</SmallTitle>
                                <Description>
                                    취업 외에도 청년들의 사회<br/>
                                    참여 독려를 위해 외부 기관을<br/>
                                    연결해줍니다.<br/><br/>
                                    상담, 심리, 취미 활동 등<br/>
                                    다양한 분야의 프로그램들을<br/>
                                    소개하여 사회 적응에서 나아가<br/>
                                    관심있는 사회 활동에 직접<br/>
                                    참여해볼 수 있는 기회입니다.<br/>
                                </Description>
                        </SmallBox>
                        <SmallBox>
                            <SmallTitle>3. 일간 뉴스레터 읽기</SmallTitle>
                                <Description>
                                    매일 다양한 산업의 주제로 <br/>
                                    인터뷰, 가이드, 트렌드, <br/>
                                    리서치 요약 등의 내용을 담은 <br/>
                                    뉴스레터를 제공합니다.<br/><br/>
                                    이는 청년들의 시야를 넓혀주고<br/>
                                    인사이트를 확보하여, <br/>
                                    스스로 적성 및 관심사를 <br/>
                                    발견할 수 있도록 도와줍니다.
                                </Description>
                        </SmallBox>
                    </ScrollContainer>
                </ContentsBox>
            </Contents>
            <Navbar/>
        </Container>
    )
}

export default Curriculum;




