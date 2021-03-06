const replaceElectiveSubjects = (subjects, es, es2u) => {
    if (!subjects || !es || !es2u) {
        return subjects
    }
    for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < subjects[i].length; j++) {
            if (subjects[i][j].AvailableBit !== 0) {
                subjects[i][j] = es[es2u[subjects[i][j].AvailableBit]]
            }
        }
    }
    return subjects
}

export { replaceElectiveSubjects }