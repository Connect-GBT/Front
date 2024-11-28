import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Handshake from '../../images/handshake_1.png'
import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    display: flex;
`
const Contents = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;  
`
const Image = styled.div`
  width: 75px;  
  height: 75px;  
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;  
  }
`

const Title = styled.div`
  width: 210px;
  height: 108px;
  color: #3B7D79;
  font-family: NanumSquareRound;
  font-size: 65px;
  font-style: normal;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

function Landing() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');  
    }, 3000);

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <Container>
      <Contents>
        <Image><img src={Handshake} alt="handshake"/></Image>
        <Title>커넥트</Title>  
      </Contents>
    </Container>
  )
}

export default Landing