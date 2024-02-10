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
        <Link onClick={toggleMenu} className={Styles.navItem} href={'/'} ><li><a className={Styles.navLink}>Home</a></li></Link>
        <Link onClick={toggleMenu} className={Styles.navItem} href={'/'} ><li><a className={Styles.navLink}>Top Lists</a></li></Link>
        <Link onClick={toggleMenu} className={Styles.navItem} href={'/aboutus'} ><li><a className={Styles.navLink}>How To</a></li></Link>
        <Link onClick={toggleMenu} className={Styles.navItem} href={'/'} ><li><a className={Styles.navLink}>Tech Q&A</a></li></Link>
        <Link onClick={toggleMenu} className={Styles.navItem} href={'/'} ><li><a className={Styles.navLink}>Reviews</a></li></Link>
      </ul>
      <div className={Styles.searchBar}>
        <FaSearch className={Styles.searchIcon} onClick={toggleSearch} />
        {searchVisible === true && <IoMdClose className={Styles.searchclose} onClick={() => { toggleSearch(), setsearchoption(false) }} />}
      </div>
      <div className={`${Styles.searchBox}  ${searchVisible ? Styles.showSearch : ''}`}>
        <input onClick={() => { setsearchoption(true) }} type="text" placeholder="Search" className={`${Styles.searchInput} ${!searchVisible ? Styles.searchInput : Styles.showInput}`} />
        <FaSearch className={Styles.searchbtn} />
            
        <ul className='ml-5' style={searchoption ? { display: 'block' } : { display: 'none' }}>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><a href="#" >How To install windows 11</a></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><a href="#" >Tech time is here</a></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><a href="#" >Reviews by the professors</a></li>
          <li onClick={() => { toggleSearch(), setsearchoption(false) }}><a href="#" >Newsletters are here</a></li>
        </ul>
      </div>
      <FaBars className={Styles.menuIcon} onClick={toggleMenu} />

    </nav>
  );
};

export default Navbar;
