import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html {
    height: 100%;
    scroll-behavior: smooth;
}
#root {
    height: 100vh;
}
* {
    font-family: -apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', Pretendard, Roboto, 'Noto Sans KR', 'Segoe UI', 'Malgun Gothic', sans-serif;
}
body {
    font-size: 80%;
}
@media (prefers-color-scheme: dark) { 
    body {
        background-color: #17171B;
    }
}
`

export default GlobalStyles