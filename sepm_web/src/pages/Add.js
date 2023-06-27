import { Header } from '../components/Header';
import { Menu } from '../components/Menu';
import './Add.css';
import React from 'react';

export function Add() {
  return (
    <>
      <Header />
      <Menu />
      <Form />
    </>
  );
}

function Form() {
  return (
    <>
      <div className='container'>
        <h2>Add Students</h2>
        <form>
          <label>Reg. No</label>
          <input type='phone'></input>
          <br></br>
          <label>Reg. No</label>
          <input type='phone'></input>
          <br></br>
          <label>Reg. No</label>
          <input type='phone'></input>
          <br></br>
          <label>Reg. No</label>
          <input type='phone'></input>
          <br></br>
          <label>Reg. No</label>
          <input type='phone'></input>
          <br></br>
          <label>Reg. No</label>
          <input type='phone'></input>
          <br></br>
          <button></button>
          <br></br>
          <button></button>
        </form>
      </div>
    </>
  )
}