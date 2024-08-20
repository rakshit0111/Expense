import Body from '../Components/Body';
import { useState } from 'react';

const MyModal = ({ closeModal }) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <div className={`relative ${isModalOpen ? 'blur-sm' : ''}`}>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg p-6 shadow-lg max-w-lg mx-auto">
                        <h2 className="text-2xl font-bold mb-4">Stay Tuned</h2>
                        <p className="text-gray-700 mb-4">Subscribe to my new channel, backchodi hoti hai yaha pe pura pura</p>
                        <button
                            onClick={() => {
                                setIsModalOpen(false);
                                closeModal();
                            }}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Save
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyModal;
