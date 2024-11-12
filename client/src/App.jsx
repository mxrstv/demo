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
  console.log(users)

  return (
    <>
      <table>
        <tbody>
          {users.map((user) => <tr>
            <td>{user.organization_type_id}</td>
            <td>{user.name}</td>
            <td>{user.ceo}</td>
            <td>{user.phone}</td>
            <td>{user.rating}</td>
          </tr>)}
        </tbody>
      </table>
    </>
  )
}

export default App
