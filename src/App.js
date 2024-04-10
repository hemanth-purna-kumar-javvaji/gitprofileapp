// import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Githubprofiles from './components/Githubprofiles';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div>
        <Router>
          <Login/>
            <Routes>
                <Route path='/github' element={<Githubprofiles/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
