import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Add.css';
import React from 'react';

export function Add() {
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
        <h3>Add Students</h3>
        <form>
          <label for='reg'>Reg. No</label>
          <br></br>
          <input type='phone' name='reg'></input>
          <br></br>
          <label for='name'>Name</label>
          <br></br>
          <input type='text' name='name'></input>
          <br></br>
          <label for="year">Year</label>
          <br></br>
          <select name="year"placeholder='year' id="year">
          <option value='choose' disabled selected hidden>Choose</option>
          <option value="I">I</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
        </select>
          <br></br>
          <label for='semester'>Semester</label>
          <br></br>
          <select name='semester' id='semester'>
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
          <select id='category' name='category'>
            <option value='choose' disabled selected hidden>Choose</option>
            <option value='A'>A</option>
            <option value='B+'>B+</option>
            <option value='B'>B</option>
            <option value='C'>C</option>
            </select>
            <br></br>
          <br></br>
          <button>Save and Create another student</button>
          <br></br>
          <button>Add</button>
        </form>
      </div>
    </>
  )
}