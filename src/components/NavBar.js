import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ConsultIcon } from "../images/Consult.svg";
import { ReactComponent as HomeIconComponent } from "../images/HomeIcon.svg";
import { ReactComponent as MypageIconComponent } from "../images/MypageIcon.svg";

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  padding: 10px 0;
  border-radius: 10px 10px 0px 0px;
  border-top: 3px solid #3B7D79;
  position: relative;  
  bottom: 0;
  left: 0;  
  right: 0; 
  width: 100%;
  z-index: 1000; 
`;

const NavLink = styled(Link)`
  color: ${(props) => (props.active ? "#3A00F9" : "#000")};
  font-size: 1.5rem;
  text-align: center;
  flex: 1;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    color: #3A00F9; 
  }
`;

const NavItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'NanumSquareRound';
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    gap: 4px; 
`;

const IconWrapper = styled.div`
  svg {
    width: 25px;
    height: 25px;
    fill: ${(props) => (props.active ? "#3A00F9" : "#000")};
  }
`;

const Navbar = () => {
    const [activeNav, setActiveNav] = useState(1);
    const navItems = [
        { id: 1, name: "챗봇", icon: ConsultIcon, to: "/chatbot" },
        { id: 2, name: "홈", icon: HomeIconComponent, to: "/main" },
        { id: 3, name: "마이페이지", icon: MypageIconComponent, to: "/mypage" },     
    ];

    return (
        <Wrapper>
            {navItems.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.to}
                    active={activeNav === item.id ? "true" : undefined}
                    onClick={() => setActiveNav(item.id)}
                >
                    <NavItem>
                        <IconWrapper active={activeNav === item.id}>
                            <item.icon />
                        </IconWrapper>
                        <span>{item.name}</span>  
                    </NavItem>
                </NavLink>
            ))}
        </Wrapper>
    );
};

export default Navbar;