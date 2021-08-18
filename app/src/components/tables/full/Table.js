import styled from "styled-components"
import Td from "components/tables/full/Td"
import {SesText, HangulWorkdays} from "define/times"
import { Pause, Play } from "../../../../node_modules/react-feather/dist/index"
import { SkSubjectsWeek } from "define/skeletons"

const Table = ({subjects}) => {
    return <Container>
        <StyledTable>
        <thead>
            <tr>
                {HangulWorkdays.map((v, i) => <Workday key={i}>{v}</Workday>)}
            </tr>
        </thead>
        <tbody>
            {
                [...Array(subjects[0].length).keys()].map(si => { // subject index in a day
                    return <tr key={si}>
                        <Order>
                            {si+1}교시
                            <StartAt><Play size="1em"/>{SesText[si].s}</StartAt>
                            <EndAt><Pause size="1em"/>{SesText[si].e}</EndAt>
                        </Order>
                        {[...Array(subjects.length).keys()].map(di => { // day index

                            if (!subjects[di][si]) {
                                return <td key={`${di}${si}`}/>
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

Table.defaultProps = {
    subjects: SkSubjectsWeek,
}

const Workday = styled.td`
text-align: center;
min-width: 3.5rem;
`

const Order = styled.td`
background-color: ${({theme}) => theme.bg};
z-index: 50;

font-size: .75em;
font-weight: 900;

margin-left: 0;

position: sticky;
left: 0;
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