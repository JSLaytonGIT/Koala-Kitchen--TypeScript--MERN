import './Layout.scss'
import Header from '../header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <div className='page'>
                <Outlet/>
            </div>
        </div>
    )
}

export default Layout;