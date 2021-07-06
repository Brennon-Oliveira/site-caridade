import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Footer from './components/Footer';
import { AppProvider } from './contexts/AppContext';

function App() {
  return (
    <Router>
        <AppProvider>
        <div>
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </div>
      </AppProvider>
    </Router>
  );
}

export default App;
