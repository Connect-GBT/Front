import React from "react";
import styled from "styled-components";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import Home from"../../../images/Home Page.png";
import MBTI from "../../../images/Bipolar Disorder.png";
import Trip from "../../../images/Traveler.png";
import Food from "../../../images/Food Bar.png";
import Exercise from "../../../images/Strength.png";
import Movie from "../../../images/Movie Projector.png";
import Music from "../../../images/Musical Note.png";
import Star from "../../../images/Popular woman.png"
import Fashion from "../../../images/Tie.png";
import Book from "../../../images/Book.png";
import Money from "../../../images/Money Bag.png";
import Issue from "../../../images/Group.png";


const Title = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 22px;
    font-weight: 700;
    padding-top: 20px;
`
const Description = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 15px;
    font-weight: 400;
    padding-top: 20px;
`
const SubjectContainer = styled.div`
    display: flex;
    flex-direction: column;
`
const SubjectRow = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: 20px;
`
const SubjectBox = styled.div`
    width: 70px;
    height: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 12px;
    font-weight: 700;
    background: #D9D9D9;
    cursor: pointer;
    img{
        width: 30px;
        height: 30px;
        object-fit: contain;
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
    margin-top: 25px;
    cursor: pointer;
`
function Subject(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/conversation');
    };

    return(
        <Container>
            <Header title="매칭을 통한 대화" onBackClick={handleBackClick}/>
            <Contents>
                <Title>
                    대화를 나누고 싶은 주제를<br/>
                    모두 선택해주세요.
                </Title>
                <Description>
                    관심있는 주제를 3가지 이상 선택해주세요!<br/>
                    [닉네임]님의 맞춤형 매칭을 진행합니다.
                </Description>
                <SubjectContainer>
                    <SubjectRow>
                        <SubjectBox><img src={Home} alt="home" />일상</SubjectBox>
                        <SubjectBox><img src={MBTI} alt="mbti" />MBTI</SubjectBox>
                        <SubjectBox><img src={Trip} alt="trip" />여행</SubjectBox>
                    </SubjectRow>
                    <SubjectRow>
                        <SubjectBox><img src={Food} alt="food" />음식</SubjectBox>
                        <SubjectBox><img src={Exercise} alt="exercise" />운동</SubjectBox>
                        <SubjectBox><img src={Movie} alt="영화" />영화, 드라마</SubjectBox>
                    </SubjectRow>
                    <SubjectRow>
                        <SubjectBox><img src={Music} alt="music" />음악</SubjectBox>
                        <SubjectBox><img src={Star} alt="star" />연예인</SubjectBox>
                        <SubjectBox><img src={Fashion} alt="fashion" />패션</SubjectBox>
                    </SubjectRow>
                    <SubjectRow>
                        <SubjectBox><img src={Book} alt="book" />책</SubjectBox>
                        <SubjectBox><img src={Money} alt="money" />경제</SubjectBox>
                        <SubjectBox><img src={Issue} alt="issue" />사회, 이슈</SubjectBox>
                    </SubjectRow>
                </SubjectContainer>
                <HomeBtn>계속하기</HomeBtn>
            </Contents>
            <Navbar/>
        </Container>
    )
}

export default Subject;