import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className="w-screen h-[60px] bg-blue-900 text-white">
            <nav className="container mb-4 p-4 mx-auto">
                <Link href="/">
                    <div className="cursor-pointer hover:text-slate-300">
                        <span className="mr-1 text-lg font-semibold italic">
                            Quizz
                        </span>
                        <span className="text-xl font-bold uppercase">
                            Home
                        </span>
                    </div>
                </Link>
            </nav>
        </div>
    );
};

export default Navbar;
