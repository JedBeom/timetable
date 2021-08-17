import { replaceElectiveSubjects } from "utils/timetable"
import { Art, Foreign, ElecA, ElecB, ElecC, ElecD } from "define/subjects"

const mockTimetable = {
  "Grade": 2,
  "Class": 8,
  "Subjects": [
    [
      {
        "Grade": 1,
        "ShortName": "문학",
        "FullName": "문학",
        "Teacher": "성락용",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 1
      },
      {
        "Grade": 1,
        "ShortName": "영어",
        "FullName": "영어Ⅱ",
        "Teacher": "김범중",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 4
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 16
      },
      {
        "Grade": 1,
        "ShortName": "수학",
        "FullName": "수학Ⅱ",
        "Teacher": "성준우",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 2
      }
    ],
    [
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 8
      },
      {
        "Grade": 1,
        "ShortName": "영어",
        "FullName": "영어Ⅱ",
        "Teacher": "김범중",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 2
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 4
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 64
      },
      {
        "Grade": 1,
        "ShortName": "수학",
        "FullName": "수학Ⅱ",
        "Teacher": "성준우",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 1
      }
    ],
    [
      {
        "Grade": 1,
        "ShortName": "체육",
        "FullName": "운동과 건강",
        "Teacher": "조권찬",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 8
      },
      {
        "Grade": 1,
        "ShortName": "수학",
        "FullName": "수학Ⅱ",
        "Teacher": "성준우",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 1,
        "ShortName": "영어",
        "FullName": "영어Ⅱ",
        "Teacher": "김범중",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 4
      },
      {
        "Grade": 1,
        "ShortName": "창체",
        "FullName": "창체",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 1,
        "ShortName": "창체",
        "FullName": "창체",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 0
      }
    ],
    [
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 2
      },
      {
        "Grade": 1,
        "ShortName": "수학",
        "FullName": "수학Ⅱ",
        "Teacher": "성준우",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 1
      },
      {
        "Grade": 1,
        "ShortName": "체육",
        "FullName": "운동과 건강",
        "Teacher": "문일",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 8
      },
      {
        "Grade": 1,
        "ShortName": "문학",
        "FullName": "문학",
        "Teacher": "성락용",
        "Room": "",
        "AvailableBit": 0
      }
    ],
    [
      {
        "Grade": 1,
        "ShortName": "진로",
        "FullName": "진로",
        "Teacher": "오미영",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 4
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 2
      },
      {
        "Grade": 1,
        "ShortName": "문학",
        "FullName": "문학",
        "Teacher": "성락용",
        "Room": "",
        "AvailableBit": 0
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 1
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 16
      },
      {
        "Grade": 0,
        "ShortName": "",
        "FullName": "",
        "Teacher": "",
        "Room": "",
        "AvailableBit": 8
      }
    ]
  ]
}


const getTimetable = () => mockTimetable

const mockElectiveSubjectsToUser = {
    UserID: "blarblar",
    ElectiveSubjectIDs: {
        [Art]: 0,
        [Foreign]: 2,
        [ElecA]: 3,
        [ElecB]: 4,
        [ElecC]: 5,
        [ElecD]: 6,
    }
}

const getElectiveSubjectsToUser = () => mockElectiveSubjectsToUser

const mockElectiveSubjects = [
    {
        "Grade": 2,
        "ShortName": "음악",
        "FullName": "음악 감상과 비평",
        "Teacher": "송현미",
        "Room": "음악실"
    },
    {

    },
    {
        Grade: 2,
        ShortName: "일어",
        FullName: "일본어I 5/8반",
        Teacher: "박효정",
        Room: "2-8"
    },
    {
        Grade: 2,
        ShortName: "물리학II",
        Teacher: "aT",
        Roome: "aR"
    },
    {
        Grade: 2,
        ShortName: "생명과학I",
        Teacher: "bT",
        Roome: "bR"
    },
    {
        Grade: 2,
        ShortName: "심화수학II",
        Teacher: "cT",
        Roome: "cR"
    },
    {
        Grade: 2,
        ShortName: "기하",
        Teacher: "dT",
        Roome: "dR"
    }
]

const getElectiveSubjects = () => mockElectiveSubjects

const getProcessedSubjects = async () => {
  let timetable = getTimetable()
  const es = getElectiveSubjects()
  const es2u = getElectiveSubjectsToUser()
  timetable.Subjects = replaceElectiveSubjects(timetable.Subjects, es, es2u)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(timetable)
    }, 200)
  })
}

export {getTimetable, getElectiveSubjectsToUser, getElectiveSubjects, getProcessedSubjects}