import { Phone, Clock, MapPin, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Hubungi Kami
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Informasi <span className="text-secondary">Kontak</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pesan langsung via WhatsApp atau kunjungi warung kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Telepon / WhatsApp</h3>
            <p className="text-muted-foreground mb-4">Hubungi untuk pemesanan</p>
            <a
              href="https://wa.me/6288983647665"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
            >
              <MessageCircle className="w-5 h-5" />
              088983647665
            </a>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Jam Operasional</h3>
            <p className="text-muted-foreground mb-4">Buka setiap hari</p>
            <div className="space-y-2">
              <p className="text-primary font-semibold">07.00 - 21.00 WIB</p>
              <p className="text-secondary font-medium text-sm">Hari Jumat Libur</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border text-center hover:border-primary/50 transition-colors">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Lokasi</h3>
            <p className="text-muted-foreground mb-4">Kunjungi warung kami</p>
            <a
              href="https://maps.app.goo.gl/nZpgK5KgU8yuyvAE9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Buka Google Maps
            </a>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Pesan Sekarang via WhatsApp!</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Tidak perlu antri, pesan langsung melalui WhatsApp dan makanan siap saat Anda tiba
          </p>
          <a
            href="https://wa.me/6288983647665?text=Halo%20Bu%20Cempluk%2C%20saya%20ingin%20memesan%20makanan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            Chat WhatsApp Sekarang
          </a>
        </div>
      </div>
    </section>
  )
}
