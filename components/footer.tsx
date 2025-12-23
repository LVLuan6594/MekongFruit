import Link from "next/link"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-lg">M</span>
              </div>
              <div>
                <p className="font-serif font-bold text-lg leading-tight">Mekong</p>
                <p className="text-xs text-primary-foreground/70 -mt-0.5">Trái Cây Sấy</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              CTY TNHH Trái Cây Mekong chuyên sản xuất và cung cấp các sản phẩm trái cây sấy chất lượng cao từ vùng đồng
              bằng sông Cửu Long.
            </p>
            {/* Certifications */}
            <div className="pt-2">
              <p className="text-xs text-primary-foreground/60 mb-2">Chứng nhận VSATTP</p>
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-md flex items-center justify-center">
                <span className="text-xs text-center">Bộ Công Thương</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/gioi-thieu"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="/san-pham"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="/khuyen-mai"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Khuyến mãi
                </Link>
              </li>
              <li>
                <Link
                  href="/tuyen-dung"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link
                  href="/lien-he"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Thông tin liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60 shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">
                  123 Đường Quốc Lộ 1A, Phường An Bình, TP. Cần Thơ, Việt Nam
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-foreground/60 shrink-0" />
                <a
                  href="tel:02923123456"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  (0292) 312 3456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-foreground/60 shrink-0" />
                <a
                  href="mailto:info@mekongfruit.vn"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  info@mekongfruit.vn
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kết nối với chúng tôi</h3>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-xs font-bold">Zalo</span>
                <span className="sr-only">Zalo</span>
              </a>
              <a
                href="mailto:info@mekongfruit.vn"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            {/* Visit Counter */}
            <div className="pt-4">
              <p className="text-xs text-primary-foreground/60">Lượt truy cập</p>
              <p className="text-2xl font-bold">12,345</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} CTY TNHH Trái Cây Mekong. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
