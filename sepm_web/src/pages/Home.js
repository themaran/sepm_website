import React, { useState } from 'react'
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

  const [unread, setUnread] = useState([]);
  return (
    <>

      <div className='bg-gray-100 w-full h-screen relative pt-28 pl-5 pr-5 sm:pl-64'>
        {/* Page Heading */}
        <h1 className='font-extrabold md:text-2xl sm:text-xl text-lg tracking-tight text-gray-800 mb-5'>Dashboard</h1>
        {/* Grid system */}
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-3 xl:grid-cols-6 grid-rows-6 gap-3'>

          {/* Grid 1 */}
          <div className='bg-white grid grid-cols-3 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 border p-5 sm:pl-5 sm:pt-5 sm:pb-5 sm:pr-5 rounded-md'>
            <div className='flex flex-col justify-center justify-self-center items-center bg-green-200 rounded-full w-7 md:w-8 h-7 md:h-8'>
              <span class="material-symbols-outlined text-sm">
                group
              </span>
            </div>
            <div className='col-span-2'>
              <h2 className='text-gray-400 text-xs font-medium'>I YEAR STUDENTS</h2>
              <p className='text-xl font-semibold mt-2'>62</p>
              <Link className='text-sm text-blue-500 mt-2'>Manage</Link>
            </div>
          </div>

          {/* Grid 2 */}
          <div className='bg-white grid grid-cols-3 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 border p-5 sm:pl-5 sm:pt-5 sm:pb-5 sm:pr-5 rounded-md'>
            <div className='flex flex-col justify-center justify-self-center items-center bg-green-200 rounded-full w-7 md:w-8 h-7 md:h-8'>
              <span class="material-symbols-outlined text-sm">
                group
              </span>
            </div>
            <div className='col-span-2'>
              <h2 className='text-gray-400 text-xs font-medium'>II YEAR STUDENTS</h2>
              <p className='text-xl font-semibold mt-2'>58</p>
              <Link className='text-sm text-blue-500 mt-2'>Manage</Link>
            </div>
          </div>

          {/* Grid 3 */}
          <div className='bg-white grid grid-cols-3 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 border p-5 sm:pl-5 sm:pt-5 sm:pb-5 sm:pr-5 rounded-md'>
            <div className='flex flex-col justify-center justify-self-center items-center bg-green-200 rounded-full w-7 md:w-8 h-7 md:h-8'>
              <span class="material-symbols-outlined text-sm">
                group
              </span>
            </div>
            <div className='col-span-2'>
              <h2 className='text-gray-400 text-xs font-medium'>III YEAR STUDENTS</h2>
              <p className='text-xl font-semibold mt-2'>55</p>
              <Link className='text-sm text-blue-500 mt-2'>Manage</Link>
            </div>
          </div>

          {/* Grid 4 */}
          <div className='bg-white grid grid-cols-3 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-1 border p-5 sm:pl-5 sm:pt-5 sm:pb-5 sm:pr-5 rounded-md'>
            <div className='flex flex-col justify-center justify-self-center items-center bg-green-200 rounded-full w-7 md:w-8 h-7 md:h-8'>
              <span class="material-symbols-outlined text-sm">
                group
              </span>
            </div>
            <div className='col-span-2'>
              <h2 className='text-gray-400 text-xs font-medium'>IV YEAR STUDENTS</h2>
              <p className='text-xl font-semibold mt-2'>50</p>
              <Link className='text-sm text-blue-500 mt-2'>Manage</Link>
            </div>
          </div>
          {/* Grid 5 */}
          <div className='col-span-2 row-span-2 sm:col-span-4 lg:col-span-2 sm:row-span-2 lg:row-span-3 border rounded-md bg-white pt-8 pl-8'>
            <h1 className='font-bold text-xl tracking-tighter text-gray-700'>Notification</h1>
            <div className='grid grid-cols-2 '>
              {
                unread.length >= 1 ?
                  <>
                    <div className='col-span-2 mt-2 flex'>
                      <ul>
                        {unread.map((mesaage) => {
                          return (
                            <li key={mesaage.id} className='text-sm mt-3'><b>{mesaage.sender}<span className='text-xs text-gray-500'>({mesaage.sender_role})</span></b> - {mesaage.message}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </> :
                  <>
                    <div className='col-span-2 mt-20 flex justify-center items-center'>
                      <p>Upcoming feature</p>
                    </div>
                  </>
              }
            </div>
          </div>
          {/* Grid 6 */}
          <div className='col-span-2 row-span-2 sm:col-span-4 lg:col-span-3 sm:row-span-2 lg:row-span-3 border rounded-md bg-white pt-8 pl-8'>
            <h1 className='font-bold text-xl tracking-tighter text-gray-700'>Performance</h1>
            <div className='grid grid-cols-2 '>
              {
                unread.length >= 1 ?
                  <>
                    <div className='col-span-2 mt-2 flex'>
                      <ul>
                        {unread.map((mesaage) => {
                          return (
                            <li key={mesaage.id} className='text-sm mt-3'><b>{mesaage.sender}<span className='text-xs text-gray-500'>({mesaage.sender_role})</span></b> - {mesaage.message}</li>
                          )
                        })}
                      </ul>
                    </div>
                  </> :
                  <>
                    <div className='col-span-2 mt-20 flex justify-center items-center'>
                      <p>Upcoming feature</p>
                    </div>
                  </>
              }
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
