import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/header';
import FooterComponent from './components/footer';
import MainComponent from './components/main';
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <HeaderComponent />
        <MainComponent />
        <FooterComponent />
      </GlobalProvider>
    </div>
  );
}

export default App;
