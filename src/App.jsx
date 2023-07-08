import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.delete('https://reqres.in/api/users/2', {
      "name" : "abie",
      "job" : "front end"
    })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <h2>Axios Library in React JS</h2>
      {/* {
        data.map((d, i) => {
          return <p key={i}>{d.email}</p>
        })
      } */}
    </>
  )
}

// https://reqres.in/

export default App
