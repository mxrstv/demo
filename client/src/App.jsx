import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from "react-router";

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
      <Header />
      <ul className='partnersCardWrapper'>
        {users.map((user) => <li title='редактировать' key={user.id}>
          <div className='partnerCard'>
            <div className="partnerData">
              <p className='partnerHeading'>{user.organization_type} | {user.name}</p>
              <p>{user.ceo}</p>
              <p>{user.phone}</p>
              <p>Рейтинг: {user.rating}</p>
            </div>
            <div className="partnerDiscount">
              <p className='partnerHeading'>
                {`${calcDiscount(user.total_quantity)}%`}
              </p>
            </div>
          </div>
        </li>
        )}
      </ul>
      <Link to="/create">
        <button>Добавить пользователя</button>
      </Link>

    </>
  )
}

export default App;
