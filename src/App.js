import Home from './pages/Home/Home';
import { initLocale } from './services/momentService';
import './App.scss';

function App() {
  initLocale();

  return (
    <Home></Home>
  );
}

export default App;
