import { useEffect } from "react"
import styled from "styled-components"

import Header from "ui/Header"
import { NtoBr } from "utils/html"

const View = ({ icon, title, headerLeft, headerRight, children }) => {

    useEffect(() => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" })
    }, [])

    return <>
        <Header left={headerLeft} right={headerRight} />
        <Contents>
            {title ? <Title>{icon} {NtoBr(title)}</Title> : null}
            {children}
        </Contents>
    </>
}

const Contents = styled.div`
margin: 0 auto;
padding: 0 .75rem 5rem .75rem;
max-width: 600px;
font-size: 1rem;

color: ${({ theme }) => theme.text.default}
`

const Title = styled.h1`
font-weight: 900;
font-size: 2rem;
line-height: 1.2em;
`

export default View