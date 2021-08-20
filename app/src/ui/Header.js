import styled from "styled-components"

const Header = ({ left, center, right }) => {
    return <Div>
        <Contents>
            <ItemLeft>{left}</ItemLeft>
            <ItemCenter>{center}</ItemCenter>
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