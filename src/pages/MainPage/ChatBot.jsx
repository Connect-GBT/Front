import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";
import { RiRobot3Line } from "react-icons/ri";

const ChatConatiner = styled.div`
    width: 100%;
    min-height: 75vh;
    background: rgba(59, 125, 121, 0.25);
`
const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: #FFF;
    margin-top: 20px;
    margin-left: 20px;
    svg{
        width: 35px;
        height: 35px;
        object-fit: contain;
    }
`
const ChatBotName = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 16px;
    font-weight: 700;
    padding-left: 10px;
    margin-top: 20px;

`
const TextBox = styled.div`
    width: 200px;
    height: auto;
    padding: 15px;
    border-radius: 0px 10px 10px 10px;
    border: 1px solid #3B7D79;
    background: #FFF;
    font-family: NanumSquareRound;
    font-size: 15px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 10px;
`

const SendBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: NanumSquareRound;
    
`

const Text = styled.textarea`
    width: 250px;
    height: 40px;
    background: #CEDEDD;
    border: 1px solid #3B7D79;
    margin: 10px;
    border-radius: 10px;
    outline: none;
    resize: none;
    font-family: inherit;
    font-size: 12px;
    padding: 5px;
`

const SendBtn = styled.div`
    width: 60px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background: #3B7D79;
    color: #FFF;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
`
function ChatBot (){
    const navigate = useNavigate();
    const HandleBackClick = () =>{
        navigate('/main');
    }
    return(
        <Container>
            <Header title="심리 상담소" onBackClick={HandleBackClick}/>
            <ChatConatiner>
                <IconContainer>
                    <Icon><RiRobot3Line/></Icon>
                    <ChatBotName>브릿지</ChatBotName>
                </IconContainer>
                <TextBox>
                안녕하세요! 저는 브릿지입니다.<br/>
                여러분의 심리를 상담해드릴 수<br/>
                있어요.<br/>
                아는 한에서 최대한 도와줄게요.<br/>
                하고 싶은 말이 있을까요?
                </TextBox>
            </ChatConatiner>
            <SendBox>
                <Text/>
                <SendBtn>전송</SendBtn>
            </SendBox>
            <Navbar/>
        </Container>
    )
}

export default ChatBot;