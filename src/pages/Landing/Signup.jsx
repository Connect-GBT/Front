import React from 'react'
import styled from 'styled-components'
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import { Container } from '../../components/Layout';


const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  gap: 25px;
`

const InputGroup = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 15px;
`

const InputTitle = styled.div`
  font-family: NanumSquareRound;
  font-size: 20px;
  font-weight: 700;
  text-align: left;
  color: #000;
`

const InputBox = styled.input`
  height: 50px;
  border-radius: 15px;
  border: 3px solid #3B7D79;
  padding: 0 15px;
  font-size: 16px;
  background: white;
  font-family: NanumSquareRound;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`

const IdContainer = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

const IdBox = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  border: 3px solid #3B7D79;
  padding: 0 15px;
  font-size: 18px;
  background: white;
  font-family: NanumSquareRound;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`

const CheckButton = styled.div`
  height: 50px;
  padding: 0 15px;
  border-radius: 15px;
  border: 3px solid #3B7D79;
  background-color: white;
  font-family: NanumSquareRound;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SignUpButton = styled.button`
  width: 300px;
  height: 60px;
  border-radius: 15px;
  background: #3B7D79;
  border: none;
  color: white;
  font-family: NanumSquareRound;
  font-weight: 700;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
`

function SignUp() {
  const navigate = useNavigate();
  
  const handleBackClick = () => {
    navigate(-1);
};
  return (
    <Container>
      <Header title="회원가입" onBackClick={handleBackClick}/>
      <Contents>
        <InputGroup>
          <InputTitle>닉네임</InputTitle>
          <InputBox type="text" />
        </InputGroup>

        <InputGroup>
          <InputTitle>아이디</InputTitle>
          <IdContainer>
            <IdBox type="text" />
            <CheckButton>중복확인</CheckButton>
          </IdContainer>
        </InputGroup>

        <InputGroup>
          <InputTitle>비밀번호</InputTitle>
          <InputBox type="password" />
        </InputGroup>

        <InputGroup>
          <InputTitle>비밀번호 확인</InputTitle>
          <InputBox type="password" />
        </InputGroup>

        <SignUpButton onClick={()=>navigate('/signupcomplete')}>회원가입하기</SignUpButton>
      </Contents>
    </Container>
  )
}

export default SignUp