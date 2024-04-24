import images from '../image/images.jpg';
import bosh from '../image/bosh.webp';
import './Glav.css';
function Glav() {
    return (
        <div>
            <div class="container">
                <div class="category-section">
                    <div class="category-item">
                        <img src={images} alt="Двигатель" />
                        <p>Все каталоги</p>
                    </div>
                    <div class="category-item">
                        <img src={images} alt="Шина" />
                        <p>Шины и диски</p>
                    </div>
                    <div class="category-item">
                        <img src={images} alt="Технические запчасти" />
                        <p>Тех запчасти</p>
                    </div>
                </div>
                <div class="category-section">
                    <div class="category-item">
                        <img src={images} alt="Масла и жидкости" />
                        <p>Масла и жидкости</p>
                    </div>
                    <div class="category-item">
                        <img src={images} alt="Инструменты" />
                        <p>Инструменты</p>
                    </div>
                    <div class="category-item">
                        <img src={images} alt="Автохимия" />
                        <p>Автохимия</p>
                    </div>
                </div>
                <div class="info-section">
                    <div class="payment-info">
                        <div class="dot"></div>
                        <p>Оплата при получении<br/>Для заказов до 55 тысяч рублей не требуется предоплата, можно оплатить при получении наличными или банковской картой</p>
                    </div>
                    <div class="delivery-info">
                        <div class="dot"></div>
                        <p>Доставка по всей России<br/>Наши склады открыты во всех регионах страны, по вашему выбору доставим заказ курьером, через транспортную компанию или Почтой России</p>
                    </div>
                </div>
            </div>
            <div class="brands-section">
         <h2>Популярные бренды</h2>
        <div class="brands-container">
             <div class="brand-item"><img src={bosh} alt="Stellox"/></div>
            <div class="brand-item"><img src={bosh} alt="Areol"/></div>
            <div class="brand-item"><img src={bosh} alt="Wezer"/></div>
        </div>
    </div>
</div>
    );
}
export default Glav;
