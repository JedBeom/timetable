const parseTextToTime = text => {
    let [h, m] = text.split(":").map(t => parseInt(t))
    return h + (m / 60)
}

export const parseDateToTime = date => {
    return date.getHours() + date.getMinutes() / 60
}

// se is Object{s: time, e: time} (s for Start, e for End)
// time is float (hour + minute/60)

const strSeToTime = se => {
    se.s = parseTextToTime(se.s)
    se.e = parseTextToTime(se.e)

    return se
}

export const strSesToTime = ses => {
    for (let i = 0; i < ses.length; i++) {
        ses[i] = strSeToTime(ses[i])
    }

    return ses
}

export const strsToTime = a => {
    for (let i = 0; i < a.length; i++) {
        a[i] = parseTextToTime(a[i])
    }

    return a
}

export const timeToHM = time => {
    let h = parseInt(time)
    let m = Math.round((time % 1) * 60)

    if (h === 0) {
        return `${m}분`
    }

    return `${h}시간 ${m}분`
}

export const isBetween = (se, time) => {
    return se.s <= time && time <= se.e
}

export const sesIndexOf = (ses, time) => {
    for (let i = 0; i < ses.length; i++) {
        if (isBetween(ses[i], time)) {
            return i
        }
    }

    return -1
}

export const sesIndexOfNow = ses => {
    return sesIndexOf(ses, parseDateToTime(new Date()))
}

export const isBeforeIndexOf = (ends, time) => {
    for (let i = 0; i < ends.length; i++) {
        if (time <= ends[i]) return i
    }

    return -1
}

export const isBeforeIndexOfNow = ends => {
    return isBeforeIndexOf(ends, parseDateToTime(new Date()))
}

export const getDay = () => new Date().getDay()

export const timeAgo = (se, time) => {
    if (time <= se.s) return `시작까지 ${timeToHM(se.s - time)}`
    else if (isBetween(se, time)) return `${timeToHM(se.e - time)} 후 종료`
    return `${timeToHM(time - se.e)} 전에 종료됨`
}