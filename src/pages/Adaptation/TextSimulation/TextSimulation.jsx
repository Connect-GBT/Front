import React from "react";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import { Description, InfoBox, StartBtn} from "../../../components/Description";


function TextSimulation(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/adaptmain');
    };
    return(
        <Container>
            <Header title="텍스트 시뮬레이션" onBackClick={handleBackClick}/>
            <Contents>
                <Description subtitle="현재 코스는" title="텍스트 시뮬레이션" />
                <InfoBox>
                텍스트 시뮬레이션은 <br/>
                특정 상황에 대한 그림과 설명이 <br/>
                주어지면, 각 상황에 적절한 <br/>
                대답과 행동을 답안으로 <br/>
                선택하는 프로그램입니다.<br/><br/>
                사회에서 빈번하게 마주할 <br/>
                상황들에 익숙해지며,<br/>
                사회 인지 능력을 높일 수 있습니다. <br/><br/>
                시작하기 버튼을 눌러<br/>
                텍스트 시뮬레이션을 <br/>
                시작하세요!
                </InfoBox>
                <StartBtn onClick={() => navigate('/textsimulation/textmain')}>시작하기</StartBtn>
            </Contents>
            <Navbar/>
        </Container>
    )
}
export default TextSimulation;