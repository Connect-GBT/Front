import styled from "styled-components"

export const ResumeContainer = styled.textarea`
  width: 280px;
  height: 400px;
  border: 2px solid #3B7D79;
  border-radius: 10px;
  resize: none;
  font-size: 16px;
  line-height: 1.5;
  font-family: inherit;
  outline: none;
  padding: 15px;
  
  &::placeholder {
    color: #999;
  }
`;

export const SubmitButton = styled.button`
  width: 300px;
  height: 50px;
  background-color: #3B7D79;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;