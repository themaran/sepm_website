import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Addclass.css';
import React from 'react';

export function Addclass() {
  return (
    <>
      <Header />
      <Newclass />
    </>
  );
}

function Newclass() {
  const navigate = useNavigate();
  return (
    <>
      <div className='container'>
      <Link to="/#" className='d-flex align-items-center position link' onClick={()=> navigate(-1)}>
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          Go back
        </Link>
        <h3>Add new class</h3>
        <form>
          <label for='name'>Batch</label>
          <br></br>
          <input type='text' name='name' placeholder='Enter class name' required></input>
          <br></br><label for='name'>Regulation</label>
          <br></br>
          <input type='text' name='name' placeholder='Enter Regulation' required></input>
          <br/>
          <label for="year">Year</label>
          <br></br>
          <select name="year" placeholder='year' id="year" required>
            <option value='choose' disabled selected hidden>Choose</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select>
          <br/>
          <label for='prefix_rollno'>Prefix Roll No.</label>
          <br/>
          <input type='number' placeholder='Enter prefix roll no'></input>
          <br/>
          <span className='info'>* i.e 812021205</span>
          <br></br>
          <label for='semester'>Semester</label>
          <br></br>
          <select name='semester' id='semester' required>
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
          <button className='mt-5'>Add</button>

        </form>

      </div>
    </>
  )
}