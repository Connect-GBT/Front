import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Food from "../../images/image 45.png"
import { ChallengeComponents } from "../../components/Challenge";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.div`
    width: 350px;
    font-family: NanumSquareRound;
    font-size: 17px;
    font-weight: 400;
    line-height: 1.4;
    padding-top: 10px;
    margin-bottom: 10px;
`

function ChallengeWrite(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/challenge');
    };


    return(
        <Container>
            <Header title="주간 인증 쓰기" onBackClick = {handleBackClick}/>
            <Content>
                <ChallengeComponents 
                    smalltitle="[11월 주간 인증 챌린지"
                    title="1주차는 흑백 요리사에 나온 <br/>요리로 도전!"
                    writer="닉네임 | 2024.11.24"/>
                <Text>
                오늘은 흑백요리사의 밤 티라미수를 <br/>
                만들어 보려고 한다. <br/>
                편의점 재료들만 사용한 메뉴이다 보니,<br/>
                어렵지는 않을 것 같다.<br/>
                재료는 CU 편의점에서 모두 구입했고<br/>
                생크림빵 생크림, 통밀 다이제, 라떼, 맛밤, <br/>
                우유, 그래놀라, 가나초콜릿 <br/>
                이렇게 준비하면 된다.
                </Text>
                <img src={Food} alt="food" />
            </Content>
            <Navbar/>
        </Container>
    )
}

export default ChallengeWrite;