import './header.css';
function Header() {
    return (
        <div class="header-container">
          <div class="logo">Рекавто</div>
          <ul class="nav-links">
              <li><a href="#">Каталог</a></li>
              <li><input type="search" placeholder="Артикул или номер детали" /></li>
            </ul>
          <nav>
          </nav>
          <div class="header-value">
            <li>О нас</li>
            <li>Контакты</li>
            <li>Корзина</li>
            <li>Авторизация</li>
          </div>
        </div>
    );
}
 
export default Header;
