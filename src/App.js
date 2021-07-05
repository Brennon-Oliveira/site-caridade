import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
