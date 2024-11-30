import React, { useState } from "react";
import styled from "styled-components";
import { Container, Contents } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { ResumeContainer } from "../../components/ResumeContainer";
import { PressButton } from "../../components/PressButton";
import Navbar from "../../components/NavBar";

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`;

const CharCount = styled.div`
  text-align: right;
  color: #666;
  font-size: 14px;
  margin-top: 5px;
  width: 350px;
`;

function Resume() {
    const navigate = useNavigate();
    const [resumeContent, setResumeContent] = useState("");
    const maxLength = 1000; 
    
    const handleBackClick = () => {
        navigate('/partmain');
    };

    const handleSubmit = () => {
        if (resumeContent.trim()) {
            console.log("이력서 제출:", resumeContent);
        }
    };

    const handleChange = (e) => {
        const text = e.target.value;
        if (text.length <= maxLength) {
            setResumeContent(text);
        }
    };

    return (
        <Container>
            <Header title="이력서 등록하기" onBackClick={handleBackClick}/>
            <Contents>
                <Title>본인의 이력서를 작성해주세요!</Title>
                <ResumeContainer 
                    value={resumeContent}
                    onChange={handleChange}
                    placeholder="이력서 내용을 입력해주세요.
                        
                        예시)
                        • 학력 사항
                        • 경력 사항
                        • 자격증
                        • 수상 내역
                        • 기타 사항"
                />
                <CharCount>
                    {resumeContent.length} / {maxLength}자
                </CharCount>
                <PressButton 
                    onClick={handleSubmit}
                    disabled={!resumeContent.trim()}>
                    등록하기
                </PressButton>
            </Contents>
            <Navbar/>
        </Container>
    );
}

export default Resume;