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


function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          {/*<Route path="/class/:class/:semester/add_student" element={ <Add/> }/>
          <Route path="/class/:class/:reg_no/edit" element={ <Edit/> }/>
          <Route path="/classes/add_class" element={ <Addclass/> }/>
          <Route path="/add_semester" element={ <Addsemester/> }/>
          <Route path="/class/:class" element={ <Class/> }/> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
