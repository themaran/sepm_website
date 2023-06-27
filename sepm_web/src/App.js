import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home';
import { Add }  from './pages/Add';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/class/add_student" element={ <Add/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
