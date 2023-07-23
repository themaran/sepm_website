import { Link, useNavigate } from 'react-router-dom';
import './Add.css';
import React, { useEffect, useState, useRef } from 'react';
import MessageNotification from '../components/MessageNotification';
import Cookies from 'js-cookie';



export function Add() {
  return (
    <>
      <Form />
    </>
  );
}

function Form() {
  const navigate = useNavigate()
  const [registerNumber, setRegisterNumber] = useState('812021205');
  const [studentDetails, setStudentDetails] = useState([{ register_number: registerNumber, student_name: '', cgpa: 0, arrears: 0, student_category: 'A', year: '', semester: '' }])
  const nameRef = useRef(null);
  const categoryRef = useRef(null); 
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Function to trigger the message display
  const showMessage = (type, text) => {
    setMessage(text);
    setMessageType(type);

    // Clear the message after a few seconds (e.g., 5 seconds)
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 5000);
  };

  // Example functions to trigger the messages
  const handleSaveChanges = () => {
    // Simulate changes saved successfully
    showMessage('success', 'Student created! You can create another');
  };

  const handleSomethingWentWrong = () => {
    // Simulate an error
    showMessage('error', 'Something went wrong. Please try again later.');
  };

  const addRegisterNumberAsIndex = () => {
    const updatedStudentDetails = studentDetails.map((student) => {
      return {
        [student.register_number]: {
          register_number: student.register_number,
          student_name: student.student_name,
          total_cgpa: 0,
          cgpa:{ [student.semester]: {semester: student.semester, cgpa: 0}},
          arrears: student.arrears,
          student_category: student.student_category,
          year: student.year,
          semester: student.semester
        }
      };
    });
    return updatedStudentDetails;
  };


  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    const newInput = [...studentDetails]
    newInput[0]['year'] = pathArray[2];
    newInput[0]['semester'] = pathArray[3]
  }, []);

  const handleRegisterNumberChange = (e) => {
    setRegisterNumber(e.target.value);

    const updatedStudentDetails = studentDetails.map((details) => ({
      ...details,
      register_number: e.target.value,
    }));
    setStudentDetails(updatedStudentDetails);
  };

  const handleNameChange = (e) => {
    const updatedStudentDetails = studentDetails.map((details) => ({
      ...details,
      student_name: e.target.value,
    }));
    setStudentDetails(updatedStudentDetails);
  };

  const handleCategoryChange = (e) => {
    const updatedStudentDetails = studentDetails.map((details) => ({
      ...details,
      student_category: e.target.value,
    }));
    setStudentDetails(updatedStudentDetails);

    console.log(studentDetails);
  };


  const handleKeyPress = (e, ref) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (ref.current) {
        ref.current.focus();
      }
    }
  };

  const handleAddStudent = () => {
    const dataToSend = addRegisterNumberAsIndex();
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

    fetch('https://semp.glitch.me/add_student', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(dataToSend)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        document.getElementById('add-student').reset()
        handleSaveChanges();
      })
      .catch((err) => {
        console.log(err);
        handleSomethingWentWrong();
      });
  }


  return (
    <>
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 md:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <Link class="material-symbols-outlined mr-2 cursor-pointer" onClick={()=>{navigate(-1)}}>
            keyboard_arrow_left
          </Link>
          <h1 className='p-0 m-0 font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800'>Add student</h1>
        </div>

        <div className='flex justify-center'>
          <div className='w-full lg:w-1/2'>

            <form className='bg-white transition-all p-16 rounded-md' id='add-student'>
              <span className='info text-sm mb-2 block'>* Year & Semester are fetched automatically. No Need to fill</span>
              <br></br>
              <label for='reg' className='text-base font-medium text-indigo-900 tracking-tight'>Reg. No</label>
              <input type='phone' name='reg' className='w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' onChange={handleRegisterNumberChange}
                value={registerNumber} required
                onKeyDown={(e) => handleKeyPress(e, nameRef)}
              ></input>
              <br />
              <label for='name' className='text-base font-medium text-gray-600 tracking-tight'>Name</label>
              <input type='text' name='name' placeholder='Student Name'
                onChange={handleNameChange}
                className='w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none'
                onKeyDown={(e) => handleKeyPress(e, categoryRef)}
                ref={nameRef}
                required></input>
              <br></br>

              <label for='category' className='text-base font-medium text-gray-600 tracking-tight'>Category</label>
              <select id='category' name='category'
                onChange={handleCategoryChange}
                ref={categoryRef}
                className='w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-sm text-md outline-none'
                required>
                <option value='choose' disabled selected hidden>Choose</option>
                <option value='A'>A</option>
                <option value='B+'>B+</option>
                <option value='B'>B</option>
                <option value='C'>C</option>
              </select>
              <br />

              <label for="year" className='text-base font-medium text-gray-600 tracking-tight'>Year</label>
              <select name="year" placeholder='year' id="year" className='w-full h-10 mt-1 block m-0 p-0 pl-4 rounded-md text-sm outline-none' value={studentDetails[0].year} disabled required>
                <option value={studentDetails[0].year} selected>{`${studentDetails[0].year} YEAR (fetched)`}</option>
                <option value="I">I</option>
                <option value="II">II</option>
                <option value="III">III</option>
                <option value="IV">IV</option>
              </select>
              <br></br>
              <label for='semester' className='text-base font-medium text-gray-600 tracking-tight'>Semester</label>
              <select name='semester' id='semester' className='w-full h-10 mt-1 block m-0 p-0 pl-4 rounded-md text-sm outline-none' disabled required>
                <option value={studentDetails[0].semester} selected>{`${studentDetails[0].semester} SEMESTER (fetched)`}</option>
                <option value='I'>I</option>
                <option value='II'>II</option>
                <option value='III'>III</option>
                <option value='IV'>IV</option>
                <option value='V'>V</option>
                <option value='VI'>VI</option>
                <option value='VII'>VII</option>
                <option value='VII'>VIII</option>
              </select>
            </form>

            <div className='w-full pt-0 p-16 bg-white'>
              <div className='grid grid-cols-1 justify-items-center'>
                <button className='text-white bg-blue-600 rounded-sm flex justify-center items-center w-full text-xs h-9' onClick={() => handleAddStudent()}><span class="text-base me-2 material-symbols-outlined">
                  add
                </span> Add student</button>
              </div>
            </div>
          </div>
        </div>
        {/* Display the messages */}
        {message && <MessageNotification type={messageType} message={message} />}
      </div>
    </>
  )
}