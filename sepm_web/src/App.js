import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Add }  from './pages/Add';
import { Addclass } from './pages/Addclass';
import { Addsemester } from './pages/Addsemester';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/class/add_student" element={ <Add/> }/>
          <Route path="/class/add_class" element={ <Addclass/> }/>
          <Route path="/class/add_semester" element={ <Addsemester/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
