import { useEffect, useState } from "react"
import styled from "styled-components"

import Header from "ui/Header"
import { NtoBr } from "utils/html"

const handleScroll = (setScrolled) => {
    return () => setScrolled(window.scrollY > 30)
}

const View = ({title, children}) => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        document.body.scrollIntoView({behavior: "smooth", block: "start"})
        setTimeout(() => window.addEventListener("scroll", handleScroll(setScrolled)), 200)
        
        return () => {
            window.removeEventListener("scroll", handleScroll(setScrolled))
        }
    }, [])

    return <>
    <Header scrolled={scrolled} title={title}/>
     <Wrapper>
        {title ? <Title>{NtoBr(title)}</Title> : null }
        {children}
    </Wrapper>
    </>
}

const Wrapper = styled.div`
margin: 0 auto;
padding: 0 .75rem .75rem .75rem;
max-width: 600px;
font-size: 1rem;

color: ${({theme}) => theme.text.default}
`

const Title = styled.h1`
font-weight: 900;
font-size: 2rem;
line-height: 1.2em;
`

export default View