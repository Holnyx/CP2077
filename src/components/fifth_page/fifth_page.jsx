import boxes from '../../img/boxes_background.png';
import disc from '../../img/disk_icon.svg';
import code from '../../img/code_icon.svg';
import collections from '../../img/collections_icon.svg';
import pc from '../../img/PC_logo.svg';
import xbox from '../../img/xbox-one_logo.svg';
import stadia from '../../img/stadia_logo.svg';
import ps4 from '../../img/Playstation_logo.svg';
import './fifth_page.sass'

function Fifth_page(){
    return(
<div className="by-game">
        <div className="boxes-game">
        </div>
        <div className="by-game-info">
          <h1>Купить игру <br />Cyberpunk 2077</h1>
          <p className='by-game-text'><span>В комплект входит:</span>
            <ul>
              <li ><img className='icon-img' src={disc} alt="disc" />Футляр с игровыми дисками</li>
              <li ><img className='icon-img' src={code} alt="code" />Футляр с кодом для загрузки игры и дисками (pc)</li>
              <li ><img className='icon-img' src={collections} alt="collections" />Справочник с информацией об игровом мире</li>
            </ul>
          </p>
          <p className='by-game-text'><span>Выберите платформу:</span></p>
          <div className="by-game-platforms">
            <img src={pc} alt="" />
            <img src={xbox} alt="" />
            <img src={stadia} alt="" />
            <img src={ps4} alt="" />
          </div>
        </div>
      </div>
    )

}
export default Fifth_page