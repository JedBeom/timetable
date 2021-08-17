import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html, body {
    height: 100%;
    scroll-behavior: smooth;
    padding: 0;
    margin: 0;
}

* {
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif;
}

body {
    font-size: 80%;
    -webkit-tap-highlight-color: transparent;
}

@media (prefers-color-scheme: dark) { 
    body {
        background-color: #17171B;
    }
}

svg {
    position: relative;
    top: .15em;
    width: 1em;
    height: 1em;
}
`

export default GlobalStyles