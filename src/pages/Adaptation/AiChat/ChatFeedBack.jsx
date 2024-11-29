import React from "react";
import styled from "styled-components";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";

const Title = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    margin-bottom: 10px;
`

const Score = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #3B7D79;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #3B7D79;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 25px;
    font-weight: 700;
`

const FeedBackContainer = styled.div`
    width: 300px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-radius: 10px;
    border: 2px solid #3B7D79;
    background: #FFF;
    margin-top: 15px;
    padding-left: 10px;
`

const Bold = styled.div`
    font-family: NanumSquareRound;
    font-size: 20px;
    font-weight: 700;
    padding-top: 15px;
`
const Description = styled.div`
    font-family: NanumSquareRound;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6; 
    padding-top: 10px;
    padding-bottom: 10px;
`
const Explain =styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.2;
    padding-top: 20px;
`

const HomeBtn = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #3B7D79;    
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    color: #FFF;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 20px;
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
`
function AiChatFeedBack(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }
    return(
        <Container>
            <Header title="AI 역할극 채팅" onBackClick={handleBackClick}/>
            <Contents>
                <Title>[AI 역할극 채팅 피드백] </Title>
                <Score>점수</Score>
                <FeedBackContainer>
                    <Bold>이 부분에서는 잘하셨습니다!</Bold>
                    <Description>
                        - 대화를 적극적으로 잘 이끌어 나갔어요.<br/>
                        - 적절한 표현을 사용했어요.<br/>
                        - 긍정적인 자세로 대화했어요.
                    </Description>
                </FeedBackContainer>
                <FeedBackContainer>
                    <Bold>이 부분에서는 보완이 필요해요!</Bold>
                    <Description>
                        - 보완이 필요한 부분이 없어요.
                    </Description>
                </FeedBackContainer>
                <Explain>
                    일정 점수에 미치지 못할 경우,<br/>
                    'AI 역할극 채팅'을 재진행해야<br/>
                    하니 유의해주세요!
                </Explain>
                <HomeBtn onClick={()=> navigate('/adaptmain')}>홈으로 이동</HomeBtn>
            </Contents>
            <Navbar/>
        </Container>
    )
}
export default AiChatFeedBack;