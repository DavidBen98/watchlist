// import './index.scss';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Watchlist from './components/Watchlist';
import Watched from './components/Watched';
import Add from './components/Add';
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
      <HashRouter>
        <GlobalProvider>
          <Header/>

          <Routes>
            <Route path='/' element={<Watchlist/>}/>

            <Route path='/watched' element={<Watched/>}/>

            <Route path='/add' element={<Add/>}/>

          </Routes>
        </GlobalProvider>
      </HashRouter>

  );
}

export default App;
