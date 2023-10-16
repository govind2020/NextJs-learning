'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import './about.css'
export default function Layout({ children}){
    const pathName = usePathname()
    return(
        <div>
            {
                pathName!=='/about/aboutTeacher'?
                 <ul className="about-menu">
                 <li>
                     <h4>About Page</h4>
                 </li>
                 <li>
                     <Link href="/about" >About</Link>
                 </li>
                 <li>
                 <Link href="/about/aboutcollage" >Collage About</Link>
                 </li>
                 <li>
                 <Link href="/about/aboutstudent" >Student About</Link>
                 </li>
                 <li>
                 <Link href="/about/aboutTeacher" >Teacher About</Link>
                 </li>
             </ul>:null
            }
           
            {children}
        </div>

    )
}