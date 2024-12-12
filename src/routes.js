import AdaptMain from "./pages/Adaptation/AdaptMain";
import AiChat from "./pages/Adaptation/AiChat/AiChat";
import AiChatMain from "./pages/Adaptation/AiChat/AiChatMain";
import AiChatFeedBack from "./pages/Adaptation/AiChat/ChatFeedBack";
import ChatLoading from "./pages/Adaptation/AiChat/ChatLoading";
import Role from "./pages/Adaptation/AiChat/Role";
import Conversation from "./pages/Adaptation/Conversation/Conversation";
import Subject from "./pages/Adaptation/Conversation/Subject";
import TextFeedBack from "./pages/Adaptation/TextSimulation/TextFeedBack";
import TextLoading from "./pages/Adaptation/TextSimulation/TextLoading";
import TextMain from "./pages/Adaptation/TextSimulation/TextMain";
import TextSimulation from "./pages/Adaptation/TextSimulation/TextSimulation";
import Challenge from "./pages/Challenge/ChallengeMain";
import ChallengeStatus from "./pages/Challenge/ChallengeStatus";
import ChallengeWrite from "./pages/Challenge/ChallengeWrite";
import Community from "./pages/Challenge/Community";
import Introduction from "./pages/Landing/Introduction";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Landing/Login";
import SignUp from "./pages/Landing/Signup";
import SignUpComplete from "./pages/Landing/SignUpComplete";
import ChatBot from "./pages/MainPage/ChatBot";
import Curriculum from "./pages/MainPage/Curriculum";
import Main from "./pages/MainPage/Main";
import MyPage from "./pages/Mypage/Mypage";
import Subscirbe from "./pages/Mypage/Subscribe";
import SubscribeCheck from "./pages/Mypage/SubscribeCheck";
import Test from "./pages/Mypage/Test";
import AiConsulting from "./pages/Participation/Consulting/Consulting";
import ConsultLoading from "./pages/Participation/Consulting/ConsultLoading";
import ConsultResult from "./pages/Participation/Consulting/Cunsult_Result";
import SelfIntroduction from "./pages/Participation/Consulting/Self_Introduction";
import NewLetter from "./pages/Participation/NewsLetter";
import MapTest from "./pages/Participation/Organization/Map";
import Organization from "./pages/Participation/Organization/Organization";
import OrganizationList from "./pages/Participation/Organization/OrganizationList";
import PartMain from "./pages/Participation/Part_Main";
import Resume from "./pages/Participation/Resume";
import Sitemap from "./pages/Sitemap";
const routes = [
    {
        path: '/',
        element: <Sitemap />,
    },{
        path: '/landing',
        element: <Landing/>,
        name: '01. 랜딩 페이지'
    },{
        path: '/login',
        element: <Login/>,
        name: '02. 로그인 페이지'
    },{
        path: '/signup',
        element: <SignUp/>,
        name: '03. 회원가입 페이지'
    },{
        path: '/signupcomplete',
        element: <SignUpComplete/>,
        name: '03-1. 회원가입 완료 페이지'
    },{
        path: '/introduction',
        element: <Introduction/>,
        name: '03-2. 소개 페이지'
    },{
        path: '/main',
        element: <Main />,
        name: '04. 메인 페이지'
    }, {
        path: '/adaptmain',
        element: <AdaptMain />,
        name: '05. 사회 적응 훈련 메인 페이지'
    },{
        path: '/textsimulation',
        element: <TextSimulation/>,
        name: '06. 텍스트 시뮬레이션 메인페이지'
    },{
        path: '/textsimulation/textmain',
        element: <TextMain/>,
        name: '06-1. 텍스트 시뮬레이션 실행 페이지'
    },{
        path: '/textsimulation/textloading',
        element: <TextLoading/>,
        name: '06-2. 텍스트 시뮬레이션 로딩 페이지'
    },{
        path: '/textsimulation/textfeedback',
        element: <TextFeedBack/>,
        name: '06-3. 텍스트 시뮬레이션 피드백 페이지'
    }, {
        path: '/aichat',
        element: <AiChat />,
        name: '07. Ai 채팅방 메인 페이지'
    },{
        path: '/aichat/role',
        element: <Role/>,
        name: '07-1. Ai 채팅방 역할 설명 페이지'
    },{
        path: '/aichat/main',
        element: <AiChatMain/>,
        name: '07-2. Ai 채팅방 실행 페이지'
    },{
        path: '/aichat/loading',
        element: <ChatLoading/>,
        name: '07-3. Ai 채팅방 로딩 페이지'
    },{
        path: '/aichat/feedback',
        element: <AiChatFeedBack/>,
        name: '07-4. Ai 채팅방 피드백 페이지'
    },{
        path: '/conversation',
        element: <Conversation/>,
        name: '08. 실제 채팅 페이지'
    },{
        path: '/conversation/subject',
        element: <Subject/>,
        name: '08. 실제 채팅 페이지'
    },{
        path: '/partmain',
        element: <PartMain />,
        name: '09. 사회 참여 페이지'
    },{
        path: '/aiconsulting',
        element: <AiConsulting />,
        name: '10. 컨설팅 시작 페이지'
    },{
        path: '/aiconsulting/selfintroduction',
        element: <SelfIntroduction/>,
        name: '10-1. 자기소개서 등록 페이지'
    },{
        path: '/aiconsulting/consultloading',
        element: <ConsultLoading/>,
        name: '10-2. 컨설팅 로딩 페이지'
    },{
        path: '/aiconsulting/consultresult',
        element: <ConsultResult/>,
        name: '10-3. 컨설팅 결과 페이지'
    },{
        path: '/resume',
        element: <Resume/>,
        name: '11. 이력서 등록 페이지'
    },{
        path: '/organization',
        element: <Organization/>,
        name: '12. 외부기관 연계 페이지'
    },{
        path: '/organizationlist',
        element: <OrganizationList/>,
        name: '12-1. 외부기관 리스트 페이지'
    },{
        path: '/organization/map',
        element: <MapTest/>,
        name: '12-2. 지도'
    },{
        path: '/newsletter',
        element: <NewLetter/>,
        name: '13. 뉴스레터 읽기 페이지'
    },{
        path: '/curriculum',
        element: <Curriculum />,
        name: '14. 커리큘럼 페이지'
    },{
        path: '/challenge',
        element: <Challenge />,
        name: '15. 챌린지 페이지'
    },{
        path: '/challengewrite',
        element: <ChallengeWrite />,
        name: '15-1. 챌린지 작성 페이지'
    },{
        path: '/challengestatus',
        element: <ChallengeStatus />,
        name: '15-2. 챌린지 현황 페이지'
    },{
        path: '/community',
        element: <Community />,
        name: '15-3. 챌린지 커뮤니티 페이지'
    },{
        path: '/chatbot',
        element: <ChatBot />,
        name: '16. 챗봇 페이지'
    },{
        path: '/mypage',
        element: <MyPage />,
        name: '17. 마이페이지'
    },{
        path: '/subscribe',
        element: <Subscirbe/>,
        name: '17-1. 구독 페이지'
    },{
        path: '/subscribecheck',
        element: <SubscribeCheck/>,
        name: '17-2. 구독 정보 확인 페이지'
    },{
        path: '/test',
        element: <Test/>,
        name: '17-3. 종합 테스트 페이지'
    },
    
]
export default routes;