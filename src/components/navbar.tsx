'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Button from './button';
import { useState } from 'react';
import { NavbarStatusType } from '@/types/navbarStatus';



const Navbar = () => {
  useEffect(() => {
		const stickyNavbar = () => {
			const header = document.querySelector("header");
			if (header) {
				header.classList.toggle("sticky", window.scrollY > 0);
			}
		}

		// Add the scroll event listener to the window
		window.addEventListener('scroll', stickyNavbar);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', stickyNavbar);
		};
	}, []);
  
  const [navbarStatus, setNavbarStatus] = useState<NavbarStatusType>({
    "home":"active",
    "about":null,
    "menu":null,
    "team":null,
    "blog":null,
    "contact":null,
  });

  const toggleMenu = () =>{
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
  
    if(menu && navbar){
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('open');
    }
  }
  
  const toggleNavbarItems = (e:any) => {
    setNavbarStatus(updateNavItemStatus(navbarStatus,e.target.hash))
  
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    
    window.onscroll = () => {
      menu?.classList.remove('bx-x');
      navbar?.classList.remove('open');
    }
  }

  const updateNavItemStatus = (data:NavbarStatusType,itemToActivate:string) => {
    let updatedObject = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, `${value? null:null}`])
    );

    const clickedItem = itemToActivate.split("#");

    updatedObject[clickedItem[1]] = "active"
    return updatedObject as NavbarStatusType;
  }

  return (
    <header>
        <a href="#" className="logo"><Image src="/logo.svg" alt="logo" width={150} height={100} /></a>
        <div className="bx bx-menu" id="menu-icon" onClick={toggleMenu}></div>

        <ul className="navbar" onClick={toggleNavbarItems}>
            <li><a href="#home" className={`${navbarStatus.home}`}>Home</a></li>
            <li><a href="#about" className={`${navbarStatus.about}`}>About Us</a></li>
            <li><a href="#menu" className={`${navbarStatus.menu}`}>Menu</a></li>
            <li><a href="#team" className={`${navbarStatus.team}`}>Team</a></li>
            <li><a href="#blog" className={`${navbarStatus.blog}`}>Blog</a></li>
            <li><a href="#contact" className={`${navbarStatus.contact}`}>Contact</a></li>
            <li><a href="#" className="cart"><i className='bx bxs-cart-download'></i></a></li>
        </ul>
        <Button className='top-btn' text='Order Now' />
    </header>
  )
}

export default Navbar

