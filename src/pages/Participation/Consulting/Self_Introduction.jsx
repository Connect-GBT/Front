import React, {useState} from "react";
import styled from "styled-components";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import { ResumeContainer, SubmitButton } from "../../../components/ResumeContainer";
import Navbar from "../../../components/NavBar";

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

function SelfIntroduction() {
    const navigate = useNavigate();
    const [SelfContent, setSelfContent] = useState("");
    const maxLength = 1000;

    const handleBackClick = () => {
        navigate(-1);
    }

    const handleSubmit = () => {
        if (SelfContent.trim()){
            console.log("자기소개서 제출:", SelfContent);
            navigate('/aiconsulting/consultloading');
        }
    }

    const handleChange = (e) => {
        const text = e.target.value;
        if (text.length <= maxLength) {
            setSelfContent(text);
        }
    };

    return(
        <Container>
            <Header title="AI 취업 컨설팅" onBackClick={handleBackClick}/>
            <Contents>
                <Title>
                    본인의 자기소개서를<br/>
                    작성해주세요!
                </Title>
                <ResumeContainer 
                    value={SelfContent}
                    onChange={handleChange}
                    placeholder="자기소개서 내용을 입력해주세요."
                />
                <CharCount>
                    {SelfContent.length} / {maxLength}자
                </CharCount>
                <SubmitButton 
                    onClick={handleSubmit}
                    disabled={!SelfContent.trim()}>
                    등록하기
                </SubmitButton>
            </Contents>
            <Navbar/>
        </Container>

    )
}

export default SelfIntroduction;