import React, { useState } from "react";
import styled from "styled-components";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import Situation from "../../../images/Is he like trying to flirt with me_.png"
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

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
    height: 60px;
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
`
const Answer = styled.div`
    width: 300px;
    height: 35px;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 3px solid #3B7D79;
    background: ${props => props.selected ? '#3B7D79' : '#FFF'};
    color: ${props => props.selected ? '#FFF' : '#000'};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    font-family: NanumSquareRound;
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${props => props.selected ? '#3B7D79' : '#f0f0f0'};
    }
`
const BtnContainer = styled.div`
    display: flex;
    width: 107px;
    height: 29px;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    svg{
        width: 25px;
        height: 25px;
        cursor: pointer;
    }
`

function TextMain(){
    const navigate = useNavigate();
    const [selectedAnswer, setSelectedAnswer] = useState(null);

    const handleBackClick = () => {
        navigate(-1);
    };

    const handleAnswerClick = (index) => {
        setSelectedAnswer(index);
    };

    const answers = [
        "1. 좋은 오후입니다.",
        "2. 썩 좋은 것 같지는 않아요.",
        "3. 좋은 아침입니다.",
        "4. 아침부터 너무 힘들어요."
    ];

    return(
        <Container>
            <Header title="텍스트 시뮬레이션" onBackClick={handleBackClick}/>
            <Contents>
                <Title>[상황 설명]</Title>
                <Image><img src={Situation} alt="Situation"/></Image>
                <Description>
                    당신의 회사 동료가 말을 건넵니다.  <br/>
                    "좋은 아침입니다."
                </Description>
                <Question>
                    Q1. 위 상황에서 적절한 대답 <br/>
                    혹은 행동은 어떤 것인가요?
                </Question>
                <AnswerContainer>
                    {answers.map((answer, index) => (
                        <Answer 
                            key={index}
                            selected={selectedAnswer === index}
                            onClick={() => handleAnswerClick(index)}
                        >
                            {answer}
                        </Answer>
                    ))}
                </AnswerContainer>
                <BtnContainer>
                    <BsArrowLeftCircle/>
                    <BsArrowRightCircle onClick={() => navigate('/textsimulation/textloading')}/>
                </BtnContainer>
            </Contents>
            <Navbar/>
        </Container>
    )
}

export default TextMain;