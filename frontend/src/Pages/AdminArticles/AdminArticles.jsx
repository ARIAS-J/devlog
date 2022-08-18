import React from 'react'
import { Link } from "react-router-dom";
import Layout from '../../Components/Layout/Layout';


function AdminArticles() {

    return (
        <Layout>

            <div className="">
                <div className="flex items-center lg:justify-between sm:justify-center">
                    <div className="">
                        <h3
                            className="text-gray-200 font-semibold lg:text-3xl sm:text-2xl mb-2"
                        >
                            Articles
                        </h3>
                    </div>
                    <div className="">
                        <Link to='new-article' className='flex justify-center space-x-2  items-center text-gray-200 px-3 rounded hover:text-gray-900 hover:bg-gray-200 ease-in duration-300'>Add Article</Link>
                    </div>
                </div>

                <hr className="text-gray-200" />

                <div className="my-10">
                    <div className="flex justify-between">
                        <div className="flex space-x-10 items-center">
                            <div className="">
                                <img src="" className='w-80 rounded-lg object-cover' alt="" />
                            </div>


                            <div className="space-y-8">
                                <h3 className='text-gray-200 font-bold uppercase'>Titulo del proyecto</h3>
                                <p className='text-gray-400 font-semibold uppercase'>00/00/00</p>
                                <div className="">
                                    <Link to='new-post' className='hover:text-gray-900 text-gray-200 hover:bg-gray-200 px-10 py-1 border-2 rounded ease-in duration-300'>Add Post</Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center space-x-10">
                            <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="carbon:view"></span></button></div>
                            <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="fluent:edit-20-regular"></span></button></div>
                            <div className=""><button className='text-gray-400 hover:text-gray-200 ease-in duration-300 text-3xl'><span class="iconify" data-icon="ion:trash-bin-outline"></span></button></div>
                        </div>
                    </div>
                </div >

                <hr className="text-gray-200" />

            </div >
        </Layout>
    )
}

export default AdminArticles