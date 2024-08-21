import Body from '../Components/Body';
import { useState } from 'react';

const MyModal = ({ closeModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSavModalOpen, setIsSavModalOpen] = useState(false);

    return (
        <div className="relative">
            <div className={`${isModalOpen || isSavModalOpen ? 'blur-sm' : ''}`}>
                <Body />

                <button
                    onClick={() => {
                        setIsModalOpen(true);

                    }}
                    className="absolute top-[1273px] left-[936px] px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition z-10 hover:bg-blue-800" >
                    Add
                </button>



                <button
                    onClick={() => {
                        setIsSavModalOpen(true);

                    }}
                    className="absolute top-[270px] left-[1278px] px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-600 transition z-10 hover:bg-blue-800">
                    Add plan
                </button>
            </div>




            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg min-w-screen mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Add Transaction</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div>
                                    <label htmlFor="transition" className="block text-sm font-medium text-gray-700">Transition</label>
                                    <input
                                        type="text"
                                        name="transition"
                                        id="transition"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter amount"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                                <input
                                    type="text"
                                    name="type"
                                    id="type"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter type"
                                />
                            </div>

                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
                                <select
                                    name="status"
                                    id="status"

                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                >

                                    <option value="credited">Credited</option>
                                    <option value="debited">Debited</option>
                                </select>
                            </div>



                        </div>
                        <div className="flex  gap-2 justify-end mt-4"
                        ><button
                            onClick={() => {
                                setIsModalOpen(false);
                                closeModal();
                            }}
                            className="px-4 py-2 bg-purple-200 text-inherit border  border-black rounded-lg hover:bg-purple-300 transition"
                        >
                                Save
                            </button>
                            <button onClick={() => {
                                setIsModalOpen(false);
                                closeModal();
                            }}
                                className="px-4 py-2 bg-gray-100 text-inherit border border-gray-700 rounded-lg hover:bg-gray-300 transition"
                            > Cancel</button></div>
                    </div>
                </div>
            )}


            {isSavModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg min-w-screen mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Add New Saving Plan</h2>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div>
                                    <label htmlFor="transition" className="block text-sm font-medium text-gray-700">Transition</label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter title"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount</label>
                                    <input
                                        type="number"
                                        name="amount"
                                        id="amount"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        placeholder="Enter Savings Amount"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="type" className="block text-sm font-medium text-gray-700">Type</label>
                                <input
                                    type="text"
                                    name="target"
                                    id="target"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-purple-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="Enter target"
                                />
                            </div>





                        </div>
                        <div className="flex  gap-2 justify-end mt-4"
                        ><button
                            onClick={() => {
                                setIsSavModalOpen(false);
                                closeModal();
                            }}
                            className="px-4 py-2 bg-purple-200 text-inherit border  border-black rounded-lg hover:bg-purple-300 transition"
                        >
                                Save
                            </button>
                            <button onClick={() => {
                                setIsSavModalOpen(false);
                                closeModal();
                            }}
                                className="px-4 py-2 bg-gray-100 text-inherit border border-gray-700 rounded-lg hover:bg-gray-300 transition"
                            > Cancel</button></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyModal;
