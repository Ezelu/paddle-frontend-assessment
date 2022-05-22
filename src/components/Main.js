import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Main.css';
import {Pagination} from '@material-ui/lab';
import { Container } from '@material-ui/core';








export default function Main () {

  const [data, set_data] = useState([]);
  const [page, set_page] = useState(1);
  const [count, set_count] = useState(1)

  const fetchData = async () => {
    const {data} = await axios.get(`https://api.github.com/search/repositories?q=created:>2021-08-13&sort=stars&order=desc&page=${page}`);

    set_count(data.total_count)
    set_data(data.items);
  }

  useEffect(async() => {
    fetchData()
  }, [page])

  console.log(data)








  return (
    <Container width="70%">
      <h1> Trending Repos </h1>

      {
        data.map(each => {
          return (
            <div className='container'>
              <aside>
                <img src={each.owner.avatar_url} alt={each.name} />
              </aside>

              <aside>
                <h2> {each.name} </h2>
                <p> {each.description} </p>
                <span> Stars: {each.stargazers_count} </span>
                <span> Issues: {each.open_issues_count} </span>
                <p> Submitted at {(each.created_at).slice(0, 10)} </p>
              </aside>
            </div>
          )
        })
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