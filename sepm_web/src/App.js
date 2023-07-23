import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home';
import { Add } from './pages/Add';
import { Addsemester } from './pages/Addsemester';
import { Classes } from './pages/Classes';
import { Class } from './pages/Class';
import Header from './components/Header';
import { EditClass } from './pages/EditClass';
import { EditStudent } from './pages/EditStudents';
import { Caluclate } from './pages/Calculate';
import { Semester } from './pages/Semester';
import { ManageUsers } from './pages/ManageUsers';
import { Login } from './pages/Login';
import { Page404 } from './pages/404';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import config from './firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setClasses } from './pages/actions/classesAction';
import { loginSuccess, logout } from './pages/actions/authActions';
import './App.css'
import { Spinner } from './components/Spinner';
import { Addclass } from './pages/Addclass';
import Cookies from 'js-cookie';

function App() {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth(config);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const accessToken = await user.getIdToken();
        const expirationTime = new Date(user.expirationTime).getTime();
        Cookies.set('accessToken', accessToken, { expires: new Date(expirationTime) });
        const headers = {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `${Cookies.get('accessToken')}`,
          'User-Agent': 'Semp/1.2',
          'Host': 'semp.glitch.me',
          'Cache-Control': 'no-cache',
          'Origin': `${process.env.REACT_APP_ORIGIN}`,
          'Connection': 'keep-alive' 
        };
        
        fetch('https://semp.glitch.me/classes', {
          method: 'GET',
          headers: headers,
        })
          .then((res) => res.json())
          .then((data) => {
            const classes = Object.values(data);
            const years = data;
            console.log('Fetched', classes, years);
            dispatch(setClasses(classes, years));
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            dispatch(loginSuccess());
            localStorage.setItem('login', true);
            setLoading(false);
          })
      } else {
        // Clear the access token from the cookie when the user is logged out
        Cookies.remove('accessToken');
        dispatch(logout());
        localStorage.removeItem('login');
        setLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };

  }, []);


  if (loading) {
    return (
      <Spinner />
    )
  }


  return (
    <Router>
      {isLoggedIn ? (
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/classes" element={<><Header /><Classes /></>} />
          <Route path="/classes/:class/:id" element={<><Header /><Class /></>} />
          <Route path="/classes/new-semester" element={<><Header /><Addsemester /></>} />
          <Route path="/classes/new-class" element={<><Header /><Addclass /></>} />
          <Route path="/classes/:class/:sem/edit" element={<><Header /><EditClass /></>} />
          <Route path="/classes/:class/:semester/add_student" element={<><Header /><Add /></>} />
          <Route path="/classes/:class/:sem/:reg_no/edit" element={<><Header /><EditStudent /></>} />
          <Route path="/classes/:class/:sem/:reg_no/calculate" element={<><Header /><Caluclate /></>} />
          <Route path="/semesters" element={<><Header /><Semester /></>} />
          <Route path="/users" element={<><Header /><ManageUsers /></>} />
          <Route path="/*" element={<><Header /><Page404 /></>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/*" element={<Login />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
