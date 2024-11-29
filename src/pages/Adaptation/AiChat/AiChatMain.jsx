import React from "react";
import styled from "styled-components";
import { Container,Contents } from "../../../components/Layout";
import { Header } from "../../../components/Header";
import Navbar from "../../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { RiRobot3Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

const ChatContainer = styled.div`
    width: 340px;
    height: 550px;
    border-radius: 10px;
    border: 3px solid #3B7D79;
    background: #FFF;
`

const ChatBotContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    svg{
        width: 35px;
        height: 35px;
        object-fit: contain;
    }
`
const TextBox = styled.div`
    width: auto;
    height: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 13px;
    font-weight: 400;
    border: 2px solid #3B7D79;
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
    height: 20px;
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

const Submit = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 400;
    cursor: pointer;
`
function AiChatMain() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate(-1);
    };

    const conversation = [
        { type: 'bot', text: '좋은 아침입니다.' },
        { type: 'user', text: '좋은 아침입니다.' },
        { type: 'user', text: '오늘 입고온 스웨터 \n 정말 이쁘네요!' },
        { type: 'bot', text: '감사합니다.\n어제 샀어요!' },
        { type: 'user', text: '아무래도 따뜻한 옷을\n 더 사야겠어요' },
        { type: 'bot', text: '저도요.\n아직 춥네요.' },
        { type: 'user', text: '준비하고 쇼핑을 갈\n 계획이에요.'},
        { type: 'user', text: '\n이건 너무 얇아서 \n혹시 같이 갈래요?'},
        { type: 'bot', text: '좋아요!'}
    ];  

    // 현재까지 표시된 대화 메시지
    const [messages, setMessages] = useState([conversation[0]]);
    // 현재 대화 인덱스
    const [currentIndex, setCurrentIndex] = useState(1);
    // 입력창의 텍스트
    const [inputText, setInputText] = useState('');

    const handleSendMessage = () => {
        if (currentIndex >= conversation.length) return;
        
        // 다음 메시지 추가
        setMessages(prev => [...prev, conversation[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
        setInputText('');
    };

    return (
        <Container>
            <Header title="AI 역할극 채팅" onBackClick={handleBackClick} />
            <Contents>
                <ChatContainer>
                    {messages.map((message, index) => (
                        message.type === 'bot' ? (
                            <ChatBotContainer key={index}>
                                <Icon><RiRobot3Line /></Icon>
                                <TextBox>{message.text}</TextBox>
                            </ChatBotContainer>
                        ) : (
                            <UserContainer key={index}>
                                <TextBox>{message.text}</TextBox>
                                <Icon><RiUserLine /></Icon>
                            </UserContainer>
                        )
                    ))}
                </ChatContainer>
                <SendBox>
                    <Text 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter' && !e.shiftKey) {
                                e.preventDefault();
                                handleSendMessage();
                            }
                        }}
                        placeholder="메시지를 입력하세요"
                    />
                    <SendBtn onClick={handleSendMessage}>전송</SendBtn>
                </SendBox>
                <Submit onClick={() => navigate('/aichat/loading')}>대화 제출하기</Submit>
            </Contents>
            <Navbar />
        </Container>
    );
}

export default AiChatMain;