import {Link} from "react-router-dom";

function MobileNavItem({name,to, svg}){
    return <li  ><Link to={to} className="flex flex-col items-center">
        {svg}
        <span className="block bg-opacity-100 text-white text-sm">{name}</span>
        </Link></li>
}

export default MobileNavItem;