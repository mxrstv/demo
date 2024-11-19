import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get('/partners')
      .then(function (response) {
        setUsers(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  const calcDiscount = (totalQuantity) => {
    console.log(totalQuantity);
    const num = Number(totalQuantity);
    if (num < 10000) {
      return 0
    } 
    if (num < 50000) {
      return 5
    }
    if (num < 300000) {
      return 10
    }
    return 15;
  }
  

  return (
    <>
      <table>
        <thead>
          <td>id</td>
          <td>type</td>
          <td>name</td>
          <td>ceo</td>
          <td>phone</td>
          <td>rating</td>
          <td>discount</td>
        </thead>
        <tbody>
          {users.map((user) => <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.type}</td>
            <td>{user.name}</td>
            <td>{user.ceo}</td>
            <td>{user.phone}</td>
            <td>{user.rating}</td>
            <td>{`${calcDiscount(user.total_quantity)}%`}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default App
