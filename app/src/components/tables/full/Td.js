import styled from "styled-components"

const Td = ({today, subject}) => {
    return <WrapTd>
        <Name>{subject.ShortName}</Name>    
        <Teacher>{subject.Teacher}</Teacher>    
    </WrapTd>
}

const WrapTd = styled.td`
color: ${({theme}) => theme.text.default};
background-color: ${({theme}) => theme.box.default};
padding: .4em;
border-radius: 9px;

word-break: keep-all;
`

const Name = styled.p`
display: block;
font-weight: 600;
`

const Teacher = styled.p`
display: block;
font-weight: 300;
font-size: .75em;
`

export default Td