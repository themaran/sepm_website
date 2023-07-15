import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Add.css';
import React, { useEffect, useState } from 'react';

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


  const handleGradeChange = (index, event) => {
    const { value } = event.target;
    const newGrades = [...grades];
    newGrades[index] = { ...newGrades[index], grade: value }; // Update grade value
    setGrades(newGrades);
  };

  const subjects = [
    {
      subject_code: "MA3354",
      subject_name: "DM",
      subject_credits: 4
    },
    {
      subject_code: "CS3351",
      subject_name: "DPCO",
      subject_credits: 4
    },
    {
      subject_code: "CS3352",
      subject_name: "FDS",
      subject_credits: 3
    },
    {
      subject_code: "CD3291",
      subject_name: "DSA",
      subject_credits: 3
    }, {
      subject_code: "CS3391",
      subject_name: "OOPS",
      subject_credits: 3
    }, {
      subject_code: "CD3281",
      subject_name: "DSA Lab",
      subject_credits: 2
    }, {
      subject_code: "CS3381",
      subject_name: "OOPS lab",
      subject_credits: 1.5
    }, {
      subject_code: "CS3361",
      subject_name: "DS lab",
      subject_credits: 1.5
    }, {
      subject_code: "GE3361",
      subject_name: "PD lab",
      subject_credits: 1
    }, {
      subject_code: "CS3381",
      subject_name: "OOPS lab",
      subject_credits: 1.5
    },

  ]

  const handleSubmit = (event)  =>{
    event.preventDefault();
  }

  const calculateCGPA = (e) => {
    const creditPoints = {
      'o': 10,
      'a+': 9,
      'a': 8,
      'b+': 7,
      'b': 6,
      'c': 5,
      'ra': 0,
    };

    let totalCreditPoints = 0;
    let totalCredits = 0;

    // Iterate over the grades and calculate the CGPA
    for (let i = 0; i < grades.length; i++) {
      const { subject_credits } = subjects[i];
      const { grade } = grades[i];
      const creditPoint = creditPoints[grade];

      totalCreditPoints += subject_credits * creditPoint;
      totalCredits += subject_credits;
    }

    // Calculate CGPA
    const cgpa = totalCreditPoints / totalCredits;
    setCgpa(cgpa.toFixed(2)); // Return CGPA rounded to 2 decimal places
  };


  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
  }, [])
  return (
    <>
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <span class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => navigate(-1)}>
            keyboard_arrow_left
          </span>
          <h1 className='p-0 m-0 font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800'>Calculate CGPA</h1>
        </div>

        <div className='flex flex-col items-center'>
          <form onSubmit={handleSubmit} className=' bg-white p-8 rounded-md  w-full sm:w-full md:w-full xl:w-2/3'>
            {/* <span className='info mb-2 block'>* Reg. no, Year, Semester are fetched automatically. No Need to fill</span> */}
            <br></br>
            {

              subjects.map((subject, index) => {
                return (
                  <>
                    <div key={index} className="flex items-center mt-2">
                      <label className='text-base font-medium w-28 text-indigo-900 tracking-tight'>{subject.subject_code}</label>
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
            <div className='grid grid-cols-1 gap-y-5 lg:grid-cols-3 lx:grid-cols-3 2xl:grid-cols-3'>
              <div className='block md:flex justify-start col-start-1 md:col-start-2'>
                <button onClick={() => console.log('CGPA:', calculateCGPA())} className='flex items-center justify-center button mt-4 text-xs lg:text-base'><span class="text-base me-2 material-symbols-outlined">
                  save
                </span>Calculate & Save</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}