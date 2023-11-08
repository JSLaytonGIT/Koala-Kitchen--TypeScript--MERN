import KoalaLogo from './assets/koalaLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faSearch } from '@fortawesome/free-solid-svg-icons';
import './Header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <img src={KoalaLogo} alt='logo' style={{ width: '4.545vw', height: 'auto' }} />
                <span className="logo-text">Koala Kitchen</span>
            </div>
            <div className="header-links">
                <a href="/">Home</a>
                <a href="/menu">Menu</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </div>
            <div className="header-icons">
                <FontAwesomeIcon icon={faSearch} color='#4d4d4e' className='search-button' style={{fontSize: '1.3vw'}} />
                <FontAwesomeIcon icon={faShoppingBag} color='#4d4d4e' style={{fontSize: '1.3vw'}} />
            </div>
        </div>
    );
}

export default Header;