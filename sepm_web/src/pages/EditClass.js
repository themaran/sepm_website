import { Link, useNavigate } from 'react-router-dom';
import './Addclass.css';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';



export const EditClass =() => {
  const [classDetails, setClassDetails] = useState({
    year: '',
    semester: '',
    regulation: '',
    batch: '',
    prefix_register_number: '',
    total_students: 0,
  });
  const [fetchedSemesters, setFetchedSemesters] = useState([]);

  const handleClassInputs = (fieldName, value) => {
    setClassDetails((prevClassDetails) => ({
      ...prevClassDetails,
      [fieldName]: value,
    }));
  };

  const handleAddClassForm = () => {
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
    fetch('https://semp.glitch.me/add_class', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(classDetails)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
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
    fetch('https://semp.glitch.me/semesters', {
      method: 'GET',
      headers: headers,
    })
      .then((res) => res.json())
      .then((data) => {
        const keys = Object.keys(data);
        setFetchedSemesters(keys)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 md:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <Link to={'/classes'} className='mt-1 p-0'>
            <span class="material-symbols-outlined mr-2 cursor-pointer">
              keyboard_arrow_left
            </span>
          </Link>
          <h1 className='p-0 m-0 font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800'>Edit class</h1>
        </div>
        <div className='flex flex-col items-center'>
        <form className={`mt-10 bg-white transition-all p-10 md:pl-16 md:pr-16 rounded-md rounded-b-none w-full lg:w-2/5`}>
          <div className='text-start w-full' >
            <label for="year" className='text-base font-medium text-gray-600 tracking-tight'>Year</label>
            <br></br>
            <select name="year" placeholder='year'
              className='w-full h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none'
              id="year"
              value={classDetails.year}
              onChange={(e) => handleClassInputs('year', e.target.value)}
              required>
              <option value='' selected>Choose</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
            <br />
            <label for='name' className='text-base font-medium text-gray-600 tracking-tight'>Regulation</label>
            <input type='text' name='name'
              className='w-full h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none'
              placeholder='Enter Regulation'
              value={classDetails.regulation}
              onChange={(e) => handleClassInputs('regulation', e.target.value)}
              required></input>
            <br />
            <label for='name' className='text-base font-medium text-gray-600 tracking-tight'>Batch</label>
            <input type='text' name='name'
              className='w-full h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none'
              placeholder='Enter Batch'
              value={classDetails.batch}
              onChange={(e) => handleClassInputs('batch', e.target.value)}
              required></input>
            <br />
            <label for='prefix_rollno' className='text-base font-medium text-gray-600 tracking-tight'>Prefix Roll No.</label>
            <br />
            <input type='text'
              className='w-full h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none'
              placeholder='Enter prefix roll no'
              value={classDetails.prefix_register_number}
              onChange={(e) => handleClassInputs('prefix_register_number', e.target.value)}
              required
            ></input>
            <span className='info'>i.e 812021205</span>
            <br></br>
            <br />
            <label for='semester' className='text-   font-medium text-gray-600 tracking-tight'>Semester</label>
            <br></br>
            <select name='semester'
              className='w-full h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none'
              id='semester'
              value={classDetails.semester}
              onChange={(e) => handleClassInputs('semester', e.target.value)}
              required>
              <option value='choose'>Choose</option>
              <option value={classDetails.semester}>{classDetails.semester}</option>
              {fetchedSemesters.map((sem) => {
                return (
                  <>
                    <option value={sem} >{sem}</option>
                  </>
                )
              })}
            </select>
            <br></br>
          </div>

        </form>
        <div className='flex transition-all  justify-center p-10 md:pl-16 md:pr-16 w-full sm:w-full lg:w-2/5 bg-white pt-0 pb-10 rounded-b-md'>
          <button className={`rounded-sm flex justify-center items-center w-36 h-10 lg:w-44 lg:h-11 text-xs text-white ${classDetails.batch == '' || classDetails.prefix_register_number == '' || classDetails.regulation == '' || classDetails.batch == '' || classDetails.semester == '' ? 'bg-blue-300 cursor-not-allowed' : ' bg-blue-500 cursor-pointer'}`} onClick={() => handleAddClassForm()}>
            Create Now
            <span className="text-base ml-2 material-symbols-outlined">
              add
            </span>
          </button>
        </div>
      </div>
      </div>
    </>
  )
}