import { Link, useNavigate } from 'react-router-dom';
import './Add.css';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export function Caluclate() {
  return (
    <>
      <Form />
    </>
  );
}

function Form() {
  const [year, setYear] = useState('');
  const navigate = useNavigate();
  const [cgpa, setCgpa] = useState(0);
  const [grades, setGrades] = useState([]);
  const [fetchedSubjects, setFetchedSubjects] = useState([]);
  const [subjectCredits, setSubjectCredits] = useState({});

  const handleGradeChange = (index, event) => {
    const { value } = event.target;
    const newGrades = [...grades];
    newGrades[index] = { ...newGrades[index], grade: value }; // Update grade value
    setGrades(newGrades);
  };


  const handleSubmit = (event)  =>{
    event.preventDefault();
  }

  const calculateCGPA = () => {
    const creditPoints = {
      'o': 10,
      'a+': 9,
      'a': 8,
      'b+': 7,
      'b': 6,
      'c': 5,
      'ra': 0,
    };
  
    if (!grades.length || !Object.keys(subjectCredits).length) {
      console.log('Grades or subjectCredits data is not available yet.');
      return;
    }
  
    let totalCreditPoints = 0;
    let totalCredits = 0;
  
    for (let i = 0; i < grades.length; i++) {
      const subjectCode = grades[i]?.code;
      const grade = grades[i]?.grade;
      const creditPoint = creditPoints[grade];
  
      console.log(`Subject: ${subjectCode}, Grade: ${grade}, Credit Point: ${creditPoint}, Credits: ${subjectCredits[subjectCode]}`);
  
      if (subjectCode && creditPoint && subjectCredits[subjectCode]) {
        totalCreditPoints += subjectCredits[subjectCode] * creditPoint;
        totalCredits += subjectCredits[subjectCode];
      }
    }
  
  // Calculate CGPA
  if (totalCredits === 0) {
    return;
  }

  const cgpa = totalCreditPoints / totalCredits;
  setCgpa(cgpa.toFixed(2));
  };
  
  

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const sem = pathArray[2];

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

    fetch(`https://semp.glitch.me/cal_semester?sem=${sem}`, {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        const subjectsWithCredits = Object.keys(data.subjects).map(code => ({
          code,
          credits: parseInt(data.subjects[code].subject_description.subject_credits)
        }));
      
        setFetchedSubjects(subjectsWithCredits);
      
        // Create the grades array with subject codes and initial grades as an empty string
        const initialGrades = subjectsWithCredits.map(subject => ({
          code: subject.code,
          grade: '', // Initialize the grade as an empty string
        }));
        setGrades(initialGrades);
      
        // Set the credits for each subject in the state
        const creditsObj = {};
        subjectsWithCredits.forEach(subject => {
          creditsObj[subject.code] = parseInt(subject.credits, 10); // Convert credits to an integer
        });
        setSubjectCredits(creditsObj);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])
  return (
    <>
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <span class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => navigate(-1)}>
            keyboard_arrow_left
          </span>
          <h1 className='p-0 m-0 font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800'>Calculate CGPA</h1>
        </div>

        <div className='flex flex-col items-center'>
          <form onSubmit={handleSubmit} className=' bg-white p-16 rounded-md  w-full lg:w-1/2'>
            <h3>812021205013</h3>
            <h4>III Semester</h4>
            {/* <span className='info mb-2 block'>* Reg. no, Year, Semester are fetched automatically. No Need to fill</span> */}
            <br></br>
            {

              fetchedSubjects.map((subject, index) => {
                return (
                  <>
                    <div key={index} className="flex items-center mt-2">
                      <label className='text-base font-medium w-28 text-indigo-900 tracking-tight'>{subject.code}</label>
                      <select
                        value={grades[index]?.grade || ''}
                        className='w-2/3 lg:w-3/6 h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none'
                        onChange={(event) => handleGradeChange(index, event)}
                      >
                        <option value=""></option>
                        <option value="o">O</option>
                        <option value="a+">A+</option>
                        <option value="a">A</option>
                        <option value="b+">B+</option>
                        <option value="b">B</option>
                        <option value="c">C</option>
                        <option value="ra">RA</option>
                      </select>
                    </div>
                  </>
                )
              })
            }

            <br></br>
            <span>CGPA: <span>{cgpa}</span></span>
              <div className='flex transition-all  justify-center p-10 md:pl-16 md:pr-16 mt-10 bg-white pt-0 pb-10 rounded-b-md'>
                <button onClick={() => calculateCGPA()} className='rounded-sm flex justify-center items-center w-full h-10 lg:w-44 lg:h-11 text-xs text-white bg-blue-500'><span class="text-base me-2 material-symbols-outlined">
                  save
                </span>Calculate</button>
              </div>
          </form>
        </div>

      </div>
    </>
  )
}