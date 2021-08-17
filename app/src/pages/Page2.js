import {getProcessedSubjects} from "api/api"
import Table from "components/tables/full/Table"
import { useEffect, useState } from "react"
import View from "ui/View"
import { Clock } from "../../node_modules/react-feather/dist/index"

const Page2 = () => {
    const [subjects, setSubjects] = useState()
    const get = async () => {
        const timetable = await getProcessedSubjects()
        setSubjects(timetable.Subjects)
    }

    useEffect(() => {
        get()
    }, [])

    return <View icon={<Clock size="2rem"/>} title="시간표">
        <Table subjects={subjects}/>
    </View>
}

export default Page2