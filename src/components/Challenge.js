import styled from "styled-components"
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 360px;
`
const SmallTitle = styled.div`
    color: rgba(0, 0, 0, 0.52);
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 400;
    padding-top: 20px;
`
const Title = styled.div`
    font-family: NanumSquareRound;
    font-size: 25px;
    font-weight: 800;
    padding-right: 70px;
    padding-top: 5px;
`
const Writer = styled.div`
    font-family: NanumSquareRound;
    font-size: 14px;
    font-weight: 400;
    padding-left: 230px;
    padding-bottom: 10px;
    padding-top: 15px;
`
const Line = styled.div`
    width: 358px;
    height: 1px;
    background-color: black;
`

export const ChallengeComponents = ({smalltitle, title, writer}) => {
    return(
        <Content>
            <TitleContainer>
            <SmallTitle>{smalltitle}</SmallTitle>
            <Title dangerouslySetInnerHTML={{__html: title}}/>
            </TitleContainer>
            <Writer>{writer}</Writer>
            <Line/>
        </Content>
    )
}
