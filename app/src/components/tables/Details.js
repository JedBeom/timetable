import styled from "styled-components"
import { User, MapPin, Clock as ClockIcon } from "react-feather"

const StyledP = styled.p`
font-size: 1em;

display: block;
margin-top: 0;
margin-bottom: .25em;

font-weight: 300;
font-size: .75em;
`

const Base = ({ icon, children }) => {
    if (!children) return null

    return <StyledP>{icon} {children}</StyledP>
}

export const Teacher = ({ children }) => <Base icon={<User />}>{children}</Base>

export const Room = ({ children }) => <Base icon={<MapPin />}>{children}</Base>

export const Clock = ({ children }) => <Base icon={<ClockIcon />}>{children}</Base>