import { LastViewKey } from "define/etc"
import lscache from "lscache"
import { useEffect } from "react"
import { withRouter } from "react-router-dom"

const App = ({ history }) => {

    useEffect(() => {
        const last = lscache.get(LastViewKey)
        if (last) return history.replace("/" + last)
        lscache.set(LastViewKey, "card")
        return history.replace("/card")
        // eslint-disable-next-line
    }, [])

    return null
}

export default withRouter(App)