import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../../../components/Layout';
import { Contents } from '../../../components/Layout';
import Navbar from '../../../components/NavBar';
import { useNavigate } from 'react-router-dom';
import GPS from "../../../images/Address.png";
import { FaChevronLeft } from "react-icons/fa";

const CustomHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
`;
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
`;

const HeaderTitle = styled.div`
  text-align: center;
  font-family: NanumSquareRound;
  font-size: 20px;
  font-weight: 700;
`;

const HeaderImage = styled.img`
  position: absolute;
  right: 20px;
  width: 24px;
  height: 24px;
  z-index: 1;
  cursor: pointer;
`;
const CategoryContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const CategoryBar = styled.div`
  display: flex;
  white-space: nowrap;
  background: white;
  padding: 5px 0;
`;

const CategoryButton = styled.div`
  transition: all 0.2s ease;
  font-family: NanumSquareRound;
  font-weight: ${props => props.selected ? '700' : '500'};
  font-size: 15px;
  padding: 10px 15px;
  cursor: pointer;
  color: ${props => props.selected ? '#0d9488' : '#4b5563'};
  border-bottom: ${props => props.selected ? '2px solid #0d9488' : 'none'};
`;

const InstitutionList = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const InstitutionCard = styled.div`
  margin-bottom: 1rem;
  padding: 1.25rem;
  border: 1px solid #0d9488;
  border-radius: 0.5rem;
  background: white;
  font-family: NanumSquareRound;
  height: fit-content;
`;

const InstitutionTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1f2937;
`;

const InstitutionDescription = styled.p`
  color: #4b5563;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const InquiryButton = styled.a`
  display: block;
  padding: 0.5rem;
  background-color: #0d9488;
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #0f766e;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 2rem;
  color: #6b7280;
  grid-column: 1 / -1;
`;

function OrganizationList() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const handleBackClick = () => {
    navigate('/partmain');
  };

  const categories = [
    { id: 1, name: '전체' },
    { id: 2, name: '심리상담' },
    { id: 3, name: '진로탐색' },
    { id: 4, name: '취미/자기계발' },
    { id: 5, name: '건강관리' },
    { id: 6, name: '문화생활' },
  ];

  const institutions = {
    '심리상담': [
      {
        id: 1,
        name: '청년마음건강지원사업',
        description: '보건복지부에서 운영하는 프로그램으로, 청년들의 심리적 어려움을 해소하기 위한 전문 심리상담을 제공한다.',
        url: 'https://www.mohw.go.kr/menu.es?mid=a10709020500'
      },
      {
        id: 2,
        name: '정신건강 복지센터 및 정신건강상담전화',
        description: '전국 각 지역에 위치한 센터로 정신건강 상담, 교육, 자조 모임 등을 통해 정신건강 증진을 지원한다.',
        url: 'https://www.mohw.go.kr/menu.es?mid=a10706040100'
      },
      {
        id: 3,
        name: '청소년 상담복지센터',
        description: '전국 각 지역에 위치한 센터로, 만 9세부터 24세까지의 청소년을 대상으로 전문적인 상담과 맞춤형 복지 서비스를 제공한다.',
        url: 'https://www.1388.go.kr/sfi/YTOSP_SC_SFI_01'
      },
      {
        id: 4,
        name: '아이윌센터',
        description: '서울특별시에 위치한 시립기관으로, 인터넷 및 스마트폰 중독 예방과 상담을 통해 건강한 인터넷 사용 문화를 조성한다.',
        url: 'http://www.iwill.or.kr/'
      },
      {
        id: 5,
        name: '마음건강검진',
        description: '만 19세 이상 서울 시민은 누구나 이용이 가능하며, 정신건강의학과 전문의의 진료 상담을 지원한다.',
        url: 'https://blutouch.net/service/exam'
      },
      {
        id: 6,
        name: '청년활동지원센터',
        description: '전국 각 지역에 위치한 센터로, 청년들의 심리적 안정을 돕기 위한 다양한 프로그램과 상담을 제공한다.',
        url: 'https://www.smyc.kr/'
      },
      {
        id: 7,
        name: '위(Wee) 센터',
        description: '교육부에서 운영하는 프로그램으로, 학교/교육청/지역사회가 연계하여 학생들의 심리적 안정을 지원하기 위한 상담과 교육을 제공한다.',
        url: 'https://www.wee.go.kr/home/main/main.do'
      },
      {
        id: 8,
        name: '자살예방센터',
        description: '서울시민의 자살률 감소를 위해 지역단위 밀착형 예방사업을 통해 자살예방의 안전망을 구축하는 센터이다.',
        url: 'https://www.suicide.or.kr/'
      }
    ],
    '진로탐색': [
      {
        id: 9,
        name: '청년도전지원사업',
        description: '고용노동부에서 운영하는 프로그램으로, 취업에 어려움을 겪는 청년들에게 진로탐색과 취업역량 강화 프로그램을 제공한다.',
        url: 'https://www.gov.kr/portal/rcvfvrSvc/dtlEx/449000000143'
      },
      {
        id: 10,
        name: '서울시 일자리포털',
        description: '서울시에 거주하는 만 18세 이상 34세 이하 청년 대상으로 취업 교육, 멘토링, 취업 상담, 인턴십 기회 등을 제공한다.',
        url: 'https://job.seoul.go.kr/Main.do?method=getMain'
      },
      {
        id: 11,
        name: '서울창업카페',
        description: '예비·초기 창업자들을 위해 열린 공간으로 업무 공간 제공, 네트워킹 행사 등 다양한 프로그램을 제공한다.',
        url: 'https://hongdae.startup-plus.kr/'
      },
      {
        id: 12,
        name: '여성능력개발원',
        description: '서울특별시에서 운영하는 사업으로, 여성 청년들의 진로탐색과 직업능력 개발을 지원하여 여성이 진입할 수 있는 좋은 일자리를 마련한다.',
        url: 'https://swrd.seoulwomanup.or.kr/'
      },
      {
        id: 13,
        name: '기술교육원',
        description: '서울특별시에서 운영하는 사업으로, 취업 역량 강화 및 지역 수요 반영 학과를 운영하여 다양한 기술 분야에서 청년들의 직업능력 향상을 지원한다.',
        url: 'https://www.dbedu.or.kr/user/main/mainIndex.do'
      },
      {
        id: 14,
        name: '사회적경제지원센터',
        description: '전국 각 지역에 위치한 센터로, 사회 및 경제 분야에 관심 있는 청년들을 위한 교육과 지원을 제공하여 건강하고 지속가능한 생태계 조성을 목표로 한다.',
        url: 'https://gdse.org/'
      },
      {
        id: 15,
        name: '중소기업지원센터',
        description: '중소기업의 경쟁력 강화와 성장을 지원하는 기관으로 청년창업사관학교, 인력양성 사업 등을 통해 인력을 확보한다.',
        url: 'https://www.xn--ok0b647a2ga72mfob27fd9aj18a.org/'
      },
      {
        id: 16,
        name: '평생학습포털',
        description: '전국 각 지역에서 운영하는 포털로, 국민 누구나 언제 어디서나 학습할 수 있도록 다양한 온라인 교육 콘텐츠를 제공하는 플랫폼이다.',
        url: 'https://sll.seoul.go.kr/'
      }
    ],
    '취미/자기계발': [
      {
        id: 17,
        name: '국립중앙 디지털도서관',
        description: '국립중앙도서관에서 제공하는 디지털 자료 서비스로, 다양한 전자책과 학술 자료를 온라인으로 열람할 수 있다.',
        url: 'https://www.nl.go.kr/NL/contents/N40403000000.do'
      },
      {
        id: 18,
        name: 'K-MOOC',
        description: '교육부에서 운영하는 한국형 온라인 공개강좌 플랫폼으로, 대학 수준의 다양한 강의를 무료로 제공한다.',
        url: 'https://www.kmooc.kr/'
      },
      {
        id: 19,
        name: '클래스101',
        description: '드로잉, 요리, 사진, 재테크, 프로그래밍, 외국어 등 다양한 분야의 온라인 취미 강좌를 제공하며, 준비물까지 함께 배송하여 집에서 쉽게 취미를 시작할 수 있도록 지원한다.',
        url: 'https://class101.net/ko'
      },
      {
        id: 20,
        name: '하비박스',
        description: '취미 분석 테스트를 통해 개인에게 맞는 취미 상자를 정기적으로 배송해 주는 서비스로, 새로운 취미를 쉽게 시작할 수 있다.',
        url: 'http://www.hobbybox.life/'
      },
      {
        id: 21,
        name: '만개의레시피',
        description: '다양한 요리 레시피와 함께 동영상 강좌를 제공하여 초보자도 쉽게 요리를 배울 수 있도록 지원해준다.',
        url: 'https://www.10000recipe.com/'
      },
      {
        id: 22,
        name: '비디오빌리지',
        description: '영상 제작과 편집에 대한 온라인 강좌를 제공하며, 유튜브 콘텐츠 제작에 필요한 다양한 정보를 제공한다.',
        url: 'http://www.videovillage.co.kr/'
      },
      {
        id: 23,
        name: '듀오링고',
        description: '게임 형식으로 다양한 외국어를 학습할 수 있는 무료 온라인 플랫폼으로, 재미있게 언어를 배울 수 있다.',
        url: 'https://www.duolingo.com/'
      },
      {
        id: 24,
        name: '인프런',
        description: '프로그래밍, 인공지능, 게임, 디자인 등 다양한 IT 분야의 온라인 강좌를 제공하며, 실무 중심의 커리큘럼을 갖추고 있다.',
        url: 'https://www.inflearn.com/'
      }
    ],
    '건강관리': [
      {
        id: 25,
        name: '국민건강보험공단 건강IN',
        description: '국민건강보험공단에서 제공하는 온라인 건강관리 서비스로, 개인별 맞춤형 건강정보와 생활습관 개선을 위한 다양한 콘텐츠를 제공한다.',
        url: 'https://www.nhis.or.kr/nhis/healthin/retrieveMyHealthCareInfo.do'
      },
      {
        id: 26,
        name: '건강생활실천지원금제',
        description: '건강관리가 필요한 국민을 대상으로 건강생활을 실천하는 과정 등에 대해 금전적 인센티브(포인트)를 제공하는 사업이다.',
        url: 'https://www.nhis.or.kr/nhis/healthin/healthIncvInt.do'
      },
      {
        id: 27,
        name: '한국건강관리협회 종합건강검진',
        description: '다양한 종합건강검진 프로그램을 제공하여 개인의 건강 상태를 종합적으로 평가하고 관리할 수 있도록 지원한다.',
        url: 'https://www.kahp.or.kr/ho/hlthChk/cprsvchk/cprsvchkIntro.do'
      },
      {
        id: 28,
        name: '국민체육진흥공단 스포츠강좌이용권',
        description: '저소득층을 대상으로 스포츠 강좌 수강료를 지원하여, 다양한 체육 활동 참여를 장려하는 프로그램이다.',
        url: 'https://svoucher.kspo.or.kr/main.do'
      },
      {
        id: 29,
        name: '대한체육회 e진로지원센터',
        description: '온라인을 통해 다양한 스포츠 종목의 기초 지식과 운동 방법을 학습할 수 있는 프로그램을 제공한다.',
        url: 'https://welfare.sports.or.kr/'
      },
      {
        id: 30,
        name: '국민체력100',
        description: '국민의 체력 및 건강 증진에 목적을 두고 체력 상태를 과학적 방법에 의해 측정 및 평가하여, 개인별 맞춤형 운동 처방을 제공해주는 대국민 스포츠 복지 서비스이다.',
        url: 'https://nfa.kspo.or.kr/intro/intro.kspo'
      },
      {
        id: 31,
        name: '생활습관 개선 클리닉',
        description: '삼성서울병원 건강의학센터에서 운영하는 클리닉으로 비만, 흡연, 운동 부족 등 생활습관 개선을 위한 체계적인 프로그램을 제공한다.',
        url: 'http://www.samsunghospital.com/home/healthMedical/private/lifeClinicIntro.do'
      },
      {
        id: 32,
        name: '더쉼 마인드바디 센터',
        description: '생활습관 개선 프로그램을 통해 기분 장애의 재발 방지를 위한 대책을 제공한다.',
        url: 'http://www.theshim-snuh.com/'
      }
    ],
  '문화생활': [
    {
      id: 33,
      name: '인터파크 티켓',
      description: '뮤지컬, 연극, 콘서트 등 다양한 공연의 예매를 지원하는 플랫폼으로, 최신 공연 정보와 할인 혜택을 제공한다.',
      url: 'https://tickets.interpark.com/'
    },
    {
      id: 34,
      name: '플레이티켓',
      description: '중소극장 중심의 작은 공연을 위한 공연 예매 사이트로, 공연예술 아티스트 팬 커뮤니티 어플인 스테이지타운을 통해 아티스트와 팬들이 소통할 수 있는 공간도 제공한다.',
      url: 'https://www.playticket.co.kr/'
    },
    {
      id: 35,
      name: '예술의 전당',
      description: '서울에 위치한 대표적인 문화예술 공간으로 공연, 오페라, 전시 등을 정기적으로 개최한다.',
      url: 'https://www.sac.or.kr/site/main/home'
    },
    {
      id: 36,
      name: '세종문화회관',
      description: '서울에 위치한 복합 문화공간으로 다양한 공연과 전시, 행사를 개최하고 있다. 한국 공연예술의 중심지로서 많은 문화예술 프로그램을 선보이며, 시민들의 문화예술 향유 기회를 확대하고자 교육 프로그램과 체험 활동도 운영한다.',
      url: 'https://www.sejongpac.or.kr/portal/main/main.do'
    },
    {
      id: 37,
      name: '전통문화체험관',
      description: '전국 각 지역에 위치하여 한국의 전통문화를 직접 체험할 수 있는 공간으로 한복 입기, 다도, 전통 공예 등 다양한 프로그램을 통해 전통문화를 배우고 경험할 수 있다.',
      url: 'https://tradition.oc.go.kr/introduce.asp?location=001'
    },
    {
      id: 38,
      name: '문화가 있는 날',
      description: '문화체육관광부에서 매달 마지막 수요일과 그 주간에 다양한 문화 혜택을 제공하여, 국민이 일상에서 문화를 쉽게 접할 수 있도록 지원하는 프로그램이다.',
      url: 'https://culture.go.kr/wday/contents/business.do'
    },
    {
      id: 39,
      name: '아트센터 나비',
      description: '디지털 아트를 중심으로 다양한 전시와 프로그램을 운영하는 센터로 특히 로봇, 인공지능 등 첨단 기술을 활용한 전시를 통해 새로운 예술 경험을 제공한다.',
      url: 'https://www.nabi.or.kr/'
    },
    {
      id: 40,
      name: '서울시립미술관',
      description: '현대미술을 중심으로 다양한 전시와 프로그램을 운영하며 서소문본관, 북서울미술관 등 여러 분관에서 전시와 교육 프로그램을 제공한다.',
      url: 'https://sema.seoul.go.kr/kr/index'
    }
  ]
};

institutions['전체'] = Object.values(institutions)
  .flat()
  .filter((item, index, self) => 
    index === self.findIndex((t) => t.id === item.id)
  );

  return (
    <Container>
      <CustomHeader>
        <BackButton onClick={handleBackClick}>
          <FaChevronLeft />
        </BackButton>
        <HeaderTitle>외부 프로그램 기관</HeaderTitle>
        <HeaderImage src={GPS} alt="header icon" onClick={()=>navigate('/organization/map')}/>
      </CustomHeader>
      <CategoryContainer>
        <CategoryBar>
          {categories.map((category) => (
            <CategoryButton
              key={category.id}
              selected={selectedCategory === category.name}
              onClick={() => setSelectedCategory(category.name)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryBar>
      </CategoryContainer>

      <Contents>
        <InstitutionList>
          {institutions[selectedCategory]?.map((institution) => (
            <InstitutionCard key={institution.id}>
              <InstitutionTitle>{institution.name}</InstitutionTitle>
              <InstitutionDescription>{institution.description}</InstitutionDescription>
              <InquiryButton 
                href={institution.url} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                자세히 보기
              </InquiryButton>
            </InstitutionCard>
          )) || (
            <EmptyMessage>
              {selectedCategory} 카테고리의 기관이 없습니다.
            </EmptyMessage>
          )}
        </InstitutionList>
      </Contents>
      
      <Navbar />
    </Container>
  );
}

export default OrganizationList;