import React from 'react';
import styled from 'styled-components';
import { Container, Contents } from '../../components/Layout';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar';

const Title = styled.div`
  font-family: NanumSquareRound;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`;

const CategoryTitle = styled.div`
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 700;
  width: 350px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 20px;
`;

const GreenDot = styled.div`
  width: 8px;
  height: 8px;
  background-color: #3B7D79;
  border-radius: 50%;
`;

const SubscriptionCard = styled.div`
  width: 300px;
  margin: 0px 20px;
  padding: 20px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const DiscountBadge = styled.span`
  font-family: NanumSquareRound;
  color: #FF6B6B;
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 4px;
`;

const OriginalPrice = styled.span`
  font-family: NanumSquareRound;
  color: #999;
  text-decoration: line-through;
  font-size: 12px;
`;

const CurrentPrice = styled.span`
  font-family: NanumSquareRound;
  font-size: 18px;
  font-weight: 700;
  color: #333;
`;

const Period = styled.span`
  font-family: NanumSquareRound;
  color: #666;
  font-weight: 500;
`;

const StartButton = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 50px;
  background-color: #3B7D79;
  color: white;
  border: none;
  border-radius: 8px;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: #2f6561;
  }
`;

function Subscribe() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Header title="멤버십" onBackClick={handleBackClick} />
      <Contents>
        <Title>
            Connect의 모든 컨텐츠를<br/>
            무제한으로 즐기세요!
        </Title>
        <CategoryTitle>
          <GreenDot/>
          사회 적응 훈련 과정
        </CategoryTitle>
        <SubscriptionCard>
          <PriceContainer>
            <DiscountBadge>30% 할인</DiscountBadge>
            <OriginalPrice>￦9,900원</OriginalPrice>
            <CurrentPrice>￦6,900원</CurrentPrice>
          </PriceContainer>
          <Period>1개월</Period>
        </SubscriptionCard>

        <CategoryTitle>
          <GreenDot />
          사회 참여 훈련 과정
        </CategoryTitle>
        <SubscriptionCard>
          <PriceContainer>
            <DiscountBadge>45% 할인</DiscountBadge>
            <OriginalPrice>￦18,000원</OriginalPrice>
            <CurrentPrice>￦9,900원</CurrentPrice>
          </PriceContainer>
          <Period>1개월</Period>
        </SubscriptionCard>
        <CategoryTitle>
          <GreenDot />
          종합 테스트
        </CategoryTitle>
        <SubscriptionCard>
          <PriceContainer>
            <DiscountBadge>45% 할인</DiscountBadge>
            <OriginalPrice>￦18,000원</OriginalPrice>
            <CurrentPrice>￦9,900원</CurrentPrice>
          </PriceContainer>
          <Period>5회권</Period>
        </SubscriptionCard>
        <StartButton>
          ￦16,800원으로 시작하기
        </StartButton>
      </Contents>
      
      <Navbar />
    </Container>
  );
}

export default Subscribe;