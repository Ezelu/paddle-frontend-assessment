import * as React from 'react';
import '../styles/Main_Nav.css';
import { Container, Button } from '@mui/material';
import { useNavigate } from 'react-router';




export default function NavBar() {
  const navigate = useNavigate();


  return (
    <Container>
      <div className='nav_container'>
        <aside className='title'>
          <h1 style={{color: 'white'}}> Metricks </h1>
        </aside>

        <aside className='nav'>
          <ol>
            <li onClick={() => window.open('/github', '_blank')}> Github </li>
            <li>About Us</li>
            <li>Blog</li>
            <button> Contact Us </button>
          </ol>
        </aside>
      </div>
    </Container>
  );
}