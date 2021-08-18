import { strSesToTime } from "utils/times"

export const SesText = [
    { s: "8:40", e: "9:30" },
    { s: "9:40", e: "10:30" },
    { s: "10:40", e: "11:30" },
    { s: "11:40", e: "12:30" },
    { s: "13:40", e: "14:30" },
    { s: "14:40", e: "15:30" },
    { s: "15:40", e: "16:30" },
    { s: "16:50", e: "18:00" },
]

// deep clone of SesText
export const Ses = strSesToTime(JSON.parse(JSON.stringify(SesText)))

export const HangulWorkdays = [
    "", "월", "화", "수", "목", "금"
]
