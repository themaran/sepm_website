import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Addsemester.css';
import React, { useState } from 'react';

export function EditClass() {
  return (
    <>
      <EditClassCompontent />
    </>
  );
}

function EditClassCompontent() {
  const navigate = useNavigate();
  const [semesterName, setSemesterName] = useState();
  const [inputs, setInputs] = useState([{ subject_code: '', subject_name: '', subject_credit: '' }]);
  const [quickMenu, setQuickMenu] = useState('semester');

  const handleAddInput = () => {
    const newInputs = [...inputs, { subject_code: '', subject_name: '', subject_credit: '' }];
    setInputs(newInputs);
  };

  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleInputChange = (index, fieldName, value) => {
    const newInputs = [...inputs];
    newInputs[index][fieldName] = value;
    setInputs(newInputs);
    console.log(inputs);
  };
  const renderInputs = () => {
    return inputs.map((input, index) => (
      <div key={index} className='mt-5'>
        <label className='text-sm font-medium text-gray-600 tracking-tight'>Subject {index + 1}</label>
        <div className='flex'>
          <input name='subcode' className='w-1/4 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none uppercase' id='subcode1' type='text' placeholder='code' required
            onChange={(e) => handleInputChange(index, 'subject_code', e.target.value)}></input>
          <input name='subname' className='w-4/5 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' id='subname1' placeholder='Subject name' required
            onChange={(e) => handleInputChange(index, 'subject_name', e.target.value)}></input>
          <input name='credits' className='w-1/6 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' id='credits1' placeholder='Credits' required
            onChange={(e) => handleInputChange(index, 'subject_credit', e.target.value)}></input>
          {index > 0 ? <button onClick={() => handleRemoveInput(index)}><span className='material-symbols-outlined text-lg mt-3'>delete</span></button> : <></>}
        </div>
      </div>
    ));
  };

  return (
    <>
      {/* Container */}
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <span class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => navigate(-1)}>
            keyboard_arrow_left
          </span>
          <h1 className='p-0 m-0 font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800'>Edit class</h1>
        </div>

        {/* Quick Navigation */}
        <div className='flex flex-col items-center'>
          <div className='w-full lg:w-1/2 bg-white border h-16 rounded-full grid grid-cols-2 relative'>
            <div className='flex items-center justify-self-center cursor-pointer' onClick={() => setQuickMenu('semester')}>
              <div className='bg-blue-400 w-9 h-9 p-2 rounded-full flex justify-center items-center'>
                <span className='text-white'>1</span>
              </div>
              <span className='text-sm ml-3'>Semester</span>
              <span className='text-sm text-gray-400'>(Optional)</span>
            </div>
            <div className='flex items-center justify-self-center cursor-pointer' onClick={() => setQuickMenu('class')}>
              <div className='bg-blue-400 w-9 h-9 p-2 rounded-full flex justify-center items-center'>
                <span className='text-white'>2</span>
              </div>
              <span className='text-sm ml-3'>Class Details</span>
            </div>
          </div>

          {quickMenu == 'semester' ?
            <>
              <form id='form' className='mt-10 bg-white p-16 rounded-md sm:w-full lg:w-1/2' method='post'>
                <label for='semname' className='text-base font-medium text-gray-600 tracking-tight'>Next Semester Name</label>
                <input type='text' name='semname' value={semesterName} className='w-2/3 lg:w-3/6 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' id='semname' onChange={(e) => setSemesterName(e.target.value)} placeholder='Enter Semester Name' required />
                <h4 className='text-base font-medium text-gray-600 tracking-tight mt-5'>Add Subjects</h4>
                <span className='info text-gray-300'>* Enter the subject code, name and credits</span>

                <div className='input_group mt-5'>
                  {renderInputs()}
                </div>
                <button typeof='button' className='hidden'></button>
              </form>

              <div className='flex justify-center pt-5 bg-white w-full sm:w-full lg:w-1/2'>
                <button typeof='button' className='button w-48' onClick={handleAddInput}>+ Add subject</button>
              </div>

              <div className='flex justify-center w-full sm:w-full lg:w-1/2 bg-white pt-2 pb-10 rounded-b-md'>
                <label className=''></label>
                <button className='button w-48' onClick={() => setQuickMenu('class')}>
                  <span class="text-base mr-2 material-symbols-outlined">
                    save
                  </span>Create semester</button>
              </div>
            </> :
            <>
              <form className='mt-10 bg-white p-8 rounded-md sm:w-full lg:w-1/2'>
                <label for="year" className='text-base font-medium text-gray-600 tracking-tight'>Year</label>
                <br></br>
                <select name="year" placeholder='year' className='w-6/12 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' id="year" required>
                  <option value='choose' disabled selected hidden>Choose</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </select>
                <br />
                <label for='name' className='text-base font-medium text-gray-600 tracking-tight'>Regulation</label>
                <input type='text' name='name' className='w-6/12 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' placeholder='Enter Regulation' required></input>
                <br />
                <label for='name' className='text-base font-medium text-gray-600 tracking-tight'>Batch</label>
                <input type='text' name='name' className='w-6/12 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' placeholder='Enter Batch' required></input>
                <br />
                <label for='prefix_rollno' className='text-base font-medium text-gray-600 tracking-tight'>Prefix Roll No.</label>
                <br />
                <input type='text' className='w-6/12 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' placeholder='Enter prefix roll no'></input>
                <span className='info'>i.e 812021205</span>
                <br></br>
                <br />
                <label for='semester' className='text-   font-medium text-gray-600 tracking-tight'>Semester</label>
                <br></br>
                {semesterName == null ?
                  <select name='semester' className='w-6/12 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' id='semester' required>
                    <option value='choose' disabled selected hidden>Choose</option>
                    <option value='I'>I</option>
                    <option value='II'>II</option>
                    <option value='III'>III</option>
                    <option value='IV'>IV</option>
                    <option value='V'>V</option>
                    <option value='VI'>VI</option>
                    <option value='VII'>VII</option>
                    <option value='VII'>VIII</option>
                  </select> :
                  <select name='semester' id='semester' className='w-6/12 h-10 mt-2 border block m-0 p-0 pl-4 rounded-sm text-sm outline-none' required>
                    <option value='choose' disabled selected hidden>{semesterName}</option>
                  </select>}
                <br></br>
                <button className='mt-5  button'>
                  <span className='material-symbols-outlined text-base mr-3'>save</span>
                  Save changes</button>

              </form>
            </>}

        </div >
      </div>
    </>

  )
}



