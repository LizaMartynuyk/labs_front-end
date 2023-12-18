import React from 'react';
import Header from './Header';
import Image from './Image';
import Content from './Content';
import './styles.css'; 
import { addImage, resizeImage, removeImage } from './script'; 

function App() {
  return (
    <div>
      <Header />
      <Content />
      <Image src="https://www.moyaeuropa.com.ua/wp-content/uploads/2014/05/Barcelona-528x352.jpg" alt="Барселона" />

      <div>
        <div id="imageContainer"></div>

        <div id="imageActions">
          <button onClick={addImage}>Додати</button>
          <button onClick={() => resizeImage('enlarge')}>Збільшити</button>
          <button onClick={() => resizeImage('reduce')}>Зменшити</button>
          <button onClick={removeImage}>Видалити</button>
        </div>
      </div>

      <p>
        <a href="https://www.moyaeuropa.com.ua/spain/barselona/">Місто Барселона</a>
      </p>
    </div>
  );
}

export default App;
