import styled from "styled-components"

const Header = ({ title, scrolled, left, right }) => {
    return <Div>
        <Contents>
            <ItemLeft>{left}</ItemLeft>
            <ItemCenter><Title scrolled={scrolled}>{title}</Title></ItemCenter>
            <ItemRight>{right}</ItemRight>
        </Contents>
    </Div>
}

const Div = styled.div`
background-color: ${({ theme }) => theme.bg};

display: flex;
justify-content: center;
align-items: center;

position: sticky;
top: 0;
left: 0;
padding: .1rem;
padding-top: calc(env(safe-area-inset-top) + .1rem);

font-weight: 600;
font-size: 1.2rem;

z-index: 100;
`

const Title = styled.h1`
font-size: 1rem;

color: ${({ theme }) => theme.text.default};
opacity: ${props => (props.scrolled ? "1" : "0")};
transition: opacity .15s;
transition-timing-function: ease-out;

margin: 0;
`

const Contents = styled.div`
width: 100%;
margin-left: auto;
margin-right: auto;
max-width: 600px;

display: flex;
flex-flow: row wrap;
`

const Item = styled.div`
width: 33.33%;
margin: .25em auto;
`

const ItemLeft = styled(Item)`
text-align: left;
`

const ItemCenter = styled(Item)`
text-align: center;
`

const ItemRight = styled(Item)`
text-align: right;
`

export default Header