interface MenuCardProps {
  name: string
  price: number
  category: "makanan" | "minuman" // Use category instead of individual image
}

export function MenuCard({ name, price, category }: MenuCardProps) {
  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price)

  const imageSrc = category === "minuman" ? "/minuman.jpg" : "/makanan.jpg"

  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <div className="aspect-square overflow-hidden">
        <img
          src={imageSrc || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-3">
        <h4 className="font-medium text-foreground text-sm leading-tight mb-2 line-clamp-2">{name}</h4>
        <p className="text-primary font-bold text-sm">{formattedPrice}</p>
      </div>
    </div>
  )
}
