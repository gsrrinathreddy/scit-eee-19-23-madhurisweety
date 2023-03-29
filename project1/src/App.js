import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutus from './pages/Aboutus';
import Qualifications from './pages/Qualifications';
import Hobbies from './pages/Hobbies';
import Skills from './pages/Skills';
import Experience from './pages/Experience';

function App() {
  return (
    <div className="App">
        
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="Aboutus" element={<Aboutus/>}/>
            <Route path="Qualifications" element={<Qualifications/>}/>
            <Route path="Hobbies" element={<Hobbies/>}/>
            <Route path="Experience" element={<Experience/>}/>
            <Route path="Skills" element={<Skills/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
