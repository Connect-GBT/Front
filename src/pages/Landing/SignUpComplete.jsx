import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header'
import { useNavigate } from 'react-router-dom'
import Handshake from "../../images/handshake_1.png"
import { Container } from '../../components/Layout'

const Content = styled.div`
    width: 100%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;  
`

const Title = styled.div`
    text-align: center;
    font-family: 'NanumSquareRound';
    font-size: 25px;
    font-weight: 700;
    margin-bottom: 20px;
`

const Image = styled.div`
    width: 150px;
    height: 150px;
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const SmallTitle = styled.div`
    text-align: center;
    font-family: 'NanumSquareRound';
    font-size: 20px;
    font-weight: 700;
    margin-top: 20px;
`

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const LoginButton = styled.button`
  width: 250px;
  height: 50px;
  border-radius: 15px;
  background: #3B7D79;
  border: none;
  color: white;
  font-family: NanumSquareRound;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
`

function SignUpComplete() {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }

  return (
    <Container>
      <Header title="회원 가입" onBackClick={handleBackClick}/>
        <Content>
          <Title>환영합니다, 닉네임님</Title>
          <Image><img src={Handshake} alt="handshake"/></Image>
          <SmallTitle>
            로그인하시어, <br/>
            커넥트 서비스를 이용해주세요.
          </SmallTitle>
        </Content>
        <LoginContainer>
          <LoginButton onClick={() => navigate('/login')}>로그인하기</LoginButton>
        </LoginContainer>
    </Container>
  )
}

export default SignUpComplete