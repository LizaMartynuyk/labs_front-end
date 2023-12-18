
import React from 'react';
import GoodsCard from './GoodsCard';
import './App.css'; 

const goodsData = [
  {
    id: 1,
    name: 'Товар 1',
    price: 100,
    image: 'https://images.pexels.com/photos/85773/pexels-photo-85773.jpeg?auto=compress&cs=tinysrgb&w=400', 
  },
  {
    id: 2,
    name: 'Товар 2',
    price: 150,
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 3,
    name: 'Товар 3',
    price: 200,
    image: 'https://images.pexels.com/photos/69776/tulips-bed-colorful-color-69776.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 4,
    name: 'Товар 4',
    price: 120,
    image: 'https://images.pexels.com/photos/53141/rose-red-blossom-bloom-53141.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 5,
    name: 'Товар 5',
    price: 180,
    image: 'https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    id: 6,
    name: 'Товар 6',
    price: 220,
    image: 'https://images.pexels.com/photos/67857/daisy-flower-spring-marguerite-67857.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
];

function App() {
  return (
    <div className="App">
      <h1>Товари</h1>
      <div className="goods-container">
        {goodsData.map((goods) => (
          <GoodsCard
            key={goods.id}
            name={goods.name}
            price={goods.price}
            image={goods.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
