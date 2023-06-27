import React from 'react'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import { Link } from 'react-router-dom'
import '../assets/css/classes.css'

const class_data = [
    {
        'id': 1,
        'class_name': 'I',
        'current_semester': 'I',
        'batch': '2022-2026',
        'total_students': 58,
        'all_clears': 30,
        'arrers': 28
    },
    {
        'id': 2,
        'class_name': 'II',
        'current_semester': 'III',
        'batch': '2021-2025',
        'total_students': 58,
        'all_clears': 30,
        'arrers': 28
    },
    {
        'id': 3,
        'class_name': 'III',
        'current_semester': 'V',
        'batch': '2020-2024',
        'total_students': 58,
        'all_clears': 30,
        'arrers': 28
    },
    {
        'id': 4,
        'class_name': 'IV',
        'current_semester': 'VII',
        'batch': '2019-2023',
        'total_students': 58,
        'all_clears': 30,
        'arrers': 28
    }
]

export const Classes = () => {
    return (
        <>
            <Header />
            <Menu />

            <div className='container_responsive'>
                <div className='d-block d-md-flex justify-content-between pe-md-5 me-md-5'>
                    <h5>Classes</h5>

                    <div>
                        <Link to='/add_semester' className='button'>Add new semester</Link>
                        <Link to='/classes/add_class' className='button'>Add new class</Link>
                    </div>
                </div>

                <div className='d-flex flex-column mt-5'>
                    <table cellpadding="0" cellspacing="0" border="0">
                        <thead>
                        <tr className='table_header'>
                            <th>Year</th>
                            <th>Semester</th>
                            <th>Batch</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                    </table>
                    <table>
                        <tbody>
                            {class_data.map((year) => {
                                return (
                                    <tr key={year.id}>
                                        <td>{year.class_name}</td>
                                        <td>{year.current_semester}</td>
                                        <td>{year.batch}</td>
                                        <td><Link to={'/class/'+year.class_name} className='link'>Manage</Link></td>
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
