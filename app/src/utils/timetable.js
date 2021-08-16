const replaceElectiveSubjects = (subjects, es, es2u) => {
    for (let i=0; i<subjects.length; i++) {
        for (let j=0; j<subjects[i].length;j++) {
            if (subjects[i][j].AvailableBit != 0) {
                subjects[i][j] = es[es2u.ElectiveSubjectIDs[subjects[i][j].AvailableBit]]
            }
        }
    }
    return subjects
}

export {replaceElectiveSubjects}