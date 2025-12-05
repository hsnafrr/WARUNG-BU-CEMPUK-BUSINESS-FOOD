import { MapPin, Clock, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-primary px-4 py-2 rounded-full">
              <Star className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">Warung Favorit Keluarga</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              <span className="text-foreground">Warung Sederhana</span>
              <br />
              <span className="text-primary">Bu Cempluk</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Menyajikan makanan rumahan yang lezat dengan harga terjangkau. Nasi Goreng, Mie Goreng, Soto, Seblak, dan
              berbagai menu favorit lainnya!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#menu"
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                Lihat Menu
              </a>
              <a
                href="https://wa.me/6288983647665"
                className="inline-flex items-center justify-center bg-secondary text-secondary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary/90 transition-colors"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5 text-primary" />
                <span>07.00 - 21.00 WIB</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-secondary" />
                <span>Jumat Libur</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-2xl" />
            <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-primary/50">
              <img src="/indonesian-warung-street-food-stall-with-nasi-gore.jpg" alt="Warung Bu Cempluk" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-2xl border border-border shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍳</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">Mulai dari</p>
                  <p className="text-primary font-extrabold text-xl">Rp 5.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
