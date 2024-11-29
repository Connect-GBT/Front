import React from "react";
import styled from "styled-components";
import { Container, Contents } from "../../components/Layout";
import { Header } from "../../components/Header";
import Navbar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import Handshake from "../../images/handshake_1.png"
import { BsPencilSquare } from "react-icons/bs";
import { MdOutlineNavigateNext } from "react-icons/md";
import { BiUserPin } from "react-icons/bi";
import User from "../../images/Users.png"

const Title = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 25px;
    font-weight: 700;
    padding-top: 20px;
`
const Image = styled.div`
    width: 140px;
    height: 140px;
    margin-top: 15px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`
const HashTag = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 23px;
    font-weight: 800;
    margin-top: 10px;
`
const Description = styled.div`
    width: 270px;
    height: 140px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 3px solid #3B7D79;
    background: #FFF;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    margin-top: 10px;
`
const Date = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 700;
    padding-top: 20px;
`

const ContentBox = styled.div`
    width: 270px;
    height: 45px;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative; 
    border-radius: 10px;
    border: 3px solid #3B7D79;
    background: #FFF;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
    margin-top: 15px;
    cursor: pointer;

    svg:first-of-type { 
        width: 25px;
        height: 25px;
        margin-left: 15px;
    }
    img{
        width: 25px;
        height: 25px;
        margin-left: 15px;
    }
`
const ContentTitle = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 700;
    padding-left: 20px;
`
const NextIcon = styled(MdOutlineNavigateNext)`
    width: 25px;
    height: 25px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
`

function Challenge(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/main');
    };

    return(
        <Container>
            <Header title="주간 인증 챌린지" onBackClick={handleBackClick}/>
            <Contents>
                <Title>11월의 챌린지</Title>
                <Image><img src={Handshake} alt="handshake"/></Image>
                <HashTag># 요리 도전!</HashTag>
                <Description>
                    당신의 일상을 다채롭게 만들<br/>
                    주간인증 챌린지,<br/>
                    꾸준한 기록으로 경험도 쌓고,<br/>
                    다른 사람의 일상도<br/>
                    구경해보세요!
                </Description>
                <Date>11월 4주차 진행중</Date>
                <ContentBox onClick={() => navigate('/challengewrite')}>
                    <BsPencilSquare/>
                    <ContentTitle>주간 인증 쓰기</ContentTitle>
                    <NextIcon/>
                </ContentBox>
                <ContentBox onClick={() => navigate('/challengestatus')}>
                    <BiUserPin/>
                    <ContentTitle>나의 참여 현황</ContentTitle>
                    <NextIcon/>
                </ContentBox>
                <ContentBox onClick={() => navigate('/community')}>
                    <img src={User} alt="user" />
                    <ContentTitle>챌린지 커뮤니티</ContentTitle>
                    <NextIcon/>
                </ContentBox>
            </Contents>
            <Navbar/>
        </Container>
    )
}

export default Challenge;