import Main from "./Main";
import { useSelector } from "react-redux";
import Contacts from "./Contacts";
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  const choice = useSelector((state) => state.choice);

  return (
    <div className="container">
      <Switch>
        <Route path={"/"} exact>
          <Main />
        </Route>
        {choice && (
          <Route path={"/contacts"} exact>
            <Contacts />
          </Route>
        )}
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
