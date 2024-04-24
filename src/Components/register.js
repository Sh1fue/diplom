import React, { useState } from 'react';
import PopupMenu from './PopupMenu';
import "./register.css"
const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для обработки отправки формы
    // Например, валидацию данных и отправку на сервер

    // После обработки формы можно открыть всплывающее окно
    setIsPopupOpen(true);
  };

  return (
    <div className='bodyy'>
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Введите имя</label>
          <input
            type="text"
            id="name"
            placeholder="Ваше имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Ваш Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Номер телефона</label>
          <input
            type="tel"
            id="phone"
            placeholder="Ваш номер телефона"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            type="password"
            id="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Пароль еще раз</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Пароль еще раз"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">
          Регистрация
        </button>
      </form>

      {isPopupOpen && (
        <PopupMenu>
          <h2>Спасибо за регистрацию!</h2>
          <p>Мы получили ваши данные.</p>
          <button onClick={() => setIsPopupOpen(false)}>Закрыть</button>
        </PopupMenu>
      )}
    </div>
    </div>
  );
};

export default RegistrationForm;
