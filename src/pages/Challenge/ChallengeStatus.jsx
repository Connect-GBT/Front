import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layout";
import { Header } from "../../components/Header";
import Navbar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";
import { ChallengeComponents } from "../../components/Challenge";
import { GiFootprint } from "react-icons/gi";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Result = styled.div`
    color: #3B7D79;
    font-family: NanumSquareRound;
    font-size: 22px;
    font-weight: 800;
    padding-top: 15px;
`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 700;
    padding-top: 15px;
`
const StatusContainer = styled.div`
    display: inline-flex;
    padding: 19px 30px 15px 13px;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 12px;
    border-radius: 10px;
    border: 3px solid #3B7D79;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    margin: 15px 0;
`
const MonthContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
`
const Month = styled.div`
    text-align: left;
    font-family: NanumSquareRound;
    font-size: 18px;
    font-weight: 700;
    min-width: 30px;
`
const WeekContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const WeekItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
`
const WeekText = styled.div`
    color: #666;
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 400;
`
const FootprintIcon = styled(GiFootprint)`
    width: 25px;
    height: 25px;
    color: ${props => props.color || '#ccc'};
`

function ChallengeStatus(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/challenge');
    };

    const monthsData = [
        {
            month: '6',
            weeks: [
                { color: '#FF0000' },  
                { color: '#CCCCCC' },  
                { color: '#CCCCCC' }, 
                { color: '#FF0000' }   
            ]
        },
        {
            month: '7',
            weeks: [
                { color: '#FFA07A' },
                { color: '#FFA07A' },
                { color: '#FFA07A' },
                { color: '#FFA07A' }
            ]
        },
        {
            month: '8',
            weeks: [
                { color: '#F8D755' },
                { color: '#CCCCCC' },
                { color: '#F8D755' },
                { color: '#CCCCCC' }
            ]
        },
        {
            month: '9',
            weeks: [
                { color: '#5CC6C0' },
                { color: '#CCCCCC' },
                { color: '#CCCCCC' },
                { color: '#5CC6C0' }
            ]
        },
        {
            month: '10',
            weeks: [
                { color: '#6FAEF4' },
                { color: '#6FAEF4' },
                { color: '#6FAEF4' },
                { color: '#CCCCCC' }
            ]
        },
        {
            month: '11',
            weeks: [
                { color: '#CCCCCC' },
                { color: '#CCCCCC' },
                { color: '#CCCCCC' },
                { color: '#704EA6C9' }
            ]
        },
        
    ];

    return(
        <Container>
            <Header title="나의 참여 현황" onBackClick={handleBackClick}/>
            <ChallengeComponents 
                smalltitle="[11월 주간 인증 챌린지]"  
                title="주간 인증 챌린지 4주차!"
                writer="닉네임 | 2024.11.24"/>
            <Content>
                <Result>주간 도전 결과</Result>
                <Text>
                    닉네임님<br/>
                    14주 기록을 남기셨군요!
                </Text>
                <StatusContainer>
                    {monthsData.map((monthData, index) => (
                        <MonthContainer key={index}>
                            <Month>{monthData.month}월</Month>
                            <WeekContainer>
                                {monthData.weeks.map((week, weekIndex) => (
                                    <WeekItem key={weekIndex}>
                                        <FootprintIcon color={week.color} />
                                        <WeekText>{weekIndex + 1}주차</WeekText>
                                    </WeekItem>
                                ))}
                            </WeekContainer>
                        </MonthContainer>
                    ))}
                </StatusContainer>
            </Content>
            <Navbar/>
        </Container>
    )
}

export default ChallengeStatus;