import React, { useState } from 'react'
import { image } from '../../Constants'
import { Link } from 'react-router-dom';
import { MdKeyboardReturn } from 'react-icons/md'
import { FaPython, FaReact } from 'react-icons/fa'
import { SiDjango, SiFastapi, SiJavascript } from 'react-icons/si'

import Layout from '../../Components/Layout/Layout';

const NewArticle = () => {

    const [imgSrc, setImgSrc] = useState("https://picsum.photos/200");

    return (
        <Layout>

            <form>

                <div className="flex items-center lg:justify-between sm:justify-center">
                    <div className="">
                        <h3
                            className="text-gray-200 font-semibold lg:text-2xl sm:text-xl mb-2 uppercase"
                        >
                            New Article
                        </h3>
                    </div>
                    <div className="space-x-5">
                        <Link to='/admin/articles' className='flex justify-center items-center text-gray-900 px-8 py-1 rounded  bg-gray-400 hover:bg-gray-200 ease-in duration-300'><MdKeyboardReturn className='mr-1 text-lg' /> Return</Link>
                    </div>
                </div>

                <hr className="text-gray-200" />

                <div className="mt-10">

                    <div className="inline-block space-y-4">
                        <label className='text-gray-200 font-medium uppercase'>Article title</label>
                        <div className="">
                            <input type="text" className='bg-gray-800 border-2 border-gray-700 px-3 py-2 rounded-lg' name="title" id="" placeholder='TITLE' />
                        </div>
                    </div>

                    <div className="w-full mt-5 space-y-4">
                        <label className='text-gray-200 font-medium uppercase'>Article Description</label>
                        <div className="w-full flex gap-8">
                            <div className="w-full flex">
                                <textarea name="" className='bg-gray-800 border-2 border-gray-700 text-gray-200 px-3 py-2 rounded-lg w-full h-32 resize-none' id="" cols="30" rows="10" placeholder='DESCRIPTION'></textarea>
                            </div>
                            <div className='flex justify-end'>
                                <div className='grid grid-cols-5 gap-3 items-center'>
                                    <button className='text-gray-400 hover:text-gray-200 text-3xl ease-in duration-300'><FaPython /></button>
                                    <button className='text-gray-400 hover:text-gray-200 text-3xl ease-in duration-300'><SiDjango /></button>
                                    <button className='text-gray-400 hover:text-gray-200 text-3xl ease-in duration-300'><FaReact /></button>
                                    <button className='text-gray-400 hover:text-gray-200 text-3xl ease-in duration-300'><SiFastapi /></button>
                                    <button className='text-gray-400 hover:text-gray-200 text-3xl ease-in duration-300'><SiJavascript /></button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 space-y-4">
                        <label className='text-gray-200 font-medium uppercase'>Article Cover</label>

                        <div className="flex items-center space-x-6">
                            <div className="">
                                <img src={imgSrc} onError={() => setImgSrc("")} className='w-60 h-40 rounded object-cover' alt="" />
                            </div>
                            <div className="">
                                <input type="file" accept='image/*' className='block w-full text-gray-200 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold  file:bg-none hover:file:bg-gray-200 file:text-gray-900 cursor-pointer ease-in duration-300' />
                            </div>
                        </div>
                    </div>

                    <div className="w-full items-center justify-between mt-8">
                        <div className="">
                            <button type="submit" className='w-full bg-gray-200 text-gray-900 px-5 py-3 rounded'>Publish</button>
                        </div>
                    </div>

                </div>

            </form>
        </Layout>
    );
};

export default NewArticle;