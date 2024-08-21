import React, { useContext } from 'react'
import { CartContext } from '../_context/CartContext'

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
            <button className="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
                <span className="sr-only">Close cart</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

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

                            <button className="text-gray-600 transition hover:text-red-600 pl-5">
                                <span className="sr-only">Remove item</span>

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                    />
                                </svg>
                            </button>
                        </li>
                    ))}

                    <div className="space-y-4 text-center">
                        <a
                            href="#"
                            className="block rounded border border-primary px-5 py-3 text-sm text-primary transition hover:ring-1 hover:ring-primary"
                        >
                            View my cart ({cart.length})
                        </a>

                        <a
                            href="#"
                            className="inline-block text-sm text-primary underline underline-offset-4 transition hover:text-secondary"
                        >
                            Continue shopping
                        </a>
                    </div>

                </ul>

            </div>
        </div >
    )
}

export default Cart