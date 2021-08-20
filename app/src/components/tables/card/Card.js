import { SkSubject } from "define/skeletons";
import styled from "styled-components";
import { Room, Teacher } from "../Details";

const StyledCard = styled.div`
padding: .5rem;
border-radius: 1rem;
color: ${({ theme }) => theme.text.default};
background-color: ${({ active, theme }) => active ? theme.box.primary : theme.box.default};
width: 80%;

font-size: 1.25rem;

margin-left: auto;
margin-right: auto;
height: 7rem;

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Card = ({ order, subject }) => {
	return <StyledCard active>
		<SubjectName><Order>{order}교시</Order> {subject.FullName}</SubjectName>
		<DetailWrapper>
			<Teacher>{subject.Teacher} 선생님</Teacher>
			<Room>{subject.Room}</Room>
		</DetailWrapper>
	</StyledCard>
}

const Order = styled.h3`
font-weight: 500;
margin: 0;
font-size: .75em;
display: inline-block;
`

const SubjectName = styled.h2`
margin: 0;
font-size: 2rem;
`

const DetailWrapper = styled.div`
margin-top: 1em;
width: 70%;
display: flex;
justify-content: center;

& p {
	margin: 0 .25em;
}
`

Card.defaultProps = {
	subject: SkSubject,
}

export default Card