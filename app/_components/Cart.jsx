import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'
import Link from 'next/link';

function Cart() {
    const { cart, setCart } = useContext(CartContext)

    cart?.map((item) => {
        console.log(item)
    });

    return (
        < div
            className="h-[300px] w- [250px] bg-gray-100 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto"
            aria-modal="true"
            role="dialog"
            tabIndex="-1"
        >

            <div className="mt-4 space-y-6">
                <ul className="space-y-4">
                    {cart?.map((item) => (
                        <li key={item?.id} className="flex items-center gap-4">
                            <img
                                src={item?.products?.attributes?.banner?.data?.attributes?.url}
                                alt="banner"
                                className="size-16 rounded object-cover"
                            />

                            <div>
                                <h3 className="text-sm text-gray-900 line-clamp-1">{item?.products?.attributes?.title}</h3>

                                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                                    <div>
                                        <dt className="inline">Category: </dt>
                                        <dd className="inline">{item?.products?.attributes?.category}</dd>
                                    </div>

                                    <div>
                                        <dt className="inline">Price: </dt>
                                        <dd className="inline">${item?.products?.attributes?.price}</dd>
                                    </div>
                                </dl>
                            </div>

                        </li>
                    ))}

                    <div className="space-y-4 text-center">
                        <Link
                            href="/cart"
                            className="block rounded border border-primary px-5 py-3 text-sm text-primary transition hover:ring-1 hover:ring-primary"
                        >
                            View my cart ({cart.length})
                        </Link>
                    </div>

                </ul>

            </div>
        </div >
    )
}

export default Cart