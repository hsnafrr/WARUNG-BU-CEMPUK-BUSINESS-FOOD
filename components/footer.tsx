import { Phone, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">BC</span>
              </div>
              <span className="font-bold text-lg text-primary">Bu Cempluk</span>
            </div>
            <p className="text-muted-foreground">
              Warung Sederhana Bu Cempluk - Menyajikan makanan enak dengan harga terjangkau untuk semua kalangan.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Menu Populer</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Nasi Goreng</li>
              <li>Mie Goreng</li>
              <li>Magelangan</li>
              <li>Soto</li>
              <li>Seblak</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-foreground mb-4">Kontak</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                088983647665
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                07.00 - 21.00 (Jumat Libur)
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <a
                  href="https://maps.app.goo.gl/nZpgK5KgU8yuyvAE9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Lihat di Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Warung Sederhana Bu Cempluk. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
