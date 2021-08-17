import { SkSubject } from "define/skeletons";
import styled from "styled-components";

const StyledCard = styled.div`
border-radius: 1rem;
background-color: ${({active, theme}) => active ? theme.box.primary : theme.box.default};
width: 100%;
height: 7rem;
`

const Card = ({si, subject}) => {
	return <StyledCard active>
		{si} {subject.FullName}
	</StyledCard>
}

Card.defaultProps = {
	subject: SkSubject,
}

export default Card