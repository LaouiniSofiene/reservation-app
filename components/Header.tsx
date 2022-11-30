'use client';

import Image from "next/image"
import { useEffect, useState } from "react";

function Header() {
    const now = new Date();
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
           setInterval(() => setDateState(new Date()), 30000);
    }, []);

  return (
    <header>
        <div className="flex items-center space-x-2 md:space-x-10 w-screen">
            <Image src="/logo.png" width={40} height={40} alt="RA-logo" />
            <div className="flex-1">
                <p className="text-3xl text-white font-bold">Car Reservation App</p>
            </div>
            <div className="hidden ml-auto md:flex items-center space-x-2 md:space-x-10 ">
                <p className="text-2xl text-white">{' '}
                    {dateState.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                    })}
                </p>
                <p className="text-2xl text-white">
                    {dateState.toLocaleString('en-US', {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12: true,
                    })}
                </p>
            </div>
        </div>
    </header>
  )
}

export default Header