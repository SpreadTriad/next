'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const pages = [
  { href: '/', label: 'Home' },
  { href: '/crud', label: 'CRUD' },
  { href: '/data', label: 'Data' },
  { href: '/nesting', label: 'Nesting' },
]

const useIsActive = () => {
  const pathname = usePathname()

  return (href: string) => href === pathname
}

export default () => {
  const isActive = useIsActive()

  return (
    <nav className="px-12 py-4 gap-x-2 flex">
      {pages.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={isActive(href) ? 'font-bold' : ''}
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
