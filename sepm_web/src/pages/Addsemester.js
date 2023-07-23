import { Link, useNavigate } from 'react-router-dom';
import './Addsemester.css';
import React, { useState, useRef, useEffect } from 'react';
import MessageNotification from '../components/MessageNotification';
import Cookies from 'js-cookie';

export function Addsemester() {
  return (
    <>
      <Newsemester />
    </>
  );
}

function Newsemester() {
  const [semester, setSemester] = useState('');
  const [inputs, setInputs] = useState([
    { subject_code: '', subject_name: '', subject_credits: '' },
  ]); const [loading, setLoading] = useState(false);
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
    showMessage('success', 'Semester created! You can create another');
  };

  const handleSomethingWentWrong = () => {
    // Simulate an error
    showMessage('error', 'Something went wrong. Please try again later.');
  };


  const handleSemesterSubmit = () => {

    const semesterData = {
      semester: semester, // Replace "Your Semester Name" with the actual semester name
      subjects: Object.assign(
        {},
        ...inputs.map((input, index) => ({
          [input.subject_code]: {
            subject_name: input.subject_name,
            subject_credits: input.subject_credits,
          },
        }))
      ),
    };

    // Initial data to send to server
    let data = { semester: semesterData }
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


    fetch('https://semp.glitch.me/add_semester', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleSaveChanges();
      })
      .catch((err) => {
        console.log(err);
        handleSomethingWentWrong();
      });
  }

  const handleAddInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      { subject_code: '', subject_name: '', subject_credits: '' },
    ]);
  };

  const handleRemoveInput = (index) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs.splice(index, 1);
      return newInputs;
    });
  };

  const handleInputChange = (index, fieldName, value) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      newInputs[index][fieldName] = value;
      return newInputs;
    });
  };

  const inputRefs = useRef([]);

  const handleKeyDown = (event, index, fieldName) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (fieldName === 'subject_credit') {
        focusNextInput(index + 1, 'subject_code');
      } else {
        focusNextInput(index, getNextFieldName(fieldName));
      }
    }
  };

  const focusNextInput = (index, fieldName) => {
    if (index < inputs.length && inputRefs.current[index][fieldName]) {
      inputRefs.current[index][fieldName].focus();
    }
  };

  const getNextFieldName = (currentFieldName) => {
    if (currentFieldName === 'subject_code') return 'subject_name';
    if (currentFieldName === 'subject_name') return 'subject_credit';
    return '';
  };

  const renderInputs = () => {
    return inputs.map((input, index) => (
      <div key={index} className={`mt-5 transition-all duration-500 ${index === inputs.length - 1 ? 'focus-animation' : ''}`}>
        <label className="text-sm font-medium text-gray-600 tracking-tight">Subject {index + 1}</label>
        <div>
          <input
            name="subcode"
            className="w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none uppercase"
            type="text"
            placeholder="code"
            value={input.subject_code}
            required
            onChange={(e) => handleInputChange(index, 'subject_code', e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index, 'subject_code')}
            ref={(ref) => {
              inputRefs.current[index] = { ...inputRefs.current[index], subject_code: ref };
            }}
          />
          <input
            name="subname"
            className="w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none"
            placeholder="Subject name"
            value={input.subject_name}
            required
            onChange={(e) => handleInputChange(index, 'subject_name', e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index, 'subject_name')}
            ref={(ref) => {
              inputRefs.current[index] = { ...inputRefs.current[index], subject_name: ref };
            }}
          />
          <input
            name="credits"
            className="w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none"
            placeholder="Credits"
            value={input.subject_credits}
            required
            onChange={(e) => handleInputChange(index, 'subject_credits', e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, index, 'subject_credits')}
            ref={(ref) => {
              inputRefs.current[index] = { ...inputRefs.current[index], subject_credits: ref };
            }}
          />
          {index > 0 ? (
            <button onClick={() => handleRemoveInput(index)} className="mt-2 flex items-center text-red-400 text-sm">
              <span className="text-sm material-symbols-outlined mr-1">Delete</span> Delete
            </button>
          ) : null}
        </div>
      </div>
    ));
  };



  return (
    <>
      {/* Container */}
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 md:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <Link to={'/classes'} className='mt-1 p-0'>
            <span class="material-symbols-outlined mr-2 cursor-pointer">
              keyboard_arrow_left
            </span>
          </Link>
          <h1 className='p-0 m-0 font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800'>New Semester</h1>
        </div>

        <div className='flex flex-col items-center'>
          <form id='form' className={`relative mt-10 bg-white transition-all p-10 rounded-md rounded-b-none w-full lg:w-1/3`} method='post'>
            <div className='text-start w-full'>
              <label for='semname' className='text-base font-medium text-gray-600 tracking-tight'>Semester Name</label>
              <input type='text' name='semname' value={semester} className='w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' id='semname' onChange={(e) => setSemester(e.target.value)} placeholder='Enter Semester Name' required />
              <div className='input_group mt-5 '>
                <div>
                  {renderInputs()}
                </div>
                <div className='pt-5 bg-white'>
                  <a className='text-sm h-12 cursor-pointer text-blue-500' onClick={handleAddInput}>+ Add subject</a>
                </div>
              </div>
            </div>
          </form>
          <div className='flex transition-all  justify-center p-10 md:pl-16 md:pr-16 w-full sm:w-full lg:w-1/3 bg-white pt-0 pb-10 rounded-b-md'>
            <button className={`rounded-sm flex justify-center items-center w-36 h-10 lg:w-44 lg:h-11 text-xs text-white ${ loading == true ? 'bg-blue-300 cursor-not-allowed' : ' bg-blue-500 cursor-pointer'}`} onClick={() => handleSemesterSubmit()}>
              {loading ? <>Please wait</> : <>Create Now
                <span className="text-base ml-2 material-symbols-outlined">
                  add
                </span></>}
            </button>
          </div>
        </div >

        {/* Display the messages */}
        {message && <MessageNotification type={messageType} message={message} />}
      </div>
    </>

  )
}



