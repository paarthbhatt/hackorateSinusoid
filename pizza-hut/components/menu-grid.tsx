import Link from "next/link"
import { Pizza, Utensils, Tag, Sandwich, Salad, Wine } from "lucide-react"

const menuItems = [
  {
    title: "MENU",
    icon: <Utensils className="h-8 w-8 mb-2" />,
    href: "/menu",
  },
  {
    title: "DEALS",
    icon: <Tag className="h-8 w-8 mb-2" />,
    href: "/deals",
  },
  {
    title: "PIZZA",
    icon: <Pizza className="h-8 w-8 mb-2" />,
    href: "/pizza",
  },
  {
    title: "PASTAS",
    icon: <Utensils className="h-8 w-8 mb-2" />,
    href: "/pastas",
  },
  {
    title: "MELTS",
    icon: <Sandwich className="h-8 w-8 mb-2" />,
    href: "/melts",
  },
  {
    title: "SIDES",
    icon: <Salad className="h-8 w-8 mb-2" />,
    href: "/sides",
  },
  {
    title: "DRINKS",
    icon: <Wine className="h-8 w-8 mb-2" />,
    href: "/drinks",
  },
]

export default function MenuGrid() {
  return (
    <div className="border-2 border-blue-300 rounded-lg p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={`
              flex flex-col items-center justify-center p-6 rounded-lg
              ${index === 0 ? "md:row-span-2 bg-orange-100" : "bg-orange-100"}
              hover:bg-orange-200 transition-colors
            `}
          >
            {item.icon}
            <span className="font-bold">{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
