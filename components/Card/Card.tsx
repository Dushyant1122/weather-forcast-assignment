import Image from 'next/image'
import React from 'react'
import img from '../../public/icons/cloud.png'

const ResponsiveCard: React.FC = () => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* First Section */}
            <div className="p-4">
                <h4 className="text-xl font-bold mb-2">HTML</h4>
                <h6 className="text-gray-600">10:00 AM</h6>
            </div>

            {/* Second Section */}
            <div className="p-4 flex items-center">
                <div className="mr-4">
                    <Image src={img} className="w-6 h-6" alt="Icon" />
                </div>
                <div>
                    <p className="text-gray-800 font-semibold">Some Text</p>
                    <p className="text-gray-600">Some Description</p>
                </div>
            </div>

            {/* Third Section */}
            <div className="p-4 flex justify-between">
                <div className="flex items-center">
                    <Image src={img} className="w-6 h-6" alt="Small Icon" />
                    <p className="ml-2 text-gray-800">Item 1</p>
                </div>
                <div className="flex items-center">
                    <Image src={img} className="w-6 h-6" alt="Small Icon" />
                    <p className="ml-2 text-gray-800">Item 2</p>
                </div>
                <div className="flex items-center">
                    <Image src={img} className="w-6 h-6" alt="Small Icon" />
                    <p className="ml-2 text-gray-800">Item 3</p>
                </div>
                <div className="flex items-center">
                    <Image src={img} className="w-6 h-6" alt="Small Icon" />
                    <p className="ml-2 text-gray-800">Item 4</p>
                </div>
            </div>
        </div>
    )
}

export default ResponsiveCard
