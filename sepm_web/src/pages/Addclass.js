import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Addclass.css';
import React from 'react';

export function Addclass() {
  return (
    <>
      <Header />
      <Menu />
      <Newclass />
    </>
  );
}

function Newclass() {
  return (
    <>
      <div className='container'>
        <Link to="/classes" className='d-flex align-items-center position link'>
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          Go back
        </Link>
        <h3>Add new class</h3>
        <form>
          <label for='name'>Batch</label>
          <br></br>
          <input type='text' name='name' placeholder='i.e 2021 - 2025' required></input>
          <br></br>
          <label for="year">Year</label>
          <br></br>
          <select name="year" placeholder='year' id="year" required>
            <option value='choose' disabled selected hidden>Choose</option>
            <option value="I">I</option>
            <option value="II">II</option>
            <option value="III">III</option>
            <option value="IV">IV</option>
          </select>
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
          <button>Add</button>

        </form>

      </div>
    </>
  )
}