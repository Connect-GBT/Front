import React from "react";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import { Description, InfoBox, StartBtn} from "../../../components/Description";


function Conversation(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/adaptmain');
    };
    return(
        <Container>
            <Header title="매칭을 통한 대화" onBackClick={handleBackClick}/>
            <Contents>
                <Description subtitle="현재 코스는" title="매칭을 통한 대화" />
                <InfoBox>
                    이야기를 나누고 싶은<br/>
                    주제를 3가지 이상 선택 후<br/>
                    실제 사람과 매칭을 진행,<br/>
                    채팅으로 대화를 나눕니다.<br/><br/>
                    이전 단계들과 달리<br/>
                    실제로 대화를 나눠보며,<br/>
                    사회에 참여할 수 있는<br/>
                    자신감을 얻는 단계입니다.<br/><br/>
                    시작하기 버튼을 눌러<br/>
                    실제 채팅방에 입장하세요!

                </InfoBox>
                <StartBtn onClick={() => navigate('/conversation/subject')}>시작하기</StartBtn>
            </Contents>
            <Navbar/>
        </Container>
    )
}
export default Conversation;