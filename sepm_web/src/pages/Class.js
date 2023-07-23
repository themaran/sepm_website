import React, { useEffect, useState, useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table';
import { Box } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Spinner } from '../components/Spinner';
import { useSelector } from 'react-redux';


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


export const Class = () => {
    const [spinnerVisible, setSpinnerVisible] = useState(true);
    const years = useSelector((state) => state.classes.years);
    const [data, setData] = useState([])

    useEffect(() => {
        const pathArray = window.location.pathname.split('/');
        const yearFromURL = pathArray[2];
        let matched = years[yearFromURL];
        setData(matched)
    }, [years])

    const columns = useMemo(
        () => [
            {
                accessorKey: 'register_number', //access nested data with dot notation
                header: 'Reg No',
                size: 150,
            },
            {
                accessorKey: 'student_name',
                header: 'Name',
                size: 150,
            },
            {
                accessorKey: 'student_category', //normal accessorKey
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

    useEffect(() => {
        setTimeout(() => {
            setSpinnerVisible(false)
        }, 100)
    })

    
    return (
        <>
            <div className='bg-gray-100 w-full h-screen relative pt-28 pl-5 pr-5 md:pl-64'>
                {/* Page Heading */}
                <div className='flex mb-5 items-center'>
                    <Link to={'/classes'} className='mt-1 p-0'>
                        <span class="material-symbols-outlined mr-2 cursor-pointer">
                            keyboard_arrow_left
                        </span>
                    </Link>
                    <h1 className='p-0 m-0 font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800'>{data.year} YEAR</h1>
                </div>

                {spinnerVisible ? <Spinner /> :

                    <div className='flex flex-col items-center '>
                        <div className='w-full md:w-3/4'>
                            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 bg-white border rounded-sm p-5 border-sm'>
                                <div>
                                    <div className='grid grid-cols-1 gap-2'>
                                        <div className='flex text-lg font-bold'>
                                            <h2 className='mr-2'>{data.year} YEAR </h2>
                                            <h2>{data.semester} SEMESTER </h2>
                                        </div>
                                        <div>
                                            <p className='text-sm'>{Object.keys(data.students).length} Students</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex justify-self-start items-end md:justify-self-end mt-5 md:mt-0'>
                                   

                                    {true ?
                                        <div>
                                            <Link to={'edit'} className='text-white bg-orange-600 rounded-sm flex justify-center items-center w-36 text-xs h-8'>
                                                Edit Class
                                            </Link>
                                        </div>
                                        :
                                        <></>
                                    }
                                    <div>
                                        <Link to={'add_student'} className='text-white bg-blue-600 ml-5 rounded-sm flex justify-center items-center w-36 text-xs h-8'>
                                            <span class="text-base mr-3 material-symbols-outlined">
                                                person_add
                                            </span> Add student</Link>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-1'>
                                <MaterialReactTable columns={columns} data={Object.values(data.students)}
                                    enableRowActions
                                    renderRowActions={({ row, table }) => (
                                        <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>

                                            {!row.original.is_calculated ? <Link to={row.original.register_number + '/calculate'} className='link mr-2 text-green-600'>Caluclate</Link> : <></>}
                                            <Link to={row.original.register_number + '/edit'} className='text-blue-500'>Edit</Link>
                                        </Box>
                                    )}
                                    positionActionsColumn="last"
                                />
                            </div>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
