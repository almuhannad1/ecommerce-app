'use client'
import React from 'react'
import Link from 'next/link'

function PaymentConfirm() {
  
    return (
        <div className="min-h-[calc(100vh-120px)] flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-16 w-16 text-green-500 mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2l4 -4"
                    />
                    <circle cx="12" cy="12" r="10" />
                </svg>

                <h1 className="text-2xl font-semibold text-gray-900 mt-4">Payment Successful!</h1>
                <p className="text-gray-600 mt-2">Thank you for your purchase. Your order has been confirmed and is being processed.</p>

                {/* <div className="mt-6">
                    <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
                    <div className="text-left mt-2">
                        <div className="flex justify-between text-gray-700">
                            <span>Order Number:</span>
                            <span>#1111</span>
                        </div>
                        <div className="flex justify-between text-gray-700 mt-1">
                            <span>Amount Paid:</span>
                            <span>$125.25</span>
                        </div>
                    </div>
                </div> */}

                <div className="mt-8">
                    <Link href="/" className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-secondary transition duration-200">
                        Continue Shopping
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentConfirm