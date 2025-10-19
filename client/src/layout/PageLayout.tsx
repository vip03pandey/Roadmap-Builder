import { Outlet } from 'react-router-dom'
import { NavbarDemo } from '../components/Navbar'
export default function PageLayout() {
    return (
        <> 
        <NavbarDemo />
        <div className='w-full overflow-x-hidden'>
            <Outlet />
        </div>
         </>
    )
}
