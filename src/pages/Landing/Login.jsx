import React from 'react'
import Handshake from '../../images/handshake_1.png'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  background-color: white;
`

const Image = styled.div`
  width: 120px;
  height: 120px;  
  margin-bottom: 15px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

const Title = styled.div`
  color: #3B7D79;
  font-family: NanumSquareRound;
  font-size: 40px;
  font-weight: 800;
  margin-bottom: 10px;
`

const SubTitle = styled.div`
  font-family: NanumSquareRound;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 40px;
`

const InputContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
`

const InputBox = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  align-items: center;
  border-radius: 30px;
  border: 3px solid #3B7D79;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: white;
  padding: 0 25px;
`

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 700;
  color: #3B7D79;
  
  &::placeholder {
    color: #3B7D79;
    text-align: center;
  }
  
  &:focus {
    outline: none;
  }
`

const LoginButton = styled.button`
  width: 160px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #3B7D79;
  border: none;
  box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin: 15px 0;
`

const SubLinks = styled.div`
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 20px;
  cursor: pointer;
`

const Warning = styled.div`
  font-family: NanumSquareRound;
  font-size: 16px;
  font-weight: 400;
  color: #666;
  margin-top: 15px;
`

function Login() {
  const navigate = useNavigate();
  return (
    <Container>
      <Image>
        <img src={Handshake} alt='handshake'/>
      </Image>
      <Title>커넥트</Title>
      <SubTitle>"외로웠던 당신을 세상 밖으로"</SubTitle>
      <InputContainer>
        <InputBox>
          <StyledInput 
            type="text"
            placeholder="아이디"
          />
        </InputBox>
        <InputBox>
          <StyledInput 
            type="password"
            placeholder="비밀번호"
          />
        </InputBox>
      </InputContainer>
      <LoginButton onClick={()=> navigate('/Main')}>로그인</LoginButton>
      <SubLinks onClick={() => navigate('/signup')}>
        아이디 찾기 | 비밀번호 찾기<br/>
        회원가입하기
      </SubLinks>
      <Warning>익명성을 철저히 보장합니다.</Warning>
    </Container>
  )
}

export default Login