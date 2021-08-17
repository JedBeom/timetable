const SkSubject = {
	ShortName: "",
	FullName: "",
    Room: "",
    Teacher: "",
    AvailableBit: 0
}

const SkSubjectsInADay = Array(8).fill(SkSubject)
const SkSubjectsWeek = Array(5).fill(SkSubjectsInADay)

export {SkSubject, SkSubjectsInADay, SkSubjectsWeek}