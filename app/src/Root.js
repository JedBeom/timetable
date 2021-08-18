import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components"

import themes from "themes/theme"
import Routes from "Routes"
import { Scrollbars } from "react-custom-scrollbars-2";

const Root = () => {
    const [theme, setTheme] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")

    useEffect(() =>
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function (e) {
            setTheme(e.matches ? "dark" : "light")
        }), [])

    return <>
        <ThemeProvider theme={themes[theme]}>
            <Wrapper>
                <Scrollbars autoHeight autoHeightMax="100vh">
                    <Routes />
                </Scrollbars>
            </Wrapper>
        </ThemeProvider>
    </>
}

const Wrapper = styled.div`
background-color: ${({ theme }) => theme.bg};
height: 100%;
`

export default Root