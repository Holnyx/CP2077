import monitor from '../../img/monitor.png';
import hp from '../../img/hp_logo.svg';
import cross from '../../img/cross.svg';
import color from '../../img/color_icon.png';
import motion from '../../img/motion_icon.svg';
import stars from '../../img/starts_icon.png';
import logo_CP from '../../img/Cyberpunk-2077_logo.svg';
import './fourth_page.sass'

function Fourth_page() {
    return (
        <div className="deep">
            <div className="deep-img">
                <img className='monitor-img' src={monitor} alt="Monitor" />
                <div className="deep-logo">
                    <img className='hp-logo' src={hp} alt="" />
                    <img className='cross' src={cross} alt="" />
                    <img className='logo-2077' src={logo_CP} alt='Cyberpunk2077' />
                </div>
            </div>
            <div className="deep-bloc">
                <h1>Полное погружение вместе с HP</h1>
                <div className="deep-text">
                    <p className="deep-info">
                        Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!
                        <ul>
                            <li className='bright-color'><img className='icon-img' src={color} alt="color" />Яркие насыщенные цвета</li>
                            <li className='definition-img'><img className='icon-img' src={stars} alt="stars" />Кристальная четкость изображения</li>
                            <li className='fast-move'><img className='icon-img' src={motion} alt="motion" />Быстрые движения и плавный геймплей</li>
                        </ul>
                    </p>
                    <button className="details">
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Fourth_page;