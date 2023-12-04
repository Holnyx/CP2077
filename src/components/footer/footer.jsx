import logo_CP from '../../img/Cyberpunk-2077_logo.svg';
import red from '../../img/CD_Projekt_logo.svg';
import './footer.sass'

function Footer(){
    return (
        <footer className='footer'>
            <div className="footer-up">
                <div className="img-footer">
                    <img className='logo-2077' src={logo_CP} alt='Cyberpunk 2077' />
                    <img className='red' src={red} alt='CD Progekt Red' />
                </div>
                <div className="text-footer">
                    <div className="license">Лицензия</div>
                    <div className="policy">Политика конфиденциальности</div>
                </div>
            </div>
            <div className="r">
                CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®
            </div>
        </footer>
    )
}
export default Footer