import { link } from 'fs';
import Link from 'next/link';

const links = [
    { href:'/client', label: 'client'},
    { href:'/drinks', label: 'drinks'},
    { href:'/tasks', label: 'tasks'},
    { href:'/query', label: 'query'},
    { href:'/testing', label: 'testing'},
]

const Navbar = () => {
    return (
        <nav className='bg-base-200 py-2'>
            <div className='navbar px-6 max-w-6xl mx-auto flex-col sm:flex-row'>
                <Link href='/' className='btn btn-success rounded-btn'>
                    Next.js
                </Link>
            
            <ul className='menu menu-horizontal md:ml-8'>
                {links.map((link) => {
                    return <li key={link.href}>
                        <Link href={link.href} className='capitalize'>
                            {link.label}
                        </Link>
                    </li>
                })}

            </ul>
            </div> 
        </nav>
    )
}

export default Navbar