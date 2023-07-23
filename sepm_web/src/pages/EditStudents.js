import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Add.css';
import React, { useEffect, useState, useRef } from 'react';
import { Spinner } from '../components/Spinner';
import { useSelector } from 'react-redux';
import MessageNotification from '../components/MessageNotification';
import Cookies from 'js-cookie';



export function EditStudent() {
  return (
    <>
      <Form />
    </>
  );
}

function Form() {
  const navigate = useNavigate()
  const [registerNumber, setRegisterNumber] = useState('812021205');
  const [studentDetails, setStudentDetails] = useState({
    register_number: '812021205',
    student_name: '',
    cgpa: 0,
    arrears: 0,
    student_category: 'A',
    year: '',
    semester: '',
    total_cgpa: 0,
  });
  const nameRef = useRef(null);
  const categoryRef = useRef(null);
  const cgpaRef = useRef(null);
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const years = useSelector((state) => state.classes.years);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setSpinnerVisible(false);
    }, 100);

    const pathArray = window.location.pathname.split('/');
    const newInput = {
      ...studentDetails,
      year: pathArray[2], // Directly set year property
      semester: pathArray[3],
    };

    setRegisterNumber(pathArray[4]);

    if (years && years[pathArray[2]] && years[pathArray[2]].students[registerNumber]) {
      const student = years[pathArray[2]].students[registerNumber];
      newInput.register_number = student.register_number;
      newInput.student_name = student.student_name;
      newInput.student_category = student.student_category;
      newInput.cgpa = student.cgpa;
      newInput.total_cgpa = student.total_cgpa;
    }

    setStudentDetails(newInput);
  }, [years, registerNumber]);


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
    showMessage('success', 'Changes saved! You can create another');
  };

  const handleSomethingWentWrong = () => {
    // Simulate an error
    showMessage('error', 'Something went wrong. Please try again later.');
  };


  const handleDelete = () => {
    
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

    fetch('https://semp.glitch.me/delete_student', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({register_number: studentDetails.register_number, year: studentDetails.year}),
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


  const handleSave = () => {
    console.log('Triggered');
    // Use studentDetails directly instead of calling addRegisterNumberAsIndex
    const dataToSend = {
      [studentDetails.register_number]: {
        register_number: studentDetails.register_number,
        student_name: studentDetails.student_name,
        cgpa: {[studentDetails.semester]: {semester: studentDetails.semester, cgpa: studentDetails.cgpa}},
        arrears: studentDetails.arrears,
        student_category: studentDetails.student_category,
        year: studentDetails.year,
        semester: studentDetails.semester,
      },
    };

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

    fetch('https://semp.glitch.me/edit_student', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(dataToSend),
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

  const handleRegisterNumberChange = (e) => {
    const updatedDetails = {
      ...studentDetails,
      register_number: e.target.value,
    };
    setStudentDetails(updatedDetails);
  };

  const handleNameChange = (e) => {
    const updatedDetails = {
      ...studentDetails,
      student_name: e.target.value,
    };
    setStudentDetails(updatedDetails);
  };

  const handleCgpaChange = (e) => {
    const updatedDetails = {
      ...studentDetails,
      cgpa: e.target.value,
    };
    setStudentDetails(updatedDetails);
  };

  const handleCategoryChange = (e) => {
    const updatedDetails = {
      ...studentDetails,
      student_category: e.target.value,
    };
    setStudentDetails(updatedDetails);
  };

  const handleKeyPress = (e, ref) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (ref.current) {
        ref.current.focus();
      }
    }
  };

  return (
    <>
      <div className='bg-gray-100 w-full min-h-screen relative pt-28 pl-5 pr-5 md:pl-64'>

        {/* Head of page */}
        <div className='flex mb-5 items-center'>
          <Link class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => { navigate(-1) }}>
            keyboard_arrow_left
          </Link>
          <h1 className='p-0 m-0 font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800'>Edit student</h1>
        </div>
        {spinnerVisible ? <Spinner spinner={spinnerVisible} /> :
          <div className='flex justify-center'>
            <div className='w-full lg:w-1/2'>
              <form className='bg-white transition-all p-16 rounded-md'>
                <span className='info text-sm mb-2 block'>* Year & Semester are fetched automatically. No Need to fill</span>
                <br></br>
                <label htmlFor='reg' className='text-base font-medium text-indigo-900 tracking-tight'>Reg. No</label>
                <input type='phone' name='reg' className='w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none' onChange={handleRegisterNumberChange}
                  value={registerNumber} required
                  onKeyDown={(e) => handleKeyPress(e, nameRef)}
                ></input>
                <br />
                <label htmlFor='name' className='text-base font-medium text-gray-600 tracking-tight'>Name</label>
                <input type='text' name='name' placeholder='Student Name'
                  onChange={handleNameChange}
                  value={studentDetails.student_name}
                  className='w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none'
                  onKeyDown={(e) => handleKeyPress(e, categoryRef)}
                  ref={nameRef}
                  required></input>
                <br></br>
                <label htmlFor='cgpa' className='text-base font-medium text-gray-600 tracking-tight'>
                  CGPA
                </label>
                <input
                  type='text'
                  name='cgpa'
                  placeholder='CGPA'
                  onChange={handleCgpaChange}
                  value={studentDetails.total_cgpa}
                  className='w-full h-10 mt-1 border block m-0 p-0 pl-4 rounded-md text-sm outline-none'
                  onKeyDown={(e) => handleKeyPress(e, cgpaRef)}
                  ref={cgpaRef} // Attach the ref to the input field
                  required
                ></input>
                <br />

                <label htmlFor='category' className='text-base font-medium text-gray-600 tracking-tight'>Category</label>
                <select id='category' name='category'
                  onChange={handleCategoryChange}
                  value={studentDetails.student_category}
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

                <label htmlFor="year" className='text-base font-medium text-gray-600 tracking-tight'>Year</label>
                <select name="year" placeholder='year' id="year" className='w-full h-10 mt-1 block m-0 p-0 pl-4 rounded-md text-sm outline-none' value={studentDetails.year} disabled required>
                  <option value={studentDetails.year} selected>{studentDetails.year} YEAR (fetched)</option>
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                </select>
                <br></br>
                <label htmlFor='semester' className='text-base font-medium text-gray-600 tracking-tight'>Semester</label>
                <select name='semester' id='semester' className='w-full h-10 mt-1 block m-0 p-0 pl-4 rounded-md text-sm outline-none' disabled required>
                  <option value={studentDetails.semester} selected>{studentDetails.semester} SEMESTER (fetched)</option>
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
              <div className='pt-10 p-16 bg-white'>
                <div className='grid grid-cols-2 gap-3 justify-items-center'>
                  <button className='text-white bg-blue-600 rounded-sm flex justify-center items-center w-full text-xs h-9' onClick={() => handleSave()}><span class="text-base me-2 material-symbols-outlined">
                    save
                  </span> Save Changes</button>
                  <button className='text-white bg-red-500 rounded-sm flex justify-center items-center w-full text-xs h-9' onClick={()=> handleDelete()}><span class="text-base me-2 material-symbols-outlined">
                    delete
                  </span> Delete</button>
                </div>
              </div>
            </div>
          </div>}

        {/* Display the messages */}
        {message && <MessageNotification type={messageType} message={message} />}

      </div>
    </>
  )
}