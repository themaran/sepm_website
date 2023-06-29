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

export function Edit() {
  return (
    <>
      <Header />
      <Menu />
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
      <div className='container'>
        <Link to="/#" className='d-flex align-items-center link' onClick={() => navigate(-1)}>
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          Go back
        </Link>

        <form>
          <h3>Edit Student</h3>

          <span className='info mb-3 d-block'>* Edit the student information here. Don't forget to click save button after changes</span>
          <label for='reg' className='col-12 col-md-2 text-start'>Reg. No: </label>
          <input type='phone' name='reg' onChange={(e) => { const input = e.target.value; e.target.value = registerNumber + input.substring(registerNumber.length) }} defaultValue={registerNumber} placeholder='_ _ _' required></input>
          <br />
          <label for='name' className='col-12 col-md-2 text-start'>Name: </label>
          <input type='text' name='name' placeholder='Student Name' required></input>
          <br></br>
          <label for='cgpa' className='col-12 col-md-2 text-start'>CGPA: </label>
          <input type='number' name='cgpa' placeholder='Cumulative Grade Point Average' required></input>
          <br></br>

          <label for='category' className='col-12 col-md-2 text-start'>Category: </label>
          <select id='category' name='category' required>
            <option value='choose' disabled selected hidden>Choose</option>
            <option value='A'>A</option>
            <option value='B+'>B+</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
          </select>
          <br />

          <label for="year" className='col-12 col-md-2 text-start'>Year: </label>
          <select name="year" placeholder='year' id="year" value={year} disabled required>
            <option value='choose' disabled selected hidden>Choose</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select>
          <br></br>
          <label for='semester' className='col-12 col-md-2 text-start'>Semester: </label>
          <select name='semester' id='semester' value={semester} disabled required>
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
          <div className='d-block d-md-flex'>
            <label className='col-0 col-md-2 p-0 m-0 p-md-2 m-md-2'></label>
            <button className='d-flex align-items-center justify-content-center mt-4'><span class="fs-6 me-2 material-symbols-outlined">
              save
            </span> Save Changes</button>
          </div>
          <div className='d-flex'>
            <label className='col-0 col-md-2 m-0 p-0 p-md-2 m-md-2'></label>
            <button className='d-flex bg-danger align-items-center justify-content-center mt-3'><span class="fs-6 me-2 material-symbols-outlined">
            delete
            </span> Delete Student</button>
          </div>
        </form>
      </div>
    </>
  )
}