import React from "react";
import styled from "styled-components";

const SmallContainer = styled.div`
  width: 120px;
  padding: 13px 11px 14px 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 3px solid #3B7D79;
  background: #FFF;
`

const SmallImage= styled.div`
  width: 40px;
  height: 40px;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const SmallTitle = styled.div`
  width: 142px;
  font-family: NanumSquareRound;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`


function SmallCard({ image, title, onClick }) {
    return (
      <SmallContainer onClick={onClick}>
        <SmallImage><img src={image} alt={title}/></SmallImage>
        <SmallTitle>{title}</SmallTitle>
      </SmallContainer>
    );
  }
  
export default SmallCard;