import './App.css';
import Githubprofiles from './components/Githubprofiles';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div>
     <Router>
        <Routes>
          <Route path='/nav' element={<Navbar/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/' element={<Login/>} />
            <Route path='/github' element={<Githubprofiles/>}/>
        </Routes> 
     </Router>
    </div>
  );
}

export default App;
