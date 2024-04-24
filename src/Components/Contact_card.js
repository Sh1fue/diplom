import './contact_card.css';
function Contact_card() {
    return (
    <div>
        <div class="header">
  <h1>Контакты</h1>
</div>

<div class="map"></div>

<div class="contact-info">
  <div class="contact-block">
    <p>Телефон: 8 (800) 555 55 55</p>
    <p>+7 (905) 297 00 00</p>
  </div>
  <div class="contact-block">
    <p>Адрес: г. Вологда ул. Батюшкова, 11</p>
  </div>
  <div class="contact-block">
    <p>E-mail: hello@company.ru</p>
  </div>
</div>

<div class="contact-form">
  <p>Есть вопросы?</p>
  <textarea rows="4" cols="50"></textarea>
  <button class="send-button">Отправить</button>
</div>
    </div>
    );
}
export default Contact_card;