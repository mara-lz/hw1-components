import './App.css';
import ShopItemFunc from "./components/ShopItemFunc";

function App() {
    const item = {
        brand: 'Медведь России',
        title: 'Плащ синий',
        description: 'Минималистичный плащ из хлопка',
        descriptionFull: 'Мужской минималистичный плащ из смесового хлопка. Имеет воротник-стойку, потайную застежку спереди и одну шлицу сзади. Тонкий крой, чистая, прямая форма. Длина выше колена.',
        price: 5000,
        currency: '₽'
    };

    return (
      <div className="container">
        <div className="background-element">
        </div>
        <div className="highlight-window">
          <div className='highlight-overlay'></div>
        </div>
        <div className="window">
          <ShopItemFunc item={item} />
        </div>
      </div>
  );
}

export default App;
