import Link from "next/link";


export default function Navig(){

    return (
        <>
        <nav className=" py-2 w-full z-50 mx-auto sticky top-0">
                    
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
        </>
    )

}


