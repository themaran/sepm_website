import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Addsemester.css';
import React from 'react';

export function Addsemester() {
  return (
    <>
      <Header />
      <Newsemester />
    </>
  );
}

function Newsemester() {
  const navigate = useNavigate();

  let num = 5;
  const handleNewSubjectAdd = () => {
    // Select parent element form
    const parent = document.getElementById('form');

    //Create new div
    const div = document.createElement('div');
    div.className = 'input_group d-flex';
    parent.appendChild(div);

    //Create new label
    const label = document.createElement('label');
    label.textContent = `Subject ${num}`;
    label.className = 'col-12 col-md-2';
    div.appendChild(label);

    //Create new div
    const innerDiv = document.createElement('div');
    div.appendChild(innerDiv);

    //Create input element for Subcode
    const subcodeInput = document.createElement('input');
    subcodeInput.id = `subcode${num}`;
    subcodeInput.placeholder = 'Code';
    innerDiv.appendChild(subcodeInput);

    //Create input element for SubjectName
    const subnameInput = document.createElement('input');
    subnameInput.id = `subname${num}`;
    subnameInput.placeholder = 'Subject Name';
    innerDiv.appendChild(subnameInput);

    //Create input element for Credits
    const creditsInput = document.createElement('input');
    creditsInput.id = `credits${num}`
    creditsInput.placeholder = 'Credits'
    innerDiv.appendChild(creditsInput);
    num += 1;
  }
  return (
    <>
      <div className='container'>
        <Link to="/#" className='d-flex align-items-center position link' onClick={() => navigate(-1)}>
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          Go back
        </Link>
        <h3>Add new semester</h3>
        <form id='form'>
          <label for='semname'>Semester</label>
          <input type='text' name='semname' id='semname' placeholder='Enter Semester Name' required />

          <br></br>
          <br></br>
          <h4>Subjects</h4>
          <span className='info'>* Enter the subject code, name and credits</span>
          <br />
          <br />
          <div className='input_group d-flex'>
            <label className='col-12 col-md-2'>Subject 1<span className='text-danger'>*</span></label>
            <div>
              <input name='subcode' id='subcode1' type='text' placeholder='code' required></input>
              <input name='subname' id='subname1' placeholder='Subject name' required></input>
              <input name='credits' id='credits1' placeholder='Credits' required></input>
            </div>
          </div>
          <div className='input_group d-flex'>
            <label className='col-12 col-md-2'>Subject 2</label>
            <div>
              <input name='subcode' id='subcode2' type='text' placeholder='code' required></input>
              <input name='subname' id='subname2' placeholder='Subject name' required></input>
              <input name='credits' id='credits2' placeholder='Credits' required></input>
            </div>
          </div>

          <div className='input_group d-flex'>
            <label className='col-12 col-md-2'>Subject 3</label>
            <div>
              <input name='subcode' id='subcode3' type='text' placeholder='code' required></input>
              <input name='subname' id='subname3' placeholder='Subject name' required></input>
              <input name='credits' id='credits3' placeholder='Credits' required></input>
            </div>
          </div>

          <div className='input_group d-flex'>
            <label className='col-12 col-md-2'>Subject 4</label>
            <div>
              <input name='subcode' id='subcode4' type='text' placeholder='code' required></input>
              <input name='subname' id='subname4' placeholder='Subject name' required></input>
              <input name='credits' id='credits4' placeholder='Credits' required></input>
            </div>
          </div>
          <br></br>



        </form>

        <div className='d-flex'>
          <label className='col-12 col-md-2'></label>
          <button typeof='button' className='ms-4' onClick={() => handleNewSubjectAdd()}>+ Add subject</button>
        </div>
        <div className='d-flex mb-4'>
          <label className='col-12 col-md-2'></label>
          <button className='mt-3 ms-4 d-flex align-items-center justify-content-center'>
            <span class="fs-6 me-2 material-symbols-outlined">
              save
            </span> Save</button>
        </div>

      </div >
    </>

  )
}

