import styled from "styled-components"
import { Room, Teacher } from "../Details"

const Td = ({ today, subject }) => {
    return <WrapTd show={subject.ShortName}>
        <WrapDiv>
            <Name>{subject.ShortName}</Name>
            <Teacher>{subject.Teacher}</Teacher>
            <Room>{subject.Room}</Room>
        </WrapDiv>
    </WrapTd>
}

const WrapTd = styled.td`
color: ${({ show, theme }) => show ? theme.text.default : theme.box.default};
background-color: ${({ theme }) => theme.box.default};
padding: .4em;
border-radius: 9px;
text-align: center;

word-break: keep-all;
`

const WrapDiv = styled.div`
width: 4em;
height: 4em;

margin: 0 auto;

transition: all .25s;
transition-timing-function: ease-in;
text-align: center;
`

const Name = styled.p`
display: block;
margin-top: .5em;
margin-bottom: .5em;
font-weight: 600;
`

export default Td