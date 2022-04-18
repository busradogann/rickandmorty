import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import './App.css';
import Header from './components/header/Header';
import CharacterList from './components/characters/CharacterList';
import Character from './components/character/Character';
import Episodes from './components/episodes/Episodes';
import Episode from './components/episode/Episode';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className='main'>
          <Routes>
            <Route path="/" element={< CharacterList />} />
            <Route path="/:id" element={<Character />} />

            <Route path="/episode" element={< Episodes />} />
            <Route path="/episode/:id" element={< Episode />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
