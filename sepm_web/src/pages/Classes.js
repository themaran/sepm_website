import React, { useState, useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';
import { Link } from 'react-router-dom'
import {Box } from '@mui/material';
import '../assets/css/classes.css'
import '../assets/css/alert.css'


const class_data = [
  {
    id: 1,
    class_name: 'I',
    current_semester: 'I',
    batch: '2022-2026',
    total_students: 58,
    all_clears: 30,
    regulation: 'REG 21',
    arrers: 28
  },
  {
    'id': 2,
    'class_name': 'II',
    'current_semester': 'III',
    'batch': '2021-2025',
    'total_students': 58,
    'regulation': 'REG 21',
    'all_clears': 30,
    'arrers': 28
  },
  {
    'id': 3,
    'class_name': 'III',
    'current_semester': 'V',
    'batch': '2020-2024',
    'total_students': 58,
    'regulation': 'REG 19',
    'all_clears': 30,
    'arrers': 28
  },
  {
    'id': 4,
    'class_name': 'IV',
    'current_semester': 'VII',
    'batch': '2019-2023',
    'total_students': 58,
    'regulation': 'REG 19',
    'all_clears': 30,
    'arrers': 28
  }
]

export const Classes = () => {
  const [showAlert, setShowAlert] = useState(false);
  const columns = useMemo(
    () => [
      {
        accessorKey: 'class_name', //access nested data with dot notation
        header: 'Year',
        size: 150,
      },
      {
        accessorKey: 'current_semester',
        header: 'Semester',
        size: 150,
      },
      {
        accessorKey: 'regulation', //normal accessorKey
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

  return (
    <>
      <div className='bg-gray-100 w-full h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>
        {/* Page Heading */}
        <h1 className='font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800 mb-5'>Classes</h1>
        <div className='w-full sm:w-11/12 flex justify-end mb-5 md:pr-10'>
          <Link to='new-class' className='col-start-2 lg:col-start-2 button w-40' onClick={() => setShowAlert(true)}>
            <span class="fs-6 material-symbols-outlined">
              add
            </span>
            Add new class</Link>
        </div>
        <div className='flex justify-center'>
          <div className='w-full sm:w-3/4'>
            <MaterialReactTable columns={columns} data={class_data}
              enableRowActions
              renderRowActions={({ row, table }) => (
                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>

                  <Link className='text-blue-400' to={row.original.class_name}>Manage</Link>

                </Box>
              )}
              positionActionsColumn="last"
            />
          </div>

        </div>

                <div>
                  <p className='text-gray-400 text-sm absolute right-0 bottom-0'>Current version: 1.2</p>
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
