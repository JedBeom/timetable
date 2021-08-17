import styled from "styled-components"
import Link from "ui/Link"

const StyledButton = styled.button`
border: none;
margin: 0;
padding: 0;
width: auto;
overflow: visible;

background: transparent;

color: inherit;
font: inherit;

line-height: normal;

-webkit-font-smoothing: inherit;
-moz-osx-font-smoothing: inherit;

-webkit-appearance: none;

color: ${({theme}) => theme.text.sub};
font-size: 1.1rem;
margin-right: 1em;

`

const SwitchButton = ({to, icon, text}) => <Link to={to}><StyledButton>{icon} {text}</StyledButton></Link>

export default SwitchButton