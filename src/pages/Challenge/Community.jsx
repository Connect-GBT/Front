import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";
import First from "../../images/image 47.png"
import Second from "../../images/image.png"
import Third from "../../images/Coffee.png"
import Fourth from "../../images/Meat.png"
import Fifth from "../../images/Bass.png"

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 80vh;
`
const Total = styled.div`
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 400;
    padding-left: 35px;
    padding-bottom: 10px;
`

const Line = styled.div`
    width: 350px;
    border: 1px solid black;
    margin-bottom: 2px;
`
const ContentContainer = styled.div`
    width: 350px;
    height: 100px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    img{
        width: 70px;
        height: 70px;
    }
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 10px;
`
const Title = styled.div`
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 700;
`
const Description = styled.div`
    color: rgba(0, 0, 0, 0.52);
    font-family: NanumSquareRound;
    font-size: 12px;
    font-weight: 400;
    padding-top: 5px;
`

const Writer = styled.div`
    color: rgba(0, 0, 0, 0.52);
    font-family: NanumSquareRound;
    font-size: 10px;
    font-weight: 400;
    padding-top: 10px;
`
function Community() {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/challenge');
    };

    const contentData = [
        {
            title: "밤 티라미수",
            description: "오늘은 흑백요리사의 밤 티라미수를 만들어 보려고 한다. 편의점 재료들만 사용한 메뉴이다 보니, 어렵지는 않을 것 같다.",
            writer: "닉네임",
            date: "2024.11.24",
            image: First
        },
        {
            title: "라면땅",
            description: "오늘은 흑백요리사의 라면땅을 만들어 보려고 한다. 편의점 재료들만 사용한 메뉴이다 보니, 어렵지는 않을 것 같다. ",
            writer: "닉네임",
            date: "2024.10.31",
            image: Second
        },
        {
            title: "아이스 아메리카노",
            description: "오늘은 흑백요리사의 아이스 아메리카노를 만들어 보려고 한다. 편의점 재료들만 사용한 메뉴이다 보니, 어렵지는 않을 것 같다.",
            writer: "닉네임",
            date: "2024.10.22",
            image: Third
        },
        {
            title: "동파육",
            description: "오늘은 흑백요리사의 동파육을 만들어 보려고 한다. 편의점 재료들을 사용하지 않은메뉴이다 보니, 어려울 것 같다. ",
            writer: "닉네임",
            date: "2024.08.24",
            image: Fourth
        },
        {
            title: "빠스",
            description: "오늘은 흑백요리사의 빠스를 만들어 보려고 한다. 편의점 재료들을 사용하지 않은 메뉴이다 보니, 어려울 것 같다. ",
            writer: "닉네임",
            date: "2024.08.15",
            image: Fifth
        }
    ];

    return (
        <Container>
            <Header title="챌린지 커뮤니티" onBackClick={handleBackClick}/>
            <Total>전체글</Total>
            <Content>
            <Line/>

                {contentData.map((content, index) => (
                    <ContentContainer key={index}>
                        <TextContainer>
                            <Title>{content.title}</Title>
                            <Description>
                                {content.description}
                            </Description>
                            <Writer>{content.writer} | {content.date}</Writer>
                        </TextContainer>
                        <img src={content.image} alt={content.title} />
                    </ContentContainer>
                ))}
            </Content>
            <Navbar/>
        </Container>
    )
}

export default Community;