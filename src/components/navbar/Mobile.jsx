import MobileNavItem from "./MobileNavItem";
import Items from "./Items";

function MobileNav(){
    return (
        <div id="mobile" className="px-3 fixed bottom-0 w-full bg-purple-900 text-white md:hidden">
            <ul className=" h-16 flex justify-evenly items-center">
                {Items.map(nav=>{
                        return <MobileNavItem key={nav.name} name={nav.name} to={nav.to} svg={nav.svg}/>
                    })}
            </ul>

    </div>
    )
}

export default MobileNav;