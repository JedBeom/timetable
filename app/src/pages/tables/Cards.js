import { getProcessedSubjects } from "api/api"
import SwitchButton from "components/SwitchButton"
import Card from "components/tables/card/Card"
import { Ends } from "define/times"
import { useEffect, useState } from "react"
import View from "ui/View"
import { getDay, isBeforeIndexOfNow } from "utils/times"
import { Clock, Maximize } from "react-feather"
import { SkSubjectsWeek } from "define/skeletons"
import useInterval from "utils/useInterval"

const CardView = () => {
	const [order, setOrder] = useState()
	const [subjects, setSubjects] = useState(SkSubjectsWeek)
	const [weekday, setWeekday] = useState(0)
	const [loading, setLoading] = useState(true)

	const refresh = () => {
		setOrder(isBeforeIndexOfNow(Ends) - 1)
		setWeekday(getDay() - 1)
	}

	const get = async () => {
		const timetable = await getProcessedSubjects()
		setSubjects(timetable.Subjects)
		setLoading(false)
	}

	useInterval(refresh, 30 * 1000) // 30 seconds

	useEffect(() => {
		refresh()
		get()
	}, [])

	return <View icon={<Clock />} title="시간표" headerRight={<SwitchButton to="/full" icon={<Maximize />} text="전체 보기" />}>
		{loading ? null :

			(weekday !== 0 && weekday !== 6 ?
				(order !== -1 ?
					<Card order={order + 1} subject={subjects[weekday][order]} /> : "수업이 없어요") :
				"주말입니다")
		}
	</View>
}

export default CardView