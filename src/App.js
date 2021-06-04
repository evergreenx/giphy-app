import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GifDetails from "./component/GifDetails";
import GifsListing from './component/GifsListing'
import Header from "./component/Header";


function App() {
  return (
    <div className="App">
      <Router>
     <Header/>
        <Switch>
          <Route path="/" exact component={GifsListing} />
          <Route path="/product/:productId" component={GifDetails} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
