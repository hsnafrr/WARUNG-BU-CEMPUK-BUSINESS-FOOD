import { MenuCategory } from "./menu-category"

const menuData = {
  nasiGoreng: {
    title: "Nasi Goreng",
    icon: "🍚",
    category: "makanan",
    items: [
      { name: "Nasi Goreng Biasa", price: 5000 },
      { name: "Nasi Goreng Ayam", price: 8000 },
      { name: "Nasi Goreng Telur", price: 8000 },
      { name: "Nasi Goreng Ati", price: 8000 },
      { name: "Nasi Goreng Ampela", price: 8000 },
      { name: "Nasi Goreng Bakso", price: 8000 },
      { name: "Nasi Goreng Sosis", price: 8000 },
    ],
  },
  magelangan: {
    title: "Magelangan",
    icon: "🍜",
    category: "makanan",
    items: [
      { name: "Magelangan Biasa", price: 5000 },
      { name: "Magelangan Ayam", price: 8000 },
      { name: "Magelangan Telur", price: 8000 },
      { name: "Magelangan Ati", price: 8000 },
      { name: "Magelangan Ampela", price: 8000 },
      { name: "Magelangan Bakso", price: 8000 },
      { name: "Magelangan Sosis", price: 8000 },
    ],
  },
  mieGoreng: {
    title: "Mie Goreng",
    icon: "🍝",
    category: "makanan",
    items: [
      { name: "Mie Goreng Biasa", price: 5000 },
      { name: "Mie Goreng Ayam", price: 8000 },
      { name: "Mie Goreng Telur", price: 8000 },
      { name: "Mie Goreng Ati", price: 8000 },
      { name: "Mie Goreng Ampela", price: 8000 },
      { name: "Mie Goreng Bakso", price: 8000 },
      { name: "Mie Goreng Sosis", price: 8000 },
    ],
  },
  mieKuah: {
    title: "Mie Kuah",
    icon: "🍲",
    category: "makanan",
    items: [
      { name: "Mie Kuah Biasa", price: 5000 },
      { name: "Mie Kuah Ayam", price: 8000 },
      { name: "Mie Kuah Telur", price: 8000 },
      { name: "Mie Kuah Ati", price: 8000 },
      { name: "Mie Kuah Ampela", price: 8000 },
      { name: "Mie Kuah Bakso", price: 8000 },
      { name: "Mie Kuah Sosis", price: 8000 },
      { name: "Mie Kuah Ceker", price: 8000 },
      { name: "Mie Kuah Balungan", price: 8000 },
    ],
  },
  soto: {
    title: "Soto",
    icon: "🥣",
    category: "makanan",
    items: [
      { name: "Soto Biasa", price: 5000 },
      { name: "Soto Telur", price: 8000 },
      { name: "Soto Ati", price: 8000 },
      { name: "Soto Ampela", price: 8000 },
      { name: "Soto Ceker", price: 8000 },
      { name: "Soto Balungan", price: 8000 },
    ],
  },
  seblak: {
    title: "Seblak",
    icon: "🌶️",
    category: "makanan",
    items: [
      { name: "Seblak Original", price: 5000 },
      { name: "Seblak Ayam", price: 8000 },
      { name: "Seblak Ceker", price: 8000 },
      { name: "Seblak Ati", price: 8000 },
      { name: "Seblak Ampela", price: 8000 },
      { name: "Seblak Balungan", price: 8000 },
      { name: "Seblak Telur Mata Sapi", price: 8000 },
      { name: "Seblak Jamur Enoki", price: 8000 },
    ],
  },
  minuman: {
    title: "Minuman",
    icon: "🥤",
    category: "minuman",
    items: [
      { name: "Teh Es/Hangat", price: 3000 },
      { name: "Marimas/Jasjus", price: 2000 },
      { name: "Frentea", price: 2000 },
      { name: "Jahe Merah", price: 3000 },
      { name: "Jeruk Es/Hangat", price: 3000 },
      { name: "Nutrisari", price: 3000 },
      { name: "Pop Ice", price: 3000 },
      { name: "Tora Café", price: 3000 },
      { name: "Good Day", price: 3000 },
      { name: "White Coffee", price: 3000 },
      { name: "Kopi Kapal Api", price: 3000 },
      { name: "Milo", price: 4000 },
      { name: "ABC Kopi Susu", price: 4000 },
      { name: "Susu Putih/Coklat", price: 4000 },
      { name: "Coffee Mix", price: 4000 },
      { name: "Drink Beng-Beng", price: 4000 },
      { name: "Chocolatos Drink", price: 4000 },
    ],
  },
}

export function MenuSection() {
  return (
    <section id="menu" className="py-20 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Daftar Menu
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Menu <span className="text-primary">Lengkap</span> Kami
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pilihan menu yang beragam dengan harga terjangkau untuk semua kalangan
          </p>
        </div>

        <div className="space-y-16">
          <MenuCategory {...menuData.nasiGoreng} />
          <MenuCategory {...menuData.magelangan} />
          <MenuCategory {...menuData.mieGoreng} />
          <MenuCategory {...menuData.mieKuah} />
          <MenuCategory {...menuData.soto} />
          <MenuCategory {...menuData.seblak} />
          <MenuCategory {...menuData.minuman} />
        </div>
      </div>
    </section>
  )
}
