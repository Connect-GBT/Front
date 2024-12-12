import React, { useState } from "react";
import { Container, Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import { PressButton } from "../../../components/PressButton";
import { InfoBox } from "../../../components/Description";

function Organization() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/partmain');
    };
    return(
        <Container>
            <Header title="외부 기관 연계" onBackClick={handleBackClick}/>
            <Contents>
                <InfoBox>
                취업 외에도 청년들의<br/>
                사회 참여 독려를 위해<br/> 
                연계된 외부 기관을 안내합니다.<br/><br/>

                상담 심리, 취미 활동,<br/>
                트레이닝 등 다양한 범위의<br/>
                프로그램들을 소개하여<br/>
                사회 적응에서 나아가 관심<br/>
                있는 사회 활동에 직접<br/>
                참여할 수 있는 기회입니다.
                </InfoBox>
                <PressButton onClick={()=>navigate('/organizationlist')}>외부 기관 보러가기</PressButton>
            </Contents>
            <Navbar/>
        </Container>
    )
}

export default Organization;