import { FC, useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import "./Header.scss";
import { GoMoon, GoSun } from "react-icons/go";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import Search from "../Search/Search";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../redux/slices/themeSlice";
import { RootState } from "../../redux/store";
import { useAppSelector } from "../../redux/hooks";
const Header: FC = () => {
	const [sticky, setSticky] = useState<boolean>(false);
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const dispatch = useDispatch()
    const theme = useSelector((state:RootState)=>state.theme.theme)
    const location = useLocation()

	useEffect(() => {
		const handleScroll: EventListener = () => {
			setSticky(window.scrollY > 30);
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

    const toggleTheme = () => {
        dispatch(setTheme(theme === 'light'? 'dark':'light'))   
    }
    useEffect(() => {
        if(theme === 'dark'){
            document.body.classList.add('dark')
        }
       else{
        document.body.classList.remove('dark')
       }
    }, [theme]);
    const totalQuantity = useAppSelector(state => state.cart.totalQuantity)
    
	return (
		<>
		    <header className={sticky ? "header header_sticky" : "header"}>
		    	<div className="header__container">
		    		<div className="header__row">
		    			<NavLink to="/" className="header__logo">
		                            {
		                                theme === 'light'? <img src="/img/logo-white-t.png" alt="" />:<img src="/img/logo-dark-t.png" alt="" />
		                            }
		    
		    			</NavLink>
		    			<div className="header__content-part">
		    				<div className="header__menu menu">
		    					<button
		    						onClick={() => setMenuOpen((prev) => !prev)}
		    						type="button"
		    						className={
		    							menuOpen
		    								? "menu__icon icon-menu _active"
		    								: "menu__icon icon-menu"
		    						}
		    					>
		    						<span></span>
		    						<span></span>
		    						<span></span>
		    					</button>
		    					<nav className={menuOpen ? "menu__body _active" : "menu__body"}>
                                {location.pathname === '/' &&  <Search />}
		    						
		    						<ul className="menu__list">
		    							<li className="menu__item">
		    								<NavLink
		    									to="/shop"
		    									className={({ isActive }) =>
		    										classNames("menu__link", {
		    											menu__link_active: isActive,
		    										})
		    									}
		    								>
		    									Shop
		    								</NavLink>
		    							</li>
		    							<li className="menu__item">
		    								<NavLink
		    									to="/blog"
		    									className={({ isActive }) =>
		    										classNames("menu__link", {
		    											menu__link_active: isActive,
		    										})
		    									}
		    								>
		    									Blog
		    								</NavLink>
		    							</li>
		    							<li className="menu__item">
		    								<NavLink
		    									to="/our-story"
		    									className={({ isActive }) =>
		    										classNames("menu__link", {
		    											menu__link_active: isActive,
		    										})
		    									}
		    								>
		    									Our Story
		    								</NavLink>
		    							</li>
		    						</ul>
		    					</nav>
		    				</div>
		    				<span className="header__span"></span>
		    				<div className="header__actions actions-header">
                            {location.pathname === '/' &&  <Search />}
		    					<Link to='/cart' className="actions-header__cart actions-header__icon">
		    						<PiShoppingCartLight className="icon" size={21} /> 
                                    {totalQuantity>0 && <span>{totalQuantity}</span> }
		    					</Link>
		    					<div className="actions-header__auth actions-header__icon">
		    						<CiUser className="icon" size={20} />
		    					</div>
		    					<div onClick={()=>toggleTheme()}  className="actions-header__theme actions-header__icon">
		                                    {
		                                        theme === 'light'?<GoMoon  className="icon" size={20} />:<GoSun className="icon" size={20}/>
		                                    }
		    
		    					</div>
		    				</div>
		    			</div>
		    		</div>
                    {location.pathname !== '/' &&  <hr />}
           
		    	</div>
		    </header>
            
		</>
	);
};

export default Header;
