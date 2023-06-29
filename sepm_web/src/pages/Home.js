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
      <Header />
      <Menu />

      <div className='container_own'>
      <h6><b>Welcome back!</b></h6>
        <div className='row'>
          {data.map((year) => {
            return (
              <div className='card_container d-flex flex-wrap justify-content-around align-items-center col-12 col-md-3 me-3 mt-3' key={year.id}>
                <div className=''>
                  <p className='year_name'>{romanNumbers[year.class_name][0]}</p>
                  <p className='year_notation'>{romanNumbers[year.class_name][1]} Year</p>
                </div>
                <div className='mt-3'>
                  <pre className='states'>Total Students  : <b>{year.total_students}</b></pre>
                  <pre className='states'>All Clears              : <b>{year.all_clears}</b></pre>
                  <pre className='states'>Arrers                    : <b>{year.arrers}</b></pre>
                  <Link to={'/class/'+year.class_name} className='align-self-end link'>Manage</Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
