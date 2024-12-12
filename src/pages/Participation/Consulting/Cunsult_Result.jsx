import React, {useState} from "react";
import styled from "styled-components";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import { PressButton } from "../../../components/PressButton";
import { SubmitButton } from "../../../components/ResumeContainer";

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`;

const Result = styled.div`
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 3px solid #3B7D79;
  background: #FFF;
  font-family: 'NanumSquareRound';
  font-weight: 500;
  padding: 15px;
  line-height: 1.4;
  font-size: 14px;
`


function ConsultResult(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    const HomeClick = () => {
        navigate('/partmain')
    }
    return(
        <Container>
            <Header title="AI 취업 컨설팅" onBackClick={handleBackClick}/>
            <Contents>
                <Title>
                    자기소개서 첨삭지
                </Title>
                <Result>
                "현실적이고, 논리적인 문제해결자"<br/>
저는 현실적이면서 목표 지향적인 성격을 가지고 있습니다. 목표 달성에 대한 강한 열정을 바탕으로, 계획 수립 단계에서부터 세심한 주의를 기울여 프로젝트를 완벽하게 실행하고자 합니다. 다만 지나친 완벽주의 성향으로 인해 유연성이 떨어질 수 있다는 점을 인지하고 있기에, 상황에 맞게 계획을 조정하는 등 유연한 대응 능력을 키워왔습니다. 이러한 성향은 마케팅 관련 수업에서 팀장으로 활동하며 빛을 발했습니다. 목표 지향적 태도로 명확한 계획을 수립하고, 완벽주의적 성향으로 꼼꼼하게 실행하되, 필요할 때는 유연하게 대처하며 프로젝트들을 성공적으로 이끌었습니다.<br/><br/>
"실전 중심의 학습 태도"<br/>
이론에서 그치지 않고 실제 성과를 만들어내는 것을 중요하게 생각합니다. 마케팅 관리 수업에서는 유아용품 회사와 협업하여 실제 마케팅 문제를 해결했습니다. 시장 조사와 고객 설문을 통해 타겟층을 정의하고, 경쟁사 분석으로 시장 트렌드를 파악했으며, 검색엔진최적화를 통해 네이버 쇼핑 10위권 진입이라는 가시적인 성과를 달성했습니다. 또한 소비자행동론 수업에서는 MBTI별 소비자 행동 특성을 분석하여 현대 캐스퍼의 마케팅 전략을 수립했고, 이는 높은 평가를 받았습니다. 이처럼 저는 항상 실질적인 문제 해결과 성과 창출에 초점을 맞추어 왔습니다.
                </Result>
                <PressButton onClick={HomeClick} >홈으로 돌아가기</PressButton>
            </Contents>
            <Navbar/>    
        </Container>
       
    )
}

export default ConsultResult;