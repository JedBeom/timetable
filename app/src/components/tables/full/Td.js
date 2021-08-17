import styled from "styled-components"

const Td = ({today, subject}) => {
    return <WrapTd>
        <Name>{subject.ShortName}</Name>    
        <Teacher>{subject.Teacher}</Teacher>    
        <Room>{subject.Room}</Room>
    </WrapTd>
}

const WrapTd = styled.td`
color: ${({theme}) => theme.text.default};
background-color: ${({theme}) => theme.box.default};
padding: .4em;
border-radius: 9px;
min-width: 3.5rem;
text-align: center;

word-break: keep-all;
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
margin-bottom: .5em;

font-weight: 300;
font-size: .75em;
`

const Room = Teacher

export default Td