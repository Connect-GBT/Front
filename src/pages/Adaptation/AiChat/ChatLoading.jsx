import React, {useEffect} from "react";
import { Header } from "../../../components/Header";
import { Container, Loading } from "../../../components/Loading";
import Navbar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";

function ChatLoading(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/aichat/feedback'); 
        }, 3000);
 
        return () => clearTimeout(timer);
    }, [navigate]);
 
    return(
        <Container>
            <Header title="AI 역할극 채팅" onBackClick={handleBackClick}/>
            <Loading 
                title="즐거운 대화셨나요?"
                smalltitle="결과를 분석 중입니다.<br/>잠시만 기다려주세요..."
            />
            <Navbar/>
    </Container>
    )
}
export default ChatLoading;
