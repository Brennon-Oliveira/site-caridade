import { AppProvider } from './contexts/AppContext';
import Routes from './Routes';

function App() {

  return (
    <AppProvider>
      <Routes></Routes>
    </AppProvider>
  );
}

export default App;
