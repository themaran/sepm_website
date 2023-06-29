import React from 'react'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Link } from 'react-router-dom'

const data = [
    {
        'id': 2,
        'class_name': 'II',
        'current_semester': 'III',
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
        'class_name': 'II',
        'reg_no': 812021205001,
        'name': 'Abdul Hajeesh',
        'is_calculated': true,
        'sem_id': 3,
        'current_semester': 'III',
        'category': 'A',
        'cgpa': 7.8,
    },
    {
        'id': 2,
        'reg_no': 812021205013,
        'name': 'Elamaran',
        'class_name': 'II',
        'is_calculated': true,
        'sem_id': 3,
        'current_semester': 'III',
        'category': 'A',
        'cgpa': 7.8,
    },
    {
        'id': 3,
        'reg_no': 812021205025,
        'name': 'Manikandan P',
        'category': 'A',
        'class_name': 'II',
        'is_calculated': true,
        'sem_id': 3,
        'current_semester': 'III',
        'cgpa': 7.8,
    }
    , {
        'id': 4,
        'reg_no': 812021205040,
        'name': 'Pravin',
        'category': 'A',
        'class_name': 'II',
        'is_calculated': true,
        'sem_id': 3,
        'current_semester': 'III',
        'cgpa': 7.8,
    }
]

const semester = [{
    1: {
        'class_name': 'I',
        'next_semester_name': 'II',
        'next_semester_id': 2,
    },
    2: {
        'class_name': 'I',
        'next_semester_name': 'III',
        'next_semester_id': 3,
    },
    3: {
        'class_name': 'II',
        'semester_name': 'III',
        'next_semester_name': 'IV',
        'next_semester_id': 4,
    },
    4: {
        'class_name': 'II',
        'semester_name': 'IV',
        'next_semester_name': 'V',
        'next_semester_id': 5,
    },
    5: {
        'class_name': 'III',
        'next_semester_name': 'VI',
        'next_semester_id': 2,
    },
    6: {
        'class_name': 'III',
        'next_semester_name': 'VII',
        'next_semester_id': 2,
    },
    7: {
        'class_name': 'IV',
        'next_semester_name': 'VII',
        'next_semester_id': 8,
    },
    8: {
        'class_name': 'I',
        'next_semester_name': 'I',
        'next_semester_id': 1,
    }
}]

export const Class = () => {

    const handlePromote = (current_sem) => {
        data[0].current_semester_id = current_sem + 1;
        data[0].next_semester_id = current_sem + 2;
        alert('Class has been promoted. Please refresh the page')
    }
    return (
        <>
            <Header />
            <Menu />

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
            </div>
        </>
    )
}
