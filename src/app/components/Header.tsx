import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {  FaShoppingCart } from 'react-icons/fa';
const Header=()=>{
    return(
       <header className='header'>
        <div className='logop'>
            <Image height={"0"} width={"0"} alt='cff' src='navlogo.png' className='kk'/>
        </div>
        <Link  href="/"className='logo'>BMW</Link>
        <nav>
    <Link href="/">Home</Link>
    <Link href="/product">Products</Link>
    <Link href="/about">About</Link>
    <Link href="/contact">Contact</Link> 
    <FaShoppingCart style={{color:'white',fontSize:'20px'}}/>
</nav>
       </header>
    )
}
export default Header;