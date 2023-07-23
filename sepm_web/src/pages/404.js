import React from 'react'

export const Page404 = () => {
    return (
        <div className='bg-gray-100 w-full h-screen relative pt-28 pl-5 pr-5 sm:pl-64 flex flex-col'>

            {/* Head of page */}
            <div className='flex mb-5 items-center'>
                <span class="material-symbols-outlined mr-2 cursor-pointer" onClick={() => window.location.href = '/'}>
                    keyboard_arrow_left
                </span>
                <h1 className='p-0 m-0 font-extrabold sm:text-lg xl:text-xl tracking-tight text-gray-800'>Go Home</h1>
            </div>

            <div className='w-full h-1/2 flex justify-center items-center'>
                <h4 className='font-bold text-lg'>Error 404! Page Not Found</h4>
            </div>
        </div>
    )
}
