import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { useNavigate, Link } from 'react-router-dom'


const useStyles = makeStyles(() => ({
  button: {
    background: '#24292f',
    color: 'white',
    width: '80%',
    margin: '0 10%',
    cursor: 'pointer',
  },
  box: {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  h1: {
    fontSize: '2.2em',
    marginBottom: '5%'
  }
}))




export default function Home () {
  const classes = useStyles();
  const navigate = useNavigate()

  return (
    <section className={classes.box}>
      <h1 className={classes.h1}> Hello and welcome to Gratis popular github repos </h1>
        <button className={classes.button} onClick={() => navigate('github')}> 
          See trending Repos 
        </button>
    </section>
  )
}