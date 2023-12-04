import './second_page.sass'
import pic1 from '../../img/picture1.png';
import pic2 from '../../img/picture2.png';
import pic3 from '../../img/picture3.png';

function Second_page() {
    return (
        
        <div className="info">
            <div className="info1">
                <div className="text-info">
                    <h1>Найт-Сити изменит тебя навсегда!</h1>
                    <div className="text">
                        <span>Cyberpunk 2077</span>— приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.
                    </div>
                </div>
                <div className="pictures">
                    <div className="pictures1-3">
                        <img className="pic2" src={pic2} alt="hic2" />
                        <img className="pic3" src={pic3} alt="pic3" />
                    </div>
                    <div className="pic1div">
                    <img className="pic1" src={pic1} alt="pic1" />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Second_page 