import styled from "styled-components"
import Td from "components/tables/full/Td"

const Table = ({subjects}) => {
    if (!subjects) return null
    return <WrapTable>
        <tbody>
            {
                [...Array(subjects[0].length).keys()].map(si => { // subject index in a day
                    return <tr key={si}>
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
    </WrapTable>
}

const WrapTable = styled.table`
width: 100%;
overflow-x: scroll;
border: none;
font-size: 1rem;
border-spacing: 0.5rem;
border-collapse: separate !important;
`

export default Table