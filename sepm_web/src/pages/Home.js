import React from 'react'
import { Header } from '../components/Header'
import { Menu } from '../components/Menu'
import '../assets/css/home.css'
import { Link } from 'react-router-dom'

const data = [
  {
    'id': 1,
    'class_name': 'I',
    'total_students': 58,
    'all_clears': 30,
    'arrers': 28
  },
  {
    'id': 2,
    'class_name': 'II',
    'total_students': 58,
    'all_clears': 30,
    'arrers': 28
  },
  {
    'id': 3,
    'class_name': 'III',
    'total_students': 58,
    'all_clears': 30,
    'arrers': 28
  },
  {
    'id': 4,
    'class_name': 'IV',
    'total_students': 58,
    'all_clears': 30,
    'arrers': 28
  }
]

const romanNumbers = {
  'I': [1, 'st'],
  'II': [2, 'nd'],
  'III': [3, 'rd'],
  'IV': [4, 'th']
}

export const Home = () => {
  return (
    <>

      <div className='bg-gray-100 w-full h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>
        <div className='grid auto-cols-auto sm:grid-cols-3'>
          <h1 className='font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800 col-auto sm:col-span-2'>Dashboard</h1>

          <div className='bg-white grid col-span-3 border pl-10 pt-5 pb-5 pr-10 rounded-md relative'>
            <div className='flex col-span-0 flex-col justify-center items-center bg-green-200 rounded-full w-7 md:w-8 h-7 md:h-8'>
              <span class="material-symbols-outlined text-sm">
                group
              </span>
            </div>
            <div className=''>
              <h2 className='text-gray-400 text-sm font-medium'>I YEAR STUDENTS</h2>
              <p className='text-xl font-semibold mt-2'>58</p>
              <Link className='text-sm text-blue-500 mt-2'>Manage</Link>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container_own'>
        <h6><b>Welcome back!</b></h6>
        <div className='row'>
          {data.map((year) => {
           // return (
              // <div className='card_container d-flex flex-wrap justify-content-around align-items-center col-12 col-md-3 me-3 mt-3' key={year.id}>
              //   <div className=''>
              //     <p className='year_name'>{romanNumbers[year.class_name][0]}</p>
              //     <p className='year_notation'>{romanNumbers[year.class_name][1]} Year</p>
              //   </div>
              //   <div className='mt-3'>
              //     <pre className='states'>Total Students  : <b>{year.total_students}</b></pre>
              //     <pre className='states'>All Clears              : <b>{year.all_clears}</b></pre>
              //     <pre className='states'>Arrers                    : <b>{year.arrers}</b></pre>
              //     <Link to={'/class/'+year.class_name} className='align-self-end link'>Manage</Link>
              //   </div>
              // </div>
            )
          })}
        </div>
      </div> */}
    </>
  )
}
