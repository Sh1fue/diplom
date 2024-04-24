import './catalog_card.css';
import images from '../image/images.jpg';
function Catalog_card() {
  return (
    <div>
        <aside class="sidebar">

  <div class="filter-section">
    <h2>Фильтр</h2>
    <div class="price-slider">
      <input type="number" value="30" min="0" max="2423" readonly/>
      <input type="range" min="0" max="2423" value="30"/>
      <input type="range" min="0" max="2423" value="2423"/>
      <input type="number" value="2423" min="0" max="2423" readonly/>
    </div>
  </div>
  

  <div class="filter-section">
    <h3>Цвет</h3>
    <ul>
      <li><label><input type="checkbox"/>Blue (1)</label></li>
      <li><label><input type="checkbox"/>Green (1)</label></li>
      <li><label><input type="checkbox"/>Purple (1)</label></li>
      <li><label><input type="checkbox"/>Yellow (1)</label></li>
    </ul>
  </div>
  

  <div class="filter-section">
    <h3>Категории</h3>
    <ul>
      <li><label><input type="checkbox"/>Uncategorised (1)</label></li>
      <li><label><input type="checkbox"/>Shop (1)</label></li>
    </ul>
  </div>
</aside>

<div class="container-catalog">
<div class="product">
  <img src={images} alt="ProductImage"/>
  <h3>Variable Product</h3>
  <span class="price">$28.50</span>
  <a href="#" class="buy-button">Купить</a>
</div>
<div class="product">
  <img src={images} alt="ProductImage"/>
  <h3>Variable Product</h3>
  <span class="price">$28.50</span>
  <a href="#" class="buy-button">Купить</a>
</div>
<div class="product">
  <img src={images} alt="ProductImage"/>
  <h3>Variable Product</h3>
  <span class="price">$28.50</span>
  <a href="#" class="buy-button">Купить</a>
</div>
<div class="product">
  <img src={images} alt="ProductImage"/>
  <h3>Variable Product</h3>
  <span class="price">$28.50</span>
  <a href="#" class="buy-button">Купить</a>
</div>
<div class="product">
  <img src={images} alt="ProductImage"/>
  <h3>Variable Product</h3>
  <span class="price">$28.50</span>
  <a href="#" class="buy-button">Купить</a>
</div>
</div>
</div>
  );
}

export default Catalog_card;