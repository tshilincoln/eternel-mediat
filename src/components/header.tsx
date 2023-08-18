'use client'

import Link from "next/link";
import styles from '../stylee/header.module.css'
import Image from "next/image";
import { useState } from "react";

export default function Header(){
    const [imagemenu,setimagemenu]= useState(true)

    return (
        <>
            <section className="min-h-screen bg-[url('/mariage.jpg')] relative"> 
                <header id="main" className="bg-white z-50 fixed top-0 w-full shadow ">
                    <nav 
                    className="bg-white max-w-5xl mx-auto font-poppins p-4 flex items-center justify-between "
                    >
                    <Link href='' aria-label="Eternet-Mediat" 
                    className="flex text-lg md:text-xl font-mono"
                    >Eternet-Mediat</Link> 
                    
                    <button
                        onClick={() => setimagemenu(!imagemenu)}
                        aria-label="toggle button"
                        aria-expanded='false'
                        id="btn1"
                        className="cursor-pointer w-7 md:hidden "
                        >
                            {imagemenu ? (<img src='/menus.png' alt=""/>
                    ) : (<img className="w-6" src='/falses.png' alt=""/>
                    )}
                    </button>
                    <ul
                    id="toggled-menu"
                    //className="md:flex hidden uppercase items-center gap-2"
                    className="w-full absolute top-full left-0 -translate-y-full -z-10 text-gray-800 border-gray-200 items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex"
                    >
                        <li className="py-4 md:py-0 md:mr-2.5 hover:border-b-2 border-sky-400 duration-500">
                            <Link 
                            href="#" 
                            onClick={() => setimagemenu(!imagemenu)}
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400 duration-400"
                            >acceuil</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2.5 hover:border-b-2 border-sky-400 duration-400">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400 duration-400"
                            >portfolio</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2.5 hover:border-b-2 border-sky-400 duration-400">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400 duration-400"
                            >service</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2.5 hover:border-b-2 border-sky-400 duration-500">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400 duration-400"
                            >photos</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2.5 hover:border-b-2 border-sky-400 duration-400">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400 duration-400"
                            >videos</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2.5 hover:border-b-2 border-sky-400 duration-400">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400 duration-400"
                            >clients</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2.5 hover:border-b-2 border-sky-400 duration-400">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400 duration-400"
                            >contact</Link>
                        </li>
                    </ul>
                    </nav>      
                </header> 
                <div className="absolute h-full w-full font-mono " >
                    <div className="relative w-full h-full text-center">
                        <div 
                        className="w-full h-full bg-white md:w-11/12 md:mt-20 md:h-5/6 opacity-50 md:rounded-2xl shadow-slate-950 shadow-2xl inline-block ">
                            <div 
                            className="w-full h-full md:w-3/6 flex items-center justify-center float-right">
                                <div className="bd inline-block">
                                    <h1 className="text-2xl">Bienvenue chez</h1>
                                    <br />
                                    <h1 className="text-2xl font-bold uppercase">Eternel Mediat</h1>

                                </div>
                                    
                                
                            </div>
                            
                        </div>
                    </div>
                </div>     
            </section>
        </>
    )
}