import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    return (
        <header>
            <div className='flex flex-col'>
                <div className="flex space-x-2 items-center">
                    <Image
                        src="htpps//links.papareact.com/jne"
                        width={50} 
                        height={10}
                        alt="logo" />
                      
                      
                      <p className="text-blue-400">Welcome to the Hala Messenger</p>

                      <Link href="/auth/signin" className="
                      bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign In </Link>
                </div>


            </div>
        </header>
    )
}