import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GifDetails from "./component/GifDetails";
import GifsListing from "./component/GifsListing";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App" data-testid="root">
        <Router>
          <Switch>
            <Route path="/" exact component={GifsListing} />
            <Route path="/gif/:id" component={GifDetails} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
