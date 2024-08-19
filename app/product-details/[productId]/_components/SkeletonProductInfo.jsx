import React from 'react'

function SkeletonProductInfo() {
    return (
        <div className='flex flex-col gap-5 '>
            <div className='h-[20px] w-[300px] bg-slate-200 animate-pulse'></div>
            <div className='h-[20px] w-[70px] bg-slate-200 animate-pulse'></div>
            <div className='h-[20px] w-[300px]  bg-slate-200 animate-pulse'></div>
            <div className='h-[20px] w-[300px] bg-slate-200 animate-pulse'></div>
            <div className='h-[20px] w-[70px] bg-slate-200 animate-pulse'></div>
        </div>
    )
}

export default SkeletonProductInfo