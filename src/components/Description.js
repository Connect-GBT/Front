import React from 'react';
import styled from 'styled-components';
import { MdOutlineNavigateNext } from "react-icons/md";


export const InfoBox = styled.div`
  width: 300px;
  border: 2px solid #3B7D79;
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
  line-height: 1.6;
  white-space: pre-wrap;
  background: white;
  font-family: NanumSquareRound;
  font-size: 15px;
`;

const ContentsContainer = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 10px;
  border: 2px solid #3B7D79;
  background: #FFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
  margin-top: 21px;
`
const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 15px;
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
  padding-left: 40px;
  svg{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
export const Description = ({subtitle, title}) => {
    return(
        <ContentsContainer>
            <TitleContainer>
                <SubTitle>{subtitle}</SubTitle>
                <Title>{title}</Title>
            </TitleContainer>
            <NextBtn><MdOutlineNavigateNext/></NextBtn>
        </ContentsContainer>
    )
}

export const StartBtn = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #3B7D79;
  color: #FFF;
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 25px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`