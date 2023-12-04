import facebook from '../../img/facebook_logo.svg';
import instagram from '../../img/instagram_logo.svg';
import logo_CP from '../../img/Cyberpunk-2077_logo.svg';
import twitch from '../../img/twitch_logo.svg';
import twitter from '../../img/twitter_logo.svg';
import vk from '../../img/vk_logo.svg';
import youtube from '../../img/youtube_logo.svg';
import './header.sass'


function Header() {
    return(
        <header className="header">
            <div className="header__block1">
                <img className='logo-2077' src={logo_CP} />
            </div>
            <div className="header__icons">
                <img src={youtube} alt="Youtube" />
                <img src={vk} alt="VK" />
                <img className='facebook-logo' src={facebook} alt="Facebook" />
                <img src={twitter} alt="Twitter" />
                <img src={twitch} alt="Twitch" />
                <img className='inst-logo' src={instagram} alt="Instagram" />
            </div>
        </header>
    )
}
export default Header 