import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { Boards, Home } from "./containers/pages";
import PATH from "./config/path";
import Layout from "./containers/Layout";

const Routes = ({ history }) => (
  <ConnectedRouter history={history}>
    <Layout>
      <Switch>
        <Route exact path={PATH.home()} component={Home} />
        <Route exact path={PATH.boards()} component={Boards} />
      </Switch>
    </Layout>
  </ConnectedRouter>
);

export default Routes;
