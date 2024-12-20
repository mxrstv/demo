import { useState } from "react";

const CreateUser = () => {
  const [user, setUser] = useState({});
  function handleSubmit(e){
    e.preventDefault()
    const data = {
        name: e.target.name.value,
        type: e.target.types.value,
        rating: e.target.rating.value,
        adress: e.target.adress.value,
        CEO: e.target.CEO.value,
        phone: e.target.phone.value,
        email: e.target.email.value
    }
    console.log(data)
}

  return (<>
    <form onSubmit={(e) => {e.preventDefault(); handleSubmit(e)}}>
      <div className="formGroup">
        <label htmlFor="name">Наименование:</label>
        <input id="name" type="text" name="name" required />
      </div>
      <div className="formGroup">
        <label htmlFor="type" required>Тип партнера:</label>
        <select name="types" id="type">
          <option value="ЗАО">ЗАО</option>
          <option value="ООО">ООО</option>
          <option value="ОАО">ОАО</option>
          <option value="ПАО">ПАО</option>
        </select>
      </div>
      <div className="formGroup" >
        <label htmlFor="rating">Рейтинг (в %):</label>
        <input id="rating" type="number" name="rating" step="1" required />
      </div>
      <div className="formGroup">
        <label htmlFor="adress">Адрес:</label>
        <input id="adress" type="text" name="adress" required />
      </div>
      <div className="formGroup">
        <label htmlFor="CEO">ФИО директора:</label>
        <input id="CEO" type="text" name="CEO" required />
      </div>
      <div className="formGroup">
        <label htmlFor="phone">Телефон:</label>
        <input id="phone" type="tel" name="phone" required />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email компании:</label>
        <input id="email" type="email" name="email" required />
      </div>
      <button type="submit">Отправить</button>
    </form>
  </>)
}

export default CreateUser;