import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Contents } from '../../components/Layout';
import { Header } from '../../components/Header';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/NavBar';

const SurveyContainer = styled.div`
  width: 100%;
`;

const QuestionSection = styled.div`
  margin-bottom: 20px;
  padding-top: 15px;
  padding-left: 15px;
`;

const QuestionTitle = styled.div`
  font-family: NanumSquareRound;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 15px;
`;


const OptionContainer = styled.div`
  font-family: NanumSquareRound;
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  gap: 10px;
`;

const RadioInput = styled.input`
  width: 20px;
  height: 20px;
`;

const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
`;

const OptionLabel = styled.label`
  font-size: 14px;
`;

const TextInput = styled.input`
  width: 200px;
  height: 30px;
  margin-left: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 10px;
`;

const SubmitButton = styled.div`
  width: 300px;
  height: 45px;
  background-color: #3B7D79;
  color: white;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #2f6561;
  }
`;

function Test() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    age: '',
    activityPeriod: '',
    reasons: [],
    otherReason: '',
    socialRelations: {},
    familyRelations: {},
    friendRelations: {},
    workExperience: {},
    communitySupport: {}
  });

  const handleBackClick = () => {
    navigate(-1);
  };

  const handleInputChange = (section, id, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: { ...prev[section], [id]: value }
    }));
  };

  const handleCheckboxChange = (value) => {
    setFormData(prev => ({
      ...prev,
      reasons: prev.reasons.includes(value)
        ? prev.reasons.filter(item => item !== value)
        : [...prev.reasons, value]
    }));
  };

  const ageOptions = [
    { id: '1', text: '18세 이하' },
    { id: '2', text: '19~24세' },
    { id: '3', text: '25~29세' },
    { id: '4', text: '30~34세' },
    { id: '5', text: '35~39세' },
    { id: '6', text: '40세 이상' }
  ];

  const activityPeriodOptions = [
    { id: '1', text: '1개월 이내' },
    { id: '2', text: '1개월 이상 3개월 이내' },
    { id: '3', text: '3개월 이상 6개월 이내' },
    { id: '4', text: '6개월 이상 1년 이내' },
    { id: '5', text: '1년 이상 3년 이내' },
    { id: '6', text: '3년 이상 5년 이내' },
    { id: '7', text: '5년 이상 10년 이내' },
    { id: '8', text: '10년 이상' }
  ];

  const reasonOptions = [
    { id: '1', text: '취업이 잘 되지 않아서' },
    { id: '2', text: '인간관계가 잘 되지 않아서' },
    { id: '3', text: '가족의 어려움으로' },
    { id: '4', text: '학업의 중단으로' },
    { id: '5', text: '대학 진학 실패로' },
    { id: '6', text: '몸이 아프거나 불편해서' },
    { id: '7', text: '임신이나 출산으로 인해' },
    { id: '8', text: '특별한 이유는 없음' },
    { id: '9', text: '기타' }
  ];



  return (
    <Container>
      <Header title="종합테스트" onBackClick={handleBackClick} />
      <Contents>
        <SurveyContainer>
          <QuestionSection>
            <QuestionTitle>1. 본인의 연령대를 선택해주세요. (만 나이 기준)</QuestionTitle>
            {ageOptions.map((option) => (
              <OptionContainer key={option.id}>
                <RadioInput
                  type="radio"
                  id={`age${option.id}`}
                  name="age"
                  value={option.id}
                  onChange={(e) => handleInputChange('age', option.id, e.target.value)}
                />
                <OptionLabel htmlFor={`age${option.id}`}>{option.text}</OptionLabel>
              </OptionContainer>
            ))}
          </QuestionSection>

          <QuestionSection>
            <QuestionTitle>2. 외부 활동을 거의 안 한지는 얼마나 되셨나요?</QuestionTitle>
            {activityPeriodOptions.map((option) => (
              <OptionContainer key={option.id}>
                <RadioInput
                  type="radio"
                  id={`period${option.id}`}
                  name="activityPeriod"
                  value={option.id}
                  onChange={(e) => handleInputChange('activityPeriod', option.id, e.target.value)}
                />
                <OptionLabel htmlFor={`period${option.id}`}>{option.text}</OptionLabel>
              </OptionContainer>
            ))}
          </QuestionSection>

          <QuestionSection>
            <QuestionTitle>3. 집, 또는 방 안에서만 지내는 생활이 지속되는 가장 큰 이유는 무엇인가요?</QuestionTitle>
            {reasonOptions.map((option) => (
              <OptionContainer key={option.id}>
                <CheckboxInput
                  type="checkbox"
                  id={`reason${option.id}`}
                  checked={formData.reasons.includes(option.id)}
                  onChange={() => handleCheckboxChange(option.id)}
                />
                <OptionLabel htmlFor={`reason${option.id}`}>
                  {option.text}
                  {option.text === '기타' && (
                    <TextInput
                      type="text"
                      value={formData.otherReason}
                      onChange={(e) => setFormData(prev => ({ ...prev, otherReason: e.target.value }))}
                      placeholder="기타 사유를 입력하세요"
                    />
                  )}
                </OptionLabel>
              </OptionContainer>
            ))}
          </QuestionSection>

          
        </SurveyContainer>
        <SubmitButton onClick={() => console.log(formData)}>
          결과 보기
        </SubmitButton>
      </Contents>
      <Navbar/>
    </Container>
  );
}

export default Test;