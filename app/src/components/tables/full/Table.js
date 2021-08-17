import styled from "styled-components"
import Td from "components/tables/full/Td"
import {Times, HangulWorkdays} from "define/times"
import { Pause, PauseCircle, Play, PlayCircle, Sunrise, Sunset } from "../../../../node_modules/react-feather/dist/index"

const Table = ({subjects}) => {
    if (!subjects) return null
    return <Container>
        <StyledTable>
        <thead>
            {HangulWorkdays.map((v, i) => <Workday key={i}>{v}</Workday>)}
        </thead>
        <tbody>
            {
                [...Array(subjects[0].length).keys()].map(si => { // subject index in a day
                    return <tr key={si}>
                        <Order>
                            {si+1}교시
                            <StartAt><Play size="1em"/>{Times[si].s}</StartAt>
                            <EndAt><Pause size="1em"/>{Times[si].e}</EndAt>
                        </Order>
                        {[...Array(subjects.length).keys()].map(di => { // day index

                            if (!subjects[di][si]) {
                                return <td/>
                            }
                            return <Td key={`${di}${si}`} subject={subjects[di][si]}/>
                        })}
                    </tr>
                })
            }
        </tbody>
    </StyledTable>
    </Container>
}

const Workday = styled.td`
text-align: center;
min-width: 3.5rem;
`

const Order = styled.td`
font-size: .75em;
font-weight: 900;
`

const StartAt = styled.p`
font-size: 1em;
display: block;
font-weight: 300;
word-break: keep-all;
margin-top: .5em;
margin-bottom: 0;
`

const EndAt = styled(StartAt)`
margin-top: 0;
`

const StyledTable = styled.table`
width: 100%;
border: none;
font-size: 1rem;
border-spacing: 0.5rem;
border-collapse: separate !important;
`

const Container = styled.div`
width: 100%;
overflow-x: scroll;
`

export default Table