import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="w-screen h-[60px] bg-blue-900 text-white">
            <nav className="container mb-4 p-4 mx-auto">
                <Link href="/">Home</Link>
            </nav>
        </div>
    );
};

export default Navbar;
