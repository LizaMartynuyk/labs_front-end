import React, { Component } from 'react';

class Content extends Component {
  render() {
    return (
      <div>
        <p>Улюблені фільми та книги:</p>
        <ol start="1">
          <li>"Людина в пошуках справжнього сенсу. Психолог у концтаборі.", Віктор Франкл</li>
          <li>"Чорна пантера", 2018</li>
          <li>"Фактор Черчілля. Як одна людина змінила історію", Борис Джонсон</li>
          <li>"Джокер", 2019</li>
        </ol>
        <p>Барсело́на — місто в Іспанії, столиця автономної області Каталонії і провінції Барселона.</p>
        <ul type="circle">
          <li>У місті площею 100,4 км² проживає 1 611 822 жителі.</li>
          <li>Місто є другим за чисельністю населення в Іспанії після столиці Мадрида.</li>
          <li>Барселона лежить на частині узбережжя Середземного моря, що називається Коста-дель-Маресме, на північ від Коста-Брава і на півдні від Коста-дель-Гарраф.</li>
          <li>У Барселоні відбувалися Всесвітні виставки у 1888 та 1929 роках, літні Олімпійські ігри 1992 року, Всесвітній форум культур у 2004 році та інші заходи світового рівня.</li>
        </ul>
      </div>
    );
  }
}

export default Content;
