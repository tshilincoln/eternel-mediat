import Link from "next/link";
import styles from '../stylee/header.module.css'
import Image from "next/image";


export default function Navigation(){
    return (
        <>
            <section> 
                <header id="main" className="bg-white z-50 sticky top-0 w-full shadow ">
                    <nav 
                    className="bg-white max-w-5xl mx-auto font-poppins p-4 flex items-center justify-between"
                    >
                    <Link href='' aria-label="Eternet-Mediat" 
                    className="flex text-lg md:text-xl"
                    ><strong>E</strong>ternet-<strong>M</strong>ediat</Link> 
                    <button
                    aria-label="toggle button"
                    aria-expanded="false"
                    id="menu-btn"
                    className="cursor-pointer w-7 md:hidden "
                    ><img src="/menus.png" alt=""/></button> 
                    <ul
                    id="toggled-menu"
                    className="md:flex hidden uppercase items-center gap-4"
                    //w-full absolute top-full left-0 -translate-y-full -z-10 text-gray-800 border-gray-200 flex-col items-center md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row
                    >
                        <li className="py-4 md:py-0 md:mr-2">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400"
                            >acceuil</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400"
                            >portfolio</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-0">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400"
                            >service</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-2">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400"
                            >photos</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-0">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400"
                            >videos</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-0">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400"
                            >clients</Link>
                        </li>
                        <li className="py-4 md:py-0 md:mr-0">
                            <Link 
                            href="#" 
                            className="text-sm uppercase font-semibold w-full hover:text-sky-400"
                            >contact</Link>
                        </li>
                    </ul>
                    </nav>      
                </header>      
            </section>
        </>
    )
}