'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className=" shadow-md ">
      <div className='max-w-7xl mx-auto text-black px-6 py-4 flex justify-between items-center  '>
      <div className="text-xl font-bold">Chaitanya</div>
      <ul className="flex gap-4">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`hover:text-blue-400 ${
                pathname === link.href ? 'text-blue-400' : ''
              }`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </nav>
  )
}
