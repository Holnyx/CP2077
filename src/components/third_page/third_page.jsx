import './third_page.sass'
import consoles1 from '../../img/consoles-xbox.png';
import consoles2 from '../../img/consoles-ps5.png';
import promotion from '../../img/promotion_star.svg';
import { useState } from 'react';

function Third_page() {
  const [isChek, setChek] = useState(false)
  return (
    <div className="promotion">
      <div className="promotion1">
        <div className="text-play">
          <div className="text-plus-logo">
            <div className="circle">
              <img className="circle__circle-img" src={promotion} alt="circle" />
              <div className="circle__circle-img--text-rotate">акция</div>
            </div>
            <h1 className="play-logo">
              Играй и выигрывай!
            </h1>
          </div>
          <div className="play-text">
            Играй в <span>Cyberpunk 2077</span> и получи возможность выиграть консоль <span>
              Xbox Series X</span> или <span>Sony PlayStation 5!</span>
            Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)
          </div>
        </div>
        <div className="promotion-center">
          <div className="registration">
            <input className='form' type="text" id='name' placeholder="Как тебя зовут?" />
            <input className='form' type="email" required placeholder="Твой е-mail" />
            <div className="screenshot">
              <p className='pin-screenshot'>Прикрепить скриншот</p>
              <p>.png / .jpg / .pdf</p>
            </div>
            <button type='submit' className='later'>Отправить</button>
            <div><input checked={isChek} type="checkBox" className="checkbox" id="confirm" />
              <lable onClick={() => setChek(!isChek)} htmlFor="confirm" className='test'>
                Согласен на обработку персональных данных
              </lable>
            </div>
          </div>
          <div className="consoles-img">
            <img className='consoles-xbox' src={consoles1} alt="" />
            <img className='consoles-ps5' src={consoles2} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Third_page 