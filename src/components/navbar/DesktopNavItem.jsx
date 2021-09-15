import {Link} from "react-router-dom"
function DesktopNavItem({name,to, svg}){
    return (
        <li className="pb-12 flex text-md  uppercase text-purple-900 hover:font-bold">
            {svg}
            <Link to={to} className="ml-1">{name}</Link>
            </li>
    )
}

export default DesktopNavItem;