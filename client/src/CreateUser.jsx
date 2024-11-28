const CreateUser = () => {
  return (<>
    <form action="">
      <div className="formGroup">
        <label htmlFor="name">Наименование:</label>
        <input id="name" type="text" required />
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
        <input id="rating" type="number" required />
      </div>
      <div className="formGroup">
        <label htmlFor="adress">Адрес:</label>
        <input id="adress" type="text" required />
      </div>
      <div className="formGroup">
        <label htmlFor="CEO">ФИО директора:</label>
        <input id="CEO" type="text" required />
      </div>
      <div className="formGroup">
        <label htmlFor="phone">Телефон:</label>
        <input id="phone" type="tel" required />
      </div>
      <div className="formGroup">
        <label htmlFor="email">Email компании:</label>
        <input id="email" type="email" required />
      </div>
      <button type="submit">Отправить</button>
    </form>
  </>)
}

export default CreateUser;