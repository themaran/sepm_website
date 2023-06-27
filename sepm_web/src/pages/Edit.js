import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Add.css';
import React from 'react';

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
  return (
    <>
      <div className='container'>
      <Link to="/classes" className='d-flex align-items-center position link'>
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          Go back
        </Link>
        <h3>Edit Student</h3>
        <form>
          <label for='reg'>Reg. No</label>
          <br></br>
          <input type='phone' name='reg' placeholder='i.e 812021205013' required></input>
          <br></br>
          <label for='name'>Name</label>
          <br></br>
          <input type='text' name='name'placeholder='i.e Elamran E' required></input>
          <br></br>
          <label for="year">Year</label>
          <br></br>
          <select name="year"placeholder='year' id="year" required>
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
          <label for='category'>Category</label>
          <br></br>
          <select id='category' name='category' required>
            <option value='choose' disabled selected hidden>Choose</option>
            <option value='A'>A</option>
            <option value='B+'>B+</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            </select>
            <br></br>
          <br></br>
          <br></br>
          <button>Save</button>
        </form>
      </div>
    </>
  )
}