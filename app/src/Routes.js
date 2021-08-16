import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import Home from "pages/App"
import NewRoute from "pages/new/NewRoute"

const Routes = () => {
    return <Router>
        <Switch>
            <Route path="/new" component={NewRoute}/>
            <Route path="/" exact component={Home}/>
        </Switch>
    </Router>
}

export default Routes