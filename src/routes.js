import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { Boards, Home } from "./containers/pages";
import PATH from "./config/path";

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path={PATH.home()} component={Home} />
      <Route exact path={PATH.boards()} component={Boards} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
