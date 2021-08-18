import SwitchButton from "components/SwitchButton"
import Card from "components/tables/card/Card"
import { Ses } from "define/times"
import View from "ui/View"
import { sesIndexOfNow } from "utils/times"
import { Clock, Maximize } from "../../../node_modules/react-feather/dist/index"

const CardView = () => {
	return <View icon={<Clock />} title="시간표" headerRight={<SwitchButton to="/full" icon={<Maximize />} text="전체 보기" />}>
		<Card>
			{sesIndexOfNow(Ses) + 1}교시
		</Card>
	</View>
}

export default CardView