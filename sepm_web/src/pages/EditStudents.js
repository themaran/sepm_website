import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Add.css';
import React, { useEffect, useState } from 'react';

const data = [{
  'college_code': '8120',
  'bacth': '21',
  'department_code': '205',
}]

export function EditStudent() {
  return (
    <>
      <Form />
    </>
  );
}

function Form() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [registerNumber, setRegisterNumber] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const reg = data[0];
    setYear(pathArray[2]);
    setSemester(pathArray[3]);
    setRegisterNumber(reg.college_code + reg.bacth + reg.department_code)
  }, [])
  return (
    <>
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <span class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => navigate(-1)}>
            keyboard_arrow_left
          </span>
          <h1 className='p-0 m-0 font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800'>Edit student</h1>
        </div>

        <div className='flex flex-col items-center'>
          <form className=' bg-white p-8 rounded-md sm:w-full md:w-full xl:w-2/3'>
            {/* <span className='info mb-2 block'>* Reg. no, Year, Semester are fetched automatically. No Need to fill</span> */}
            <br></br>
            <label for='reg' className='text-base font-medium text-indigo-900 tracking-tight'>Reg. No</label>
            <input type='phone' name='reg' className='w-2/3 lg:w-3/6 h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' onChange={(e) => { const input = e.target.value; e.target.value = registerNumber + input.substring(registerNumber.length) }} defaultValue={registerNumber} placeholder='_ _ _' required></input>
            <br />
            <label for='name' className='text-base font-medium text-gray-600 tracking-tight'>Name</label>
            <input type='text' name='name' placeholder='Student Name' className='w-2/3 lg:w-3/6 h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' required></input>
            <br></br>
            <label for='name' className='text-base font-medium text-gray-600 tracking-tight'>CGPA</label>
            <input type='text' name='cgpa' placeholder='CGPA' className='w-2/3 lg:w-3/6 h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' required></input>
            <br></br>

            <label for='category' className='text-base font-medium text-gray-600 tracking-tight'>Category</label>
            <select id='category' name='category' className='w-2/3 lg:w-3/6 h-10 mt-1 border block m-0 p-0 pl-4 rounded-sm text-md outline-none' required>
              <option value='choose' disabled selected hidden>Choose</option>
              <option value='A'>A</option>
              <option value='B+'>B+</option>
              <option value='B'>B</option>
              <option value='C'>C</option>
            </select>
            <br />

            <label for="year" className='text-base font-medium text-gray-600 tracking-tight'>Year</label>
            <select name="year" placeholder='year' id="year" className='w-2/3 lg:w-3/6 h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' value={year} disabled required>
              <option value='choose' disabled selected hidden>Choose</option>
              <option value="I">I</option>
              <option value="II">II</option>
              <option value="III">III</option>
              <option value="IV">IV</option>
            </select>
            <br></br>
            <label for='semester' className='text-base font-medium text-gray-600 tracking-tight'>Semester</label>
            <select name='semester' id='semester' value={semester} className='w-2/3 lg:w-3/6 h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' disabled required>
              <option value='choose' disabled selected hidden>Choose</option>
              <option value='I'>I</option>
              <option value='II'>II</option>
              <option value='III'>III</option>
              <option value='IV'>IV</option>
              <option value='V'>V</option>
              <option value='VI'>VI</option>
              <option value='VII'>VII</option>
              <option value='VII'>VIII</option>

            </select>
            <br></br>
            <div className='grid grid-cols-1 gap-y-5 lg:grid-cols-2 lx:grid-cols-2 2xl:grid-cols-3'>
              <div className='block md:flex justify-start'>
                <button className='flex items-center justify-center button mt-4 text-xs lg:text-base'><span class="text-base me-2 material-symbols-outlined">
                  save
                </span> Save Changes</button>
              </div>
              <div className='block md:flex'>
                <button className='flex items-center justify-center button delete mt-3 text-xs lg:text-base'><span class="text-base me-2 material-symbols-outlined">
                  delete
                </span> Delete</button>
              </div>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}