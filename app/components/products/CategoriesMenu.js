"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Guitarras', href: '/productos/guitarras' },
  { name: 'Bajos', href: '/productos/bajos' },
  { name: 'Pianos', href: '/productos/pianos' },
  { name: 'Accesorios', href: '/productos/accesorios' },
]

const CategoriesMenu = () => {
  const pathname = usePathname()

  return (
    <aside className="flex flex-col gap-3">
      {links.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className={`py-2 border-b-2 ${
            pathname === link.href
              ? 'font-semibold border-blue-500 text-blue-600'
              : 'border-transparent hover:border-gray-300'
          } transition-colors duration-200`}
        >
          {link.name}
        </Link>
      ))}
    </aside>
  )
}

export default CategoriesMenu
