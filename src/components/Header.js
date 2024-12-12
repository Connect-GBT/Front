import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from "react-icons/fa";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
`

const BackButton = styled.button`
    position: absolute;
    left: 20px;
    background: none;
    border: none;
    font-size: 20px;
    display: flex;
    align-items: center;
    z-index: 1;
    cursor: pointer;
`

const HeaderTitle = styled.div`
    text-align: center;
    font-family: NanumSquareRound;
    font-size: 20px;
    font-weight: 700;
`

export const Header = ({ title, onBackClick }) => {
  return (
    <HeaderContainer>
      <BackButton onClick={onBackClick}>
        <FaChevronLeft />
      </BackButton>
      <HeaderTitle>{title}</HeaderTitle>
    </HeaderContainer>
  );
};