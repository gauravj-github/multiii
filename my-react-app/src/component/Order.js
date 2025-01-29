import Slidbar from './Slidbar'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


const Order = () => {
    return (

        <div className='flex shadow-2xl  m-10 w-auto'>
            <span >
                <Slidbar></Slidbar>
            </span>

            <div className=" ml-32 m-10 p-4 bg-white shadow-md rounded-lg">
                <table className="w-full border-collapse border border-gray-300 text-left">
                    {/* Table Header */}
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">#</th>
                            <th className="border border-gray-300 px-4 py-2">Product</th>
                            <th className="border border-gray-300 px-4 py-2">Price</th>
                            <th className="border border-gray-300 px-4 py-2">Status</th>
                            <th className="border border-gray-300 px-4 py-2">Action</th>
                        </tr>
                    </thead>

                    {/* Table Body */}
                    <tbody>
                        <tr className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-4 py-2">1</td>
                            <td className="border border-gray-300 px-4 py-2">Product Title</td>
                            <td className="border border-gray-300 px-4 py-2">₹500</td>
                            <td className="border border-gray-300 px-4 py-2 text-green-500 font-semibold">completed</td>
                            <td className="border border-gray-300 px-4 py-2 space-x-2">
                                <a href="#" className='bg-blue-600 p-1 rounded-xl' >Change Status</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>

  )
}

export default Order