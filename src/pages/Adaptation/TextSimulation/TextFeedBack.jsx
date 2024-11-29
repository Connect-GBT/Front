import React from "react";
import styled from "styled-components";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import { BiSolidCheckCircle } from "react-icons/bi";


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
    width: 350px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 2px solid #3B7D79;
    background: #FFF;
    margin-top: 15px;
`
const Wrong = styled.div`
    font-family: NanumSquareRound;
    font-size: 20px;
    font-weight: 700;
    padding-top: 15px;
`
const Description = styled.div`
    width: 300px;
    height: 60px;
    border: 3px solid #3B7D79;
    background: #FFF;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`
const Question = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 700;
    margin-top: 10px;
`
const AnswerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 20px;
`
const Answer = styled.div`
    width: 300px;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 3px solid #3B7D79;
    background: #FFF;
    color: #000;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: NanumSquareRound;
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
    transition: all 0.3s ease;
    svg{
        color: #3B7D79;
        
    }

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
function TextFeedBack(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    return(
        <Container>
            <Header title="텍스트 시뮬레이션" onBackClick={handleBackClick}/>
            <Contents>
                <Title>텍스트 시뮬레이션 해설지 </Title>
                <Score>점수</Score>
                <FeedBackContainer>
                    <Wrong>틀린 문항</Wrong>
                    <Description>
                        당신의 회사 동료가 아침 안부인사를<br/>
                        건넵니다. "좋은 아침입니다."
                    </Description>
                    <Question>
                        Q1. 위 상황에서 적절한 대답<br/>
                        혹은 행동은 어떤 것일까요?
                    </Question>
                    <AnswerContainer>
                        <Answer>1. 좋은 오후입니다.</Answer>
                        <Answer>2. 썩 좋은 것 같지는 않아요.</Answer>
                        <Answer>3. 좋은 아침입니다.<BiSolidCheckCircle/></Answer>
                        <Answer>4. 아침부터 너무 힘들어요 </Answer>
                    </AnswerContainer>
                </FeedBackContainer>
                <HomeBtn onClick={()=> navigate('/adaptmain')}>홈으로 이동</HomeBtn>
            </Contents>
            <Navbar/>

        </Container>
    )
}
export default TextFeedBack;