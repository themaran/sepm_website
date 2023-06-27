import { Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Addsemester.css';
import React from 'react';

export function Addsemester() {
  return (
    <>
      <Header />
      <Menu />
      <Newsemester />

    </>
  );
}

function Newsemester() {
  return (
    <>
      <div className='container'>
        <Link to="/classes" className='d-flex align-items-center position link'>
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          Go back
        </Link>
        <h3>Add new semester</h3>
        <form>
          <label for='semname'>Semester</label>
          <select name='semname' id='semname' required>
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
          <br></br>
          <h4>Subjects</h4>
          <div className='input_group d-flex'>
            <label>Subject 1*</label>
            <div>
              <input name='subcode' id='subcode' type='text' placeholder='code' required></input>
              <br></br>
              <input name='subname' id='subname' placeholder='Subject name' required></input>
              <br></br>
              <input name='credits' id='credits' placeholder='Credits' required></input>
              <br></br>
            </div>
          </div>
          <div className='input_group d-flex'>
            <label>Subject 2</label>
            <div>
              <input name='subcode' id='subcode' type='text' placeholder='code' required></input>
              <br></br>
              <input name='subname' id='subname' placeholder='Subject name' required></input>
              <br></br>
              <input name='credits' id='credits' placeholder='Credits' required></input>
              <br></br>
            </div>
          </div>

          <div className='input_group d-flex'>
            <label>Subject 3</label>
            <div>
              <input name='subcode' id='subcode' type='text' placeholder='code' required></input>
              <br></br>
              <input name='subname' id='subname' placeholder='Subject name' required></input>
              <br></br>
              <input name='credits' id='credits' placeholder='Credits' required></input>
              <br></br>
            </div>
          </div>

          <div className='input_group d-flex'>
            <label>Subject 4</label>
            <div>
              <input name='subcode' id='subcode' type='text' placeholder='code' required></input>
              <br></br>
              <input name='subname' id='subname' placeholder='Subject name' required></input>
              <br></br>
              <input name='credits' id='credits' placeholder='Credits' required></input>
              <br></br>
            </div>
          </div>
          <br></br>
          <button typeof='button'>+ Add subject</button>
          <p>&#9888; Confirm to befor save.</p>
          <button>Save</button>

        </form>

      </div>
    </>

  )
}

