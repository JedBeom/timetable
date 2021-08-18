import styled from "styled-components"
import { MapPin, User } from "../../../../node_modules/react-feather/dist/index"

const Td = ({ today, subject }) => {
    return <WrapTd show={subject.ShortName}>
        <WrapDiv>
            <Name>{subject.ShortName}</Name>
            {subject.Teacher ? <Teacher><User />{subject.Teacher}</Teacher> : null}
            {subject.Room ? <Room><MapPin />{subject.Room}</Room> : null}
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
min-width: 3.5rem;
height: 4em;

transition: all .25s;
transition-timing-function: ease-in;
`

const Name = styled.p`
display: block;
margin-top: .5em;
margin-bottom: .5em;
font-weight: 600;
`

const Teacher = styled.p`
display: block;
margin-top: 0;
margin-bottom: .25em;

font-weight: 300;
font-size: .75em;
`

const Room = Teacher

export default Td