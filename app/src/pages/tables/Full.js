import {getProcessedSubjects} from "api/api"
import Table from "components/tables/full/Table"
import { useEffect, useState } from "react"
import View from "ui/View"
import { Clock, Layers } from "../../../node_modules/react-feather/dist/index"
import SwitchButton from "components/SwitchButton"

const FullView = () => {
    const [subjects, setSubjects] = useState()
    const get = async () => {
        const timetable = await getProcessedSubjects()
        setSubjects(timetable.Subjects)
    }

    useEffect(() => {
        get()
    }, [])

    return <View icon={<Clock />} headerLeft={<div/>} headerRight={<SwitchButton to="/card" icon={<Layers/>} text="카드 보기"/>} title="시간표">
        <Table subjects={subjects}/>
    </View>
}

export default FullView