import { MenuCard } from "./menu-card"

interface MenuItem {
  name: string
  price: number
}

interface MenuCategoryProps {
  title: string
  icon: string
  category: "makanan" | "minuman" // Added category prop
  items: MenuItem[]
}

export function MenuCategory({ title, icon, category, items }: MenuCategoryProps) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center text-2xl">{icon}</div>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
        <div className="flex-1 h-px bg-border ml-4" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
        {items.map((item) => (
          <MenuCard key={item.name} {...item} category={category} />
        ))}
      </div>
    </div>
  )
}
