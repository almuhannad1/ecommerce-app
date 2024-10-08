'use client'
import React, { useEffect, useState, useContext } from 'react'
import Image from 'next/image'
import { CartContext } from '../_context/CartContext';
import Cart from '../_components/Cart'

// clerk
import { UserButton, useUser } from '@clerk/nextjs'

// icon
import { ShoppingCart } from 'lucide-react';
import CartApis from '../_utils/CartApis';

function Header() {
    const { cart, setCart } = useContext(CartContext)
    const [openCart, setOpenCart] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        setIsLoggedIn(window.location.href.toString().includes('sign-in'))
    }, [])

    const { user } = useUser();

    useEffect(() => {
        user && getCartItems();
    }, [user])
    const getCartItems = () => {
        CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress).then(res => {
            console.log("=>= ", res?.data?.data)
            res?.data?.data?.forEach(citem => {
                setCart((oldCart) => [
                    ...oldCart,
                    {
                        id: citem.id,
                        products: citem?.attributes?.products?.data[0]
                    }
                ])
            })
        })
    }

    return !isLoggedIn && (
        <header className="bg-white">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 shadow-md">
                <div className="flex h-16 items-center justify-between">
                    <div className="md:flex md:items-center md:gap-12">

                        {/* logo */}
                        <Image src="/logo.svg" alt='logo' width={100} height={100} />
                    </div>

                    <div className="hidden md:block">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                <li>
                                    <a className="text-gray-500 transition hover:text-secondary" href="/"> Home </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-secondary" href="#"> Explore </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-secondary" href="#"> Projects </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-secondary" href="#"> About Us </a>
                                </li>

                                <li>
                                    <a className="text-gray-500 transition hover:text-secondary" href="#"> Contact Us </a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        {!user ?
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-teal-800"
                                    href="/sign-in"
                                >
                                    Login
                                </a>

                                <div className="hidden sm:flex">
                                    <a
                                        className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary"
                                        href="#"
                                    >
                                        Register
                                    </a>
                                </div>
                            </div>
                            :
                            <div className='flex items-center gap-5'>
                                {/* Cart */}
                                <h2 className='flex gap-1 cursor-pointer'><ShoppingCart onClick={() => setOpenCart(!openCart)} />{(cart?.length)}</h2>
                                <UserButton afterSignOutUrl="/" />
                                {openCart && <Cart />}
                            </div>

                        }

                        <div className="block md:hidden">
                            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header