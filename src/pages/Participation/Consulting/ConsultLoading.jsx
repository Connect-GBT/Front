import React, { useEffect } from "react";
import { Header } from "../../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/NavBar";
import { Container, Loading } from "../../../components/Loading";

function ConsultLoading() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/aiconsulting/consultresult'); 
        }, 3000);
 
        return () => clearTimeout(timer);
    }, [navigate]);
 
    return (
        <Container>
            <Header title="AI 취업 컨설팅" onBackClick={handleBackClick}/>
            <Loading 
                title="세상 밖으로 나올<br/>당신을 응원합니다!"
                smalltitle="자기소개서를 분석 중입니다.<br/>잠시만 기다려주세요..."
            />
            <Navbar/>
        </Container>
    )
}

export default ConsultLoading;