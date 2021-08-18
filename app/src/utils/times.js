const parseTextToTime = text => {
    let [h, m] = text.split(":").map(t => parseInt(t))
    return h + (m/60)
}

const parseDateToTime = date => {
    return date.getHours() + date.getMinutes()/60
}

// se is Object{s: time, e: time} (s for Start, e for End)
// time is float (hour + minute/60)

const strSeToTime = se => {
    se.s = parseTextToTime(se.s)
    se.e = parseTextToTime(se.e)

    return se
}

export const strSesToTime = ses => {
    for (let i=0; i<ses.length; i++) {
        ses[i] = strSeToTime(ses[i])
    }
    
    return ses
}

export const isBetween = (se, time) => {
    return se.s <= time && time <= se.e
}

export const sesIndexOf = (ses, time) => {
    for (let i=0; i<ses.length; i++) {
        if (isBetween(ses[i], time)) {
            return i
        }
    }

    return -1
}

export const sesIndexOfNow = ses => {
    return sesIndexOf(ses, parseDateToTime(new Date()))
}
