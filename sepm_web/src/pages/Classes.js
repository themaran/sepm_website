import React, { useState, useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Link } from 'react-router-dom'
import { Box } from '@mui/material';
import '../assets/css/classes.css'
import '../assets/css/alert.css'
import { Spinner } from '../components/Spinner';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Classes = () => {
  const [spinnerVisible, setSpinnerVisible] = useState(true);
  const classesData = useSelector((state) => state.classes);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'year', //access nested data with dot notation
        header: 'Year',
        size: 150,
      },
      {
        accessorKey: 'semester',
        header: 'Semester',
        size: 150,
      },
      {
        accessorKey: 'regulation',
        header: 'Regulation',
        size: 200,
      },
      {
        accessorKey: 'batch',
        header: 'Batch',
        size: 150,
      }
    ],
    [],
  );

  useEffect(() => {
    setTimeout(() => {
      setSpinnerVisible(false)
    }, 100);
  }, []);

  console.log(classesData.classes);
  return (
    <>
      <div className='bg-gray-100 w-full h-screen relative pt-28 pl-5 pr-5 md:pl-64 transition-all'>
        {/* Page Heading */}
        <h1 className='font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800 mb-5'>Classes</h1>
        <div className=' mb-5 flex flex-col items-center '>
          <div className='w-full h-full md:w-3/4'>

            {spinnerVisible ? <Spinner spinner={spinnerVisible} /> :
              <>
                <div className='grid grid-cols-1 grid-rows-1 justify-items-end'>
                  <div className='flex'>
                    <Link to='new-semester' className='text-white bg-blue-600 rounded-sm flex justify-center items-center w-36 text-xs h-9'>
                      <span class="text-sm mr-1 material-symbols-outlined">
                        add
                      </span>
                      Add semester</Link>
                    <Link to='new-class' className='text-white ml-2 col-span-4 bg-blue-600 rounded-sm flex justify-center items-center w-36 text-xs h-9'>
                      <span class="text-sm mr-1 material-symbols-outlined">
                        add
                      </span>
                      Add class</Link>
                  </div>
                </div>
                <div className='grid grid-cols-1 mt-5 transition-all'>
                  <MaterialReactTable columns={columns} data={classesData.classes}
                    enableRowActions
                    renderRowActions={({ row, table }) => (
                      <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>

                        <Link className='text-blue-400' to={row.original.year + '/' + row.original.semester}>Manage</Link>

                      </Box>
                    )}
                    positionActionsColumn="last"
                  />
                </div>

              </>
            }

          </div>
        </div>

      </div>
      {/* <Header />
            {showAlert ? 
            <>
                <div className='alert'>
                    <div id='alert-container' className='alert_container'>
                        <span class="material-symbols-outlined close" onClick={()=>setShowAlert(false)}>
                            close
                        </span>
                        <h5 className='d-flex align-items-center'>
                            <span class="fs-5 me-2 material-symbols-outlined">
                                tips_and_updates
                            </span>
                            Did you create a semester for this class?
                        </h5>

                        <div className='alert_content mt-3'>
                            <p>Please create a new semester for this new class if you not created. Click the below button accordingly</p>
                        </div>

                        <div className='d-flex justify-content-end'>
                            <button className='button me-2' onClick={()=> {setShowAlert(false); window.location.href ='/add_semester'; }}>Create new semester</button>
                            <button className='button button-transparent' onClick={()=> {setShowAlert(false); window.location.href ='/classes/add_class';}}>Already semester created</button>
                        </div>
                    </div>
                </div>
            </> : <></>}

            <div className='container_responsive'>
                <div className='d-block d-md-flex justify-content-between pe-md-5 me-md-5'>
                    <h5>Classes</h5>

                    <div className='d-flex'>
                        <Link to='#' className='button d-flex align-items-center' onClick={()=> setShowAlert(true)}>
                            <span class="fs-6 material-symbols-outlined">
                                add
                            </span>
                            Add new class</Link>
                    </div>
                </div>

                <div className='d-flex flex-column mt-5'>
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                            <tr className='table_header'>
                                <th scope='col'>Year</th>
                                <th scope='col'>Semester</th>
                                <th scope='col'>Regulation</th>
                                <th scope='col'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {class_data.map((year) => {
                                return (
                                    <tr key={year.id}>
                                        <td>{year.class_name} YEAR</td>
                                        <td>{year.current_semester} SEMESTER</td>
                                        <td>{year.regulation}</td>
                                        <td><Link to={'/class/' + year.class_name} className='link'>Manage</Link></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div> */}
    </>
  )
}
