import React, { useState } from "react";
import styled from "styled-components";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import { PressButton } from "../../../components/PressButton";
import { InfoBox } from "../../../components/Description";

const SelectBox = styled.div`
  width: 300px;
  margin-bottom: 15px;
`;

const Label = styled.div`
  color: #666;
  font-size: 16px;
  margin-bottom: 8px;
`;

const Select = styled.select`
  width: 100%;
  height: 45px;
  border: 2px solid #3B7D79;
  border-radius: 10px;
  padding: 0 10px;
  font-size: 16px;
  outline: none;
  -webkit-appearance: none; 
  background-color: white;

`;



function AiConsulting() {
    const navigate = useNavigate();
    const [industry, setIndustry] = useState("");
    const [jobRole, setJobRole] = useState("");

    const handleBackClick = () => {
        navigate('/partmain');
    };

    const handleStart = () => {
        if (industry && jobRole) {
            console.log("상담 시작:", { industry, jobRole });
            navigate('/aiconsulting/selfintroduction');
        }
    };

    return (
        <Container>
            <Header title="AI 취업 컨설팅" onBackClick={handleBackClick}/>
            <Contents>
                <InfoBox>
                    커넥트에 이력서를 등록한 후 <br/>
                    본인의 자기소개서를 입력하면, <br/>
                    AI의 정교한 기술이 자기소개서를 <br/>
                    직접 첨삭해줍니다.<br/><br/>

                    등록한 이력서를 토대로 <br/>
                    희망 산업 및 직무에 맞게, <br/>
                    자기소개서에 넣을 소재를 추출하고<br/>
                    내용을 강화하는 훈련입니다.
                </InfoBox>

                <SelectBox>
                    <Label>[희망 산업 선택]</Label>
                    <Select 
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                    >
                        <option value="">선택</option>
                        <option value="IT">정보통신, IT</option>
                        <option value="Media">미디어, 콘텐츠</option>
                        <option value="beauty">패션, 뷰티</option>
                        <option value="Distribution">물류, 유통</option>
                        <option value="Production">제조, 생산</option>
                        <option value="Bio">헬스케어, 바이오</option>
                        <option value="Energy">에너지, 환경</option>
                        <option value="Construction">건설, 부동산</option>
                        <option value="Education">교육, 연구</option>
                        <option value="finance">금융, 투자</option>
                        <option value="Sports">문화, 스포츠</option>
                        <option value="Trip">여행, 서비스</option>
                        <option value="Public">공공, 비영리</option>
                    </Select>
                </SelectBox>

                <SelectBox>
                    <Label>[희망 직무 선택]</Label>
                    <Select 
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                    >
                        <option value="">선택</option>
                        <option value="Planning">기획, 전략</option>
                        <option value="marketing">마케팅, 홍보, 조사</option>
                        <option value="Accoutning">회계, 세무, 재무</option>
                        <option value="HR">인사, 노무, HRD</option>
                        <option value="JA">총무, 법무, 사무</option>
                        <option value="Development">IT 개발, 데이터</option>
                        <option value="sales">영업, 판매, 무역</option>
                        <option value="design">디자인</option>
                        <option value="TM">고객 상담, TM</option>
                        <option value="Buying">구매, 자재, 물류</option>
                        <option value="MD">상품기획, MD</option>
                        <option value="Drive">운전, 운송, 배송</option>
                        <option value="Service">서비스</option>
                        <option value="Production">생산</option>
                        <option value="Construction">건설, 건축</option>
                        <option value="Medical">의료</option>
                        <option value="RD">연구, R&D</option>
                        <option value="Education">교육</option>
                        <option value="Media">미디어, 문화, 스포츠</option>
                        <option value="Finance">금융, 보험</option>
                        <option value="Public">공공, 복지</option>
                    </Select>
                </SelectBox>

                <PressButton onClick={handleStart}>컨설팅 받기</PressButton>
            </Contents>
            <Navbar/>
        </Container>
    );
}

export default AiConsulting;