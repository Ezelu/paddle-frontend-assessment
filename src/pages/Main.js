

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Main.css';
import {Pagination} from '@material-ui/lab';
import { Container, LinearProgress } from '@material-ui/core';
import { FaGithub, FaInternetExplorer } from 'react-icons/fa'








export default function Main () {

  const [data, set_data] = useState([]);
  const [page, set_page] = useState(1);
  const [count, set_count] = useState(1);
  const [loading, set_loading] = useState(false)

  const fetchData = async () => {
    set_loading(true)
    const {data} = await axios.get(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`);

    set_count(data.total_count)
    set_data(data.items);
    set_loading(false)
  }

  useEffect(async() => {
    fetchData()
  }, [page])

  console.log(data)








  return (
    <Container width="70%">
      <h1 className='trending'> Trending Repos </h1>

      { loading ?
        <LinearProgress style={{margin: '5% 0%'}}/> :
        ( 
          data.map(each => {
          return (
            <div className='container'>
              <aside className='img_container'>
                <img src={each.owner.avatar_url} alt={each.name} />
              </aside>

              <aside className='details'>
                <h2> {each.full_name} </h2>
                <p> { each.description ? each.description : 'No description available' } </p>
                <button disabled> <b> Stars: </b> {each.stargazers_count} </button>
                <button disabled> <b> Issues: </b> {each.open_issues_count} </button>
                <button disabled> <b> Forks: </b> {each.forks} </button>
                <button disabled> <b> Language: </b> { each.language ? each.language : each.language } </button>

                <p> Submitted at { (each.created_at).slice(0, 10) } </p>
                <p> 
                  {
                  each.homepage &&
                  <a href={each.homepage} target='_blank'> <FaInternetExplorer className='fa' /> </a>
                  } 

                  {
                  each.svn_url ?
                  <a href={each.svn_url} target='_blank'> <FaGithub className='fa' /> </a> :
                  "Not available"
                  }
                  
                  </p>

                {/* <p> {
                  each.svn_url ?
                  <a href={each.svn_url} target='_blank'> <FaGithub className='fa' /> </a> :
                  "Not available"
                  } </p> */}


              </aside>
            </div>
            )
          })
        )
      }






      <Pagination
          style = {
            {padding: 20,
            width: '100%',
            display: 'flex',
            justifyContent: 'center'}
          }
          onChange={
            (_, value) => {
              set_page(value)
              window.scroll(0, 0)
            }
          }
          count = {count}
        />
    </Container>
  )
}