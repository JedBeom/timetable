import styled from "styled-components"

const Header = ({title, scrolled}) => {
    return <Div>
        <Title scrolled={scrolled}>{title}</Title>
    </Div>
}

const Div = styled.div`
background-color: ${({theme}) => theme.bg};
background-size: 100%;

width: 100%auto;

display: flex;
align-items: center;
justify-content: center;

overflow: hidden;

position: sticky;
top: 0;
left: 0;
padding: .25rem;
padding-top: calc(env(safe-area-inset-top) + .5rem);

font-weight: 600;
font-size: 1.2rem;

z-index: 100;

pointer-events: none;

`

const Title = styled.h1`
font-size: 1rem;

color: ${({theme}) => theme.text.default};
opacity: ${props => (props.scrolled? "1" : "0")};
transition: opacity .15s;
transition-timing-function: ease-out;
`

export default Header