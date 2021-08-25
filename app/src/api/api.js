import { replaceElectiveSubjects } from "utils/timetable"
import { Art, Foreign, ElecA, ElecB, ElecC, ElecD } from "define/subjects"
import axios from "axios"
import lscache from "lscache"

const getTimetable = async (Grade, Class) => {
    const key = `timetable/${Grade}-${Class}`

    const item = lscache.get(key)
    if (item) return item

    const { data } = await axios.get(`data/class-timetables.json`)
    if (!data) throw Error("data is undefined")

    const timetable = data[Grade - 1][Class - 1]

    lscache.set(key, timetable, 3 * 24 * 60)

    return timetable
}

const mockElectiveSubjectsToUser = {
    [Art]: 16,
    [Foreign]: 25,
    [ElecA]: 12,
    [ElecB]: 13,
    [ElecC]: 6,
    [ElecD]: 3,
}

const getElectiveSubjectsToUser = () => mockElectiveSubjectsToUser

const getElectiveSubjects = async (Grade) => {
    const key = `elective-subjects/${Grade}`
    const item = lscache.get(key)
    if (item) return item

    const { data } = await axios.get(`data/elective-subjects.json`)
    if (!data) throw Error("data is undefined")
    const byGrade = data.filter(e => e.Grade === Grade)

    lscache.set(key, byGrade, 3 * 24 * 60)

    return byGrade
}

const getProcessedSubjects = async () => {
    let timetable = await getTimetable(2, 8)
    const es = await getElectiveSubjects(2)
    const es2u = getElectiveSubjectsToUser()
    timetable.Subjects = replaceElectiveSubjects(timetable.Subjects, es, es2u)
    return timetable
}

export { getTimetable, getElectiveSubjectsToUser, getElectiveSubjects, getProcessedSubjects }