import React from "react";
import styled from "styled-components";
import { Container, Contents } from "../../components/Layout";
import { Header } from "../../components/Header";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/NavBar";
import { MdOutlineNavigateNext } from "react-icons/md";

const MainTitle = styled.div`
    width: 100%;
    height: 40px;
    background: #3B7D79;
    color: #FFF;
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    padding-left: 30px;
`

const SubTitleContainer = styled.div`
    width: calc(100% - 30px); 
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 0 15px; 
    border-bottom: 1px solid black;
    margin-left: 15px;
`

const SubTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 700;
`

const NextBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px; 
  svg{
    width: 25px;
    height: 25px;
    object-fit: contain;
  }
`

function MyPage(){
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/main');
    }

    const menuItems = [
        { id: 1, title: "정보", path: "/edit-profile" },
        { id: 2, title: "레벨 테스트 진행하기", path: "/test" },
        { id: 3, title: "내 이력서 등록", path: "/resume" },
        { id: 4, title: "첨삭 받은 자기소개서 확인하기", path: "/resume" },
        { id: 5, title: "구독 정보 확인", path: "/subscribecheck" },
        { id: 6, title: "공지사항/이벤트", path: "event" },
    ];

    const Account = [
        { id: 1, title: "로그아웃", path: "/edit-profile" },
        { id: 2, title: "회원탈퇴", path: "/change-password" },
    ];
    const handleMenuClick = (path) => {
        navigate(path);
    }

    return(
        <Container>
            <Header title="마이페이지" onBackClick={handleBackClick}/>
            <Contents>
                <MainTitle>프로필</MainTitle>
                {menuItems.map((item) => (
                    <SubTitleContainer key={item.id}>
                        <SubTitle>
                            {item.title}
                        </SubTitle>
                        <NextBtn onClick={() => handleMenuClick(item.path)}>
                            <MdOutlineNavigateNext/>
                        </NextBtn>
                    </SubTitleContainer>
                ))}
                <MainTitle>계정 관리</MainTitle>
                {Account.map((item) => (
                    <SubTitleContainer key={item.id}>
                        <SubTitle>
                            {item.title}
                        </SubTitle>
                        <NextBtn onClick={() => handleMenuClick(item.path)}>
                            <MdOutlineNavigateNext/>
                        </NextBtn>
                    </SubTitleContainer>
                ))}
            </Contents>
            <Navbar/>
        </Container>
    )
}

export default MyPage;