import { replaceElectiveSubjects } from "utils/timetable"
import { Art, Foreign, ElecA, ElecB, ElecC, ElecD } from "define/subjects"
import axios from "../../node_modules/axios/index"

const getTimetable = async (Grade, Class) => {
  const {data} = await axios.get(`data/class-timetables.json`)
  if (!data) throw Error("data is undefined") 

  return data[Grade-1][Class-1]
}

const mockElectiveSubjectsToUser = {
  [Art]: 0,
  [Foreign]: 25,
  [ElecA]: 12,
  [ElecB]: 13,
  [ElecC]: 6,
  [ElecD]: 3,
}

const getElectiveSubjectsToUser = () => mockElectiveSubjectsToUser

const getElectiveSubjects = async (Grade) => {
  const {data} = await axios.get(`data/elective-subjects.json`)
  if (!data) throw Error("data is undefined")

  return data.filter(e => e.Grade === Grade)
}

const getProcessedSubjects = async () => {
  let timetable = await getTimetable(2, 8)
  const es = await getElectiveSubjects(2)
  const es2u = getElectiveSubjectsToUser()
  timetable.Subjects = replaceElectiveSubjects(timetable.Subjects, es, es2u)
  return timetable
}

export {getTimetable, getElectiveSubjectsToUser, getElectiveSubjects, getProcessedSubjects}