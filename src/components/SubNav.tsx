'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const pages = [
  { href: '/nesting/item-1', label: 'Item 1' },
  { href: '/nesting/item-2', label: 'Item 2' },
  { href: '/nesting/item-3', label: 'Item 3' },
]

const useIsActive = () => {
  const pathname = usePathname()

  return (href: string) => href === pathname
}

export default () => {
  const isActive = useIsActive()

  return (
    <nav className="gap-x-2 flex text-sm mb-8">
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
