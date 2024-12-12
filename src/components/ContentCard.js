import React from 'react';
import styled from 'styled-components';
import { MdOutlineNavigateNext } from "react-icons/md";

const ContentsContainer = styled.div`
  width: 320px;
  height: 90px;
  border-radius: 10px;
  border: 3px solid #3B7D79;
  background: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 21px;
`
const Image = styled.div`
  width: 60px;  
  height: 60px;  
  padding-left: 18px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;  
  }
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const SubTitle = styled.div`
  color: rgba(0, 0, 0, 0.52);
  font-family: NanumSquareRound;
  font-size: 14px;
  font-weight: 400;
`
const Title = styled.div`
  width: 195px;
  font-family: NanumSquareRound;
  font-size: 20px;
  font-weight: 700;
`
const NextBtn = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  svg{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

function ContentCard({ image, title, subTitle, onClick }) {
  return (
      <ContentsContainer onClick={onClick}>
          <Image><img src={image} alt={title}/></Image>
          <TitleContainer>
              <SubTitle>{subTitle}</SubTitle>
              <Title>{title}</Title>
          </TitleContainer>
          <NextBtn><MdOutlineNavigateNext/></NextBtn>
      </ContentsContainer>
  );
}

export default ContentCard;