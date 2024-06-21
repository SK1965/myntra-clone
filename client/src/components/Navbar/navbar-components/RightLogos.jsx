import { CgProfile } from "react-icons/cg";
import {GoHeart} from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
export default function RightLogos(){
    return  <div className="  w-full flex items-center space-x-8 font-bold text-xl">    
    <div className=""><CgProfile /></div> 
    <div><GoHeart /></div>
    <div><IoBagHandleOutline /></div>
</div>
}