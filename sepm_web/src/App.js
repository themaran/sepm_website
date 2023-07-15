import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home';
import { Add } from './pages/Add';
import { Addclass } from './pages/Addclass';
import { Addsemester } from './pages/Addsemester';
import { Classes } from './pages/Classes';
import { Class } from './pages/Class';
import { Edit } from './pages/Edit';
import { Header } from './components/Header';
import DynamicInputs from './pages/Example';
import { EditClass } from './pages/EditClass';
import { EditStudent } from './pages/EditStudents';
import { Caluclate } from './pages/Calculate';
import { Semester } from './pages/Semester';


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:class" element={ <Class/> }/>
          <Route path="/classes/new-class" element={ <Addsemester/> }/>
          <Route path="/classes/:class/edit" element={ <EditClass/> }/>
          <Route path="/classes/:class/:semester/add_student" element={ <Add/> }/>
          <Route path="/classes/:class/:reg_no/edit" element={ <EditStudent/> }/>
          <Route path="/classes/:class/:reg_no/calculate" element={ <Caluclate/> }/>
          <Route path="/semesters" element={ <Semester/> }/>
          
          {/*
          <Route path="/classes/add_class" element={ <Addclass/> }/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
