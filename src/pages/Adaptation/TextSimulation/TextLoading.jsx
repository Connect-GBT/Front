import React, {useEffect} from "react";
import { Header } from "../../../components/Header";
import { Container, Loading } from "../../../components/Loading";
import Navbar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";

function TextLoading(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/textsimulation/textfeedback'); 
        }, 3000);
 
        return () => clearTimeout(timer);
    }, [navigate]);
 
    return(
        <Container>
            <Header title="텍스트 시뮬레이션" onBackClick={handleBackClick}/>
            <Loading 
                title="고생 많으셨습니다!"
                smalltitle="결과를 분석 중입니다.<br/>잠시만 기다려주세요..."
            />
            <Navbar/>
    </Container>
    )
}
export default TextLoading;