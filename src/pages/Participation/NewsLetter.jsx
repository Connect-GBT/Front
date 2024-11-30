import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.div`
    font-family: NanumSquareRound;
    font-size: 25px;
    font-weight: 800;
    padding-right: 120px;
    padding-top: 10px;
`
const Writer = styled.div`
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 400;
    padding-left: 230px;
    padding-bottom: 10px;
`
const Line = styled.div`
    width: 359px;
    height: 1px;
    background-color: black;
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

function NewLetter(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/partmain');
    };


    return(
        <Container>
            <Header title="오늘의 Connect" onBackClick = {handleBackClick}/>
            <Content>
                <Title>
                카피라이터 오하림:<br/>
                TBWA와 무신사,<br/>
                29CM의 ‘팔리는 글’을 <br/>
                쓰며 배운 것
                </Title>
                <Writer>
                    오하림 | 2024.11.24
                </Writer>
                <Line/>
                <Text>
                여러분은 ‘내 일’을 얼마나 안다고<br/>
                생각하시나요? <br/>
                전 10년 넘게 에디터로 일했지만, <br/>
                여전히 모르겠습니다.<br/>
                신입 때는 이쯤 되면 원고를 눈감고도 <br/>
                쓸 줄 알았어요. 하지만 지금도 <br/>
                인터뷰는 어렵고, 쓰는 건 더 어렵습니다.<br/><br/>
                비슷한 연차의 시니어가 없다 보니, <br/>
                이런 고민을 나눌 기회가 많지 않았어요.<br/>
                그런데 며칠전, 오랜만에 이런 이야기를<br/> 
                나눌 수 있는 사람을 만났습니다.<br/><br/> 
                오하림, 온라인 편집숍 29CM의 <br/>
                헤드 카피라이터입니다.<br/>
                TBWA와 무신사를 거치며 <br/>
                광고와 마케팅 카피를 쓴, <br/>
                11년 차 직업인이죠.<br/><br/>
                모두가 부러워할 만한 경력을 가졌지만, <br/>
                정작 그도 이렇게 말하더군요. <br/>
                “11년 했지만 아직도 이 일을 모르겠다”고요. <br/>
                그리고 이렇게 덧붙였습니다.<br/>
                “그런데, 그래서 이 일을 <br/>
                오래 할 수 있는 것 같아요.”
                </Text>
            </Content>
            <Navbar/>
        </Container>
    )
}

export default NewLetter;