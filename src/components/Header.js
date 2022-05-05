import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import { IconContext } from "react-icons";

const Header = () => {
    return ( 
        <header>
            <div className="header__container">
                <div className="header__brand">
                    <Link to="/">WatchList</Link>
                </div>  

                <ul className="header__nav">
                    <li>
                        <Link to="/">WatchList</Link>
                    </li>

                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>

                    <li>
                        <Link to="/add" className="btn">
                            Add
                            <IconContext.Provider value={{ color: "#E6E6E6", style: { verticalAlign: 'textTop' }}}>
                                <MdAdd />
                            </IconContext.Provider>
                        </Link>
                        
                    </li>
                </ul>  
            </div>
        </header>
     );
}
 
export default Header;