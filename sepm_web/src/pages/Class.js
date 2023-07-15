import React, { useEffect, useState, useMemo } from 'react'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'

const data = [
    {
        'id': 2,
        'year': 'II',
        'semester': 'III',
        'batch': '2021-2025',
        'next_semester': 'IV',
        'current_semester_id': 3,
        'next_semester_id': 4,
        'total_students': 58,
        'all_clears': 30,
        'arrers': 28
    },
]

let canPromote = true;

const students = [
    {
        'id': 1,
        'year': 'II',
        'reg_no': 812021205001,
        'name': 'Abdul Hajeesh',
        'is_calculated': true,
        'sem_id': 3,
        'semester': 'III',
        'category': 'A',
        'cgpa': 7.8,
    },
    {
        'id': 2,
        'reg_no': 812021205013,
        'name': 'Elamaran',
        'year': 'II',
        'is_calculated': true,
        'sem_id': 3,
        'semester': 'III',
        'category': 'A',
        'cgpa': 7.8,
    },
    {
        'id': 3,
        'reg_no': 812021205025,
        'name': 'Manikandan P',
        'category': 'A',
        'year': 'II',
        'is_calculated': true,
        'sem_id': 3,
        'semester': 'III',
        'cgpa': 7.8,
    }
    , {
        'id': 4,
        'reg_no': 812021205040,
        'name': 'Pravin',
        'category': 'A',
        'year': 'II',
        'is_calculated': true,
        'sem_id': 3,
        'semester': 'III',
        'cgpa': 7.8,
    }
]

// const semesters = [{ 
//         'class_name': 'I',
//         semester: 'I',
//         'next_semester_name': 'II',
//         'next_semester_id': 2,
//     }, {
//         'class_name': 'I',
//         semester: 'II',
//         'next_semester_name': 'III',
//         'next_semester_id': 3,
//     },{
//         'class_name': 'II',
//         'semester_name': 'III',
//         semester: 'III',
//         'next_semester_name': 'IV',
//         'next_semester_id': 4,
//     },{
//         'class_name': 'II',
//         'semester_name': 'IV',
//         semester: 'VI',
//         'next_semester_name': 'V',
//         'next_semester_id': 5,
//     },{
//         'class_name': 'III',
//         semester: 'V',
//         'next_semester_name': 'VI',
//         'next_semester_id': 2,
//     },{
//         'class_name': 'III',
//         semester: 'VI',
//         'next_semester_name': 'VII',
//         'next_semester_id': 2,
//     },{
//         'class_name': 'IV',
//         semester: 'VII',
//         'next_semester_name': 'VII',
//         'next_semester_id': 8,
//     },{
//         'class_name': 'I',
//         'next_semester_name': 'I',
//         'next_semester_id': 1,
//     }
// ]

export const Class = () => {

    const navigate = useNavigate();
    const [year, setYear] = useState();

    useEffect(() => {
        const pathArray = window.location.pathname.split('/');
        const yearFromURL = pathArray[2];
        setYear(yearFromURL);
    }, [])
    const handlePromote = (current_sem) => {
        data[0].current_semester_id = current_sem + 1;
        data[0].next_semester_id = current_sem + 2;
        alert('Class has been promoted. Please refresh the page')
    }

    const columns = useMemo(
        () => [
            {
                accessorKey: 'reg_no', //access nested data with dot notation
                header: 'Reg No',
                size: 150,
            },
            {
                accessorKey: 'name',
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'category', //normal accessorKey
                header: 'Category',
                size: 200,
            },
            {
                accessorKey: 'semester',
                header: 'Semester',
                size: 150,
            }
        ],
        [],
    );
    return (
        <>
            <div className='bg-gray-100 w-full h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>
                {/* Page Heading */}
                <div className='flex mb-5 items-center'>
                    <span class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => navigate(-1)}>
                        keyboard_arrow_left
                    </span>
                    <h1 className='p-0 m-0 font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800'>{year} YEAR</h1>
                </div>


                <div className='lg:w-full xl:w-11/12 pt-5 grid grid-cols-1 lg:grid-cols-2 justify-between md:pe-5 md:me-5 mt-5'>

                    {/* Class Details */}
                    <div className=''>
                        <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:ml-0 xl:ml-44'>
                            <div>
                                <p className='states text-sm xl:text-base'><b className='text-gray-500'>Year</b></p>
                                <p className='states text-sm xl:text-base'><b className='text-gray-500'>Smester</b></p>
                                <p className='states text-sm xl:text-base'><b className='text-gray-500'>Batch</b></p>
                                <p className='states text-sm xl:text-base'><b className='text-gray-500'>Total Students</b></p>
                            </div>
                            <div>
                                <span className='block text-sm xl:text-base'>: {data[0].year}</span>
                                <span className='block text-sm xl:text-base'>: {data[0].semester}</span>
                                <span className='block text-sm xl:text-base'>: {data[0].batch}</span>
                                <span className='block text-sm xl:text-base'>: {students.length}</span>
                            </div>
                        </div>
                    </div>


                    <div className='flex justify-center lg:justify-end items-end mt-5 lg:mt-0'>
                        {students.map((student) => {
                            if (!student.is_calculated) {
                                canPromote = false;
                            }
                        })}

                        {canPromote ?
                            <div>
                                <Link to={'edit' } className='w-56 button text-xs lg:text-base bg-green-500'>
                                    Edit
                                </Link>
                            </div>
                            :
                            <></>
                        }
                        <div>
                            <Link to={data[0].semester + '/add_student'} className='button w-52 text-xs lg:text-base'>
                                <span class="text-base mr-3 material-symbols-outlined">
                                    person_add
                                </span> Add student</Link>
                        </div>
                    </div>
                </div>


                <div className='flex justify-center mt-10'>
                    <div className='w-full sm:w-3/4'>
                        <MaterialReactTable columns={columns} data={students}
                            enableRowActions
                            renderRowActions={({ row, table }) => (
                                <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>

                                    {!row.original.is_calculated ? <Link to={row.original.reg_no + '/calculate'} className='link mr-2 text-green-600'>Caluclate</Link> : <></>}
                                    <Link to={row.original.reg_no + '/edit'} className='text-blue-500'>Edit</Link>
                                </Box>
                            )}
                            positionActionsColumn="last"
                        />
                    </div>

                </div>

            </div>

            {/* <Header />

            <div className='container_responsive'>
                <Link to="/classes" className='d-flex align-items-center position link'>
                    <span class="material-symbols-outlined">
                        chevron_left
                    </span>
                    Go back
                </Link>
                <div className='d-block d-md-flex justify-content-between pe-md-5 me-md-5 mt-5'>
                    <div>
                        <h5>{data[0].class_name} YEAR - {data[0].current_semester} SEMESTER</h5>
                        <p className='states mt-3'>Btach: <b>{data[0].batch}</b></p>
                        <p className='states'>Current Semester: <b>{data[0].current_semester} Semester</b></p>
                        {!canPromote ? <span className='info'>* To calculate next semester CGPA, Kindly create a new semester and calculate CGPA for current semester</span> : <></>}
                    </div>
                    <div className='d-flex'>
                        {students.map((student) => {
                            if (!student.is_calculated) {
                                canPromote = false;
                            }
                        })}

                        {canPromote ?
                            <div>
                                <Link to='#' className='button bg-success' onClick={() => handlePromote(data[0].current_semester_id)}>
                                    <span class="fs-6 me-1 material-symbols-outlined">
                                        moving
                                    </span>
                                    Promote to {data[0].next_semester} Semester</Link>
                            </div>
                            :
                            <></>
                        }
                        <div>
                            <Link to={'/class/' + data[0].class_name + '/' + data[0].current_semester + '/add_student'} className='button'>
                                <span class="fs-6 me-1 material-symbols-outlined">
                                    person_add
                                </span>
                                Add student</Link>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column mt-5'>
                    <table cellPadding="0" cellSpacing="0" border="0">
                        <thead>
                            <tr className='table_header'>
                                <th>Reg. No</th>
                                <th>Name</th>
                                <th>Category</th>
                                <th>CGPA</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((year) => {
                                return (
                                    <tr key={year.reg_no}>
                                        <td>{year.reg_no}</td>
                                        <td>{year.name}</td>
                                        <td>{year.category}</td>
                                        <td>{year.cgpa}</td>
                                        <td>
                                            {!year.is_calculated ? <Link to={'/class/' + year.class_name + '/' + year.reg_no + '/calculate'} className='link me-2 text-success'>Caluclate</Link> : <></>}
                                            <Link to={'/class/' + year.class_name + '/' + year.reg_no + '/edit'} className='link'>Edit</Link>
                                        </td>
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
