import React from 'react'

const Header = () => {
    return (
        <div className="border py-6 px-4 flex justify-between items-center bg-purple-100">
            <div className="flex space-x-8 items-center">
                <h1 className="font-bold text-2xl">Dashboard</h1>
                <button className="rounded-xl bg-gradient-to-r from-red-600  to-orange-400 hover:bg-gradient-to-l px-4 py-1.5 text-gray-100">Transactions</button>
                <button className="rounded-xl bg-gradient-to-r from-blue-600  to-blue-400 hover:bg-gradient-to-l px-4 py-1.5 text-gray-100">Analysis</button>
                <button className="rounded-xl bg-gradient-to-r from-blue-600  to-green-400 hover:bg-gradient-to-l px-4 py-1.5 text-gray-100">Savings</button>
            </div>
            <div className="flex justify-between gap-7 items-center">
                <svg class="h-6 w-6 text-slate-500 hover:text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />  <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>

                <div className="flex items-center gap-2">
                    <img className="rounded-full w-11 h-11" src="./assets/logo.png" ></img>
                    <div>
                        <h1 className="font-semibold font-4">Jane Cooper</h1>
                        <p className='text-xs font-extralight'>Admin</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
