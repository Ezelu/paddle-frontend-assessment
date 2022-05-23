import React, { useState } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { useNavigate, Link } from 'react-router-dom';
import Main_Nav from '../components/Main_Nav';
import '../styles/Home.css'
import Footer from '../components/Footer';




export default function Home () {
  // const classes = useStyles();
  const navigate = useNavigate()

  return (
    <section id='main'>
      <Main_Nav />

      <main>
        <h1> SOMETHING AWESOME IS COMING SOON </h1>
        <p> Your all-in-one affiliate marketing tracking software track, automate and optimize your campaigns </p>

        <div className='timer'>
          <div>
            <h4> 7 </h4>
            <span> days </span> 
          </div>
          <div>
            <h4> 24 </h4>
            <span> hours </span> 
          </div>
          <div>
            <h4> 54 </h4>
            <span> minutes </span> 
          </div>
          <div>
            <h4> 11 </h4>
            <span> Seconds </span> 
          </div>
        </div>

        <div className='subscribe'>
          <aside>
            <input type='text' placeholder='First name' className='details'/>
            <input type='text' placeholder='Last name' className='details' />
          </aside>

          <section>
            <input type='text' placeholder='Last name' />
            <button> Join our waiting list </button> 
          </section>
        </div>

        <Footer />
      </main>
    </section>
  )
}