import './Header.scss'
import menu from '../../assets/ham-menu.png'
import user from '../../assets/userr.png'

const Header = () => {

    return (
        <section className='header'>
            <img alt='menu' src={menu} className='header__icon'/>
            <h1 className='header__title'>Merchant's Help Desk</h1>
            <img alt='user' src={user} className='header__icon'/>
        </section>
    )
}

export default Header