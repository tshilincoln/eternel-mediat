'use client'

import Link from "next/link";
import styles from '../stylee/header.module.css'
import Image from "next/image";
import { useState } from "react";
import { FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";

export default function Header(){
    const [imagemenu,setimagemenu]= useState(true)

    return (
        <>
            <section className="min-h-screen bg-[url('./mariage.jpg')] relative"> 
                
                <div className="absolute h-full w-full flex justify-center items-center p-3" >
                    
                    <div className="bg-sky-200 w-full h-full absolute z-10 opacity-40 mt-0 md:w-11/12 md:h-5/6 md:rounded-3xl shadow-black shadow-2xl"></div>
                    <div className="w-full h-full absolute z-20 mt-0 md:w-11/12 md:h-5/6 md:rounded-3xl shadow-black ">
                        <nav className="max-w-5xl mx-auto relative py-2">
                    
                            <div className="absolute w-full text-left md:text-center"><Link href='' aria-label="Eternet-Mediat" className=" text-lg md:text-3xl titre ">Eternet-Mediat</Link></div>
                            <div className="absolute w-full flex items-center justify-between text-sm md:text-base font-semibold">
                                <ul className="md:flex hidden top-0 items-center gap-1 text-shad">
                                    <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-2">
                                        <Link href="#" className="w-full navigation">Home</Link>
                                    </li>
                                    <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                        <Link href="#" className="w-full navigation">About</Link>
                                    </li>
                                    <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                        <Link href="#" className="w-full navigation">service</Link>
                                    </li>
                                </ul>
                                <ul className="hidden top-0 md:flex items-center gap-1 text-shad">
                                    <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                        <Link href="#" className=" w-full navigation">Portfolio</Link>
                                    </li>
                                    <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-1">
                                        <Link href="#" className=" w-full navigation">Skils</Link>
                                    </li>
                                    <li className="py-4 md:py-0 md:mr-2 duration-500 p-1 m-2">
                                        <Link href="#" className=" w-full navigation">contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="w-full h-full md:w-4/6 lg:3/6 relative float-right flex items-center justify-center ">
                            <div className="block absolute justify-center text-xl font-bold md:text-4xl">
                                <h1 className="text-center text-3xl md:text-6xl">Bienvenu chez</h1><br />
                                <h1 className="titre text-center text-sky-400 text-5xl md:text-8xl contouretexte">Eternel Mediat</h1>
                                <br />
                                
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 left-0 z-30 block text-xl ml-8 mb-8 md:text-3xl md:ml-16 md:mb-16">
                        <a href="" className="hover:text-sky-700 hover:text-3xl hover:md:text-5xl "><ImFacebook2/></a>
                        <a href="" className="hover:text-orange-600 hover:text-3xl hover:md:text-5xl shadowi "><FaInstagramSquare/></a>
                        <a href="" className="hover:text-sky-600 hover:text-3xl hover:md:text-5xl shadowf "><FaLinkedin/></a>
                       <a href="" className="hover:text-red-600 hover:text-3xl hover:md:text-5xl shadowm "><SiGmail/></a>
                        <a href="" className="hover:text-sky-600 hover:text-3xl hover:md:text-5xl shadowt"><FaTwitterSquare/></a>
                        <a href="" className="hover:text-violet-700 hover:text-3xl hover:md:text-5xl shadowa "><BsFillTelephoneOutboundFill/></a>
                    </div>
                </div>

            </section>
        </>
    )
}