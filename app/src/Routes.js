import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Home from "pages/App"
import NewRoute from "pages/new/NewRoute"
import CardView from "pages/tables/Card"
import FullView from "pages/tables/Full"

const Routes = () => {
    return <Router>
        <Switch>
            <Route path="/new" component={NewRoute}/>
            <Route path="/card" component={CardView}/>
            <Route path="/full" component={FullView}/>
            <Route path="/" exact component={Home}/>
        </Switch>
    </Router>
}

export default Routes