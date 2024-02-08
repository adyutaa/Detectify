import Logo from "./_components/Logo";
import { Menu } from "./_components/Menu";


const navbarClasses = `flex items-center justify-between space-x-10 bg-white  h-20
    sticky top-0 z-50 border-b border-gray-200`


const Navbar = () => {
    return ( 
        <div className={navbarClasses}>
            <div className="flex items-center justify-start mt-3">
            <Logo />
            <Menu />
        </div>
        </div>
        
     );
}
 
export default Navbar;