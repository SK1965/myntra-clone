/* eslint-disable react/react-in-jsx-scope */
import SearchBox from "./navbar-components/SearchBox"
import LogoImage from "./navbar-components/LogoImage"
import MenuItem from "./navbar-components/MenuItem"
import RightLogos from "./navbar-components/RightLogos"
export default function Navbar(){
    return <nav className=" w-full fixed bg-white border-y-2 flex space-x-12 z-10 h-16">
    <div className="flex-shrink-0">
    <LogoImage/>
    </div>
    <div className="flex items-center space-x-12">
        
       <MenuItem>MEN</MenuItem>
       <MenuItem>WOMAN</MenuItem>
       <MenuItem>KIDS</MenuItem>
       <MenuItem>HOME&LIVING</MenuItem>
       <MenuItem>BEAUTY</MenuItem>
       <MenuItem>STUDIO</MenuItem>
       <SearchBox /> 
       <RightLogos />
    </div>
    
    
</nav>
}