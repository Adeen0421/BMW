import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return (
        <header className='header'>
            <div className='logop'>
                <Image
                    height={40}
                    width={40}
                    alt='BMW Logo'
                    src='/navlogo.png'
                    className='kk'
                />
                <Link href="/" className='logo'>BMW</Link>
            </div>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/product">Products</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <FaShoppingCart style={{color:'white', fontSize:'20px'}}/>
            </nav>
        </header>
    )
}

export default Header;