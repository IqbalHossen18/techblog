import React, { useState } from 'react';
import Styles from '../styles/navbar.module.css';
import { FaSearch, FaBars } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchoption, setsearchoption] = useState(false);
  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className={`${Styles.navbar} ${menuVisible ? Styles.menuActive : ''}`}>
      <div className={Styles.shadow}></div>
      <div className={Styles.logo}>
        <Link href={'/'}>
          <Image width={400} height={400} src='/mainlogo.png' alt='mainlogo' /></Link>
      </div>
      <ul className={`${Styles.navbarNav} ${!searchVisible ? Styles.hideOnMobile : ''}`}>
        <Link id={Styles.button} className={Styles.navItem} onClick={toggleMenu} href={'/'}><li><span className={Styles.navLink}>Home</span></li></Link>
        <Link id={Styles.button} className={Styles.navItem} onClick={toggleMenu} href={'/'}><li><span className={Styles.navLink}>Top Lists</span></li></Link>
        <Link id={Styles.button} className={Styles.navItem} onClick={toggleMenu} href={'/aboutus'}><li><span className={Styles.navLink}>How To</span></li></Link>
        <Link id={Styles.button} className={Styles.navItem} onClick={toggleMenu} href={'/'}><li><span className={Styles.navLink}>Tech Q&A</span></li></Link>
        <Link id={Styles.button} className={Styles.navItem} onClick={toggleMenu} href={'/'}><li><span className={Styles.navLink}>Reviews</span></li></Link>
      </ul>
      <div className={Styles.searchBar}>
        <FaSearch className={Styles.searchIcon} onClick={toggleSearch} />
        {searchVisible === true && <IoMdClose className={Styles.searchclose} onClick={() => { toggleSearch(), setsearchoption(false) }} />}
      </div>
      <div className={`${Styles.searchBox}  ${searchVisible ? Styles.showSearch : ''}`}>
        <input onClick={() => { setsearchoption(true) }} type="text" placeholder="Search" className={`${Styles.searchInput} ${!searchVisible ? Styles.searchInput : Styles.showInput}`} />
        <FaSearch className={Styles.searchbtn} />
         <div  className={Styles.Soption} style={searchoption ? { display: 'block' } : { display: 'none' }} >
           <h3 style={{padding:'5px', fontWeight:'blod', color:'black' , borderBottom:'2px solid orange', marginBottom:'5px'}}>people also search</h3>
         <ul>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><Link href="/" >How To install windows 11</Link></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><Link href="/" >Tech time is here</Link></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><Link href="/" >Reviews by the professors</Link></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><Link href="/" >Newsletters are here</Link></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><Link href="/" >Newsletters are the mina d jkf  here</Link></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><Link href="/" >Top 10 Microsoft PowerToys Features You Need To Enable Today</Link></li>
          
        </ul>
         </div>

      </div>
      <FaBars className={Styles.menuIcon} onClick={toggleMenu} />

    </nav>
  );
};

export default Navbar;
