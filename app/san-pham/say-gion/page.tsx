import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home } from "lucide-react"

const products = [
  {
    id: "mit-say-gion",
    name: "Mít sấy giòn",
    description: "Mít nghệ sấy giòn, giữ nguyên hương vị đặc trưng, giòn tan",
    image: "/crispy-jackfruit-chips-golden-crunchy.jpg",
    weight: "50g, 100g, 200g",
    featured: true,
  },
  {
    id: "khoai-lang-say-gion",
    name: "Khoai lang sấy giòn",
    description: "Khoai lang tím sấy giòn, giàu dinh dưỡng, ít calories",
    image: "/crispy-purple-sweet-potato-chips.jpg",
    weight: "50g, 100g, 200g",
    featured: true,
  },
  {
    id: "dua-say-gion",
    name: "Dừa sấy giòn",
    description: "Dừa Bến Tre sấy giòn, thơm béo tự nhiên, không dầu mỡ",
    image: "/crispy-coconut-chips-white.jpg",
    weight: "50g, 100g, 200g, 500g",
    featured: true,
  },
  {
    id: "sau-rieng-say-gion",
    name: "Sầu riêng sấy giòn",
    description: "Sầu riêng Ri6 sấy giòn, hương vị đậm đà, độc đáo",
    image: "/crispy-durian-chips-golden.jpg",
    weight: "50g, 100g, 200g",
    featured: true,
  },
  {
    id: "chuoi-say-gion",
    name: "Chuối sấy giòn",
    description: "Chuối xiêm sấy giòn, ngọt thanh, ăn vặt lý tưởng",
    image: "/crispy-banana-chips-yellow.jpg",
    weight: "50g, 100g, 200g",
    featured: false,
  },
  {
    id: "khoai-tay-say-gion",
    name: "Khoai tây sấy giòn",
    description: "Khoai tây Đà Lạt sấy giòn, vị mặn nhẹ, không chiên",
    image: "/crispy-potato-chips-vacuum-fried.jpg",
    weight: "50g, 100g, 200g",
    featured: false,
  },
  {
    id: "tao-say-gion",
    name: "Táo sấy giòn",
    description: "Táo Fuji sấy giòn, giữ nguyên dinh dưỡng, thơm ngon",
    image: "/placeholder.svg?height=300&width=300",
    weight: "50g, 100g",
    featured: false,
  },
  {
    id: "ca-chua-say-gion",
    name: "Cà chua sấy giòn",
    description: "Cà chua cherry sấy giòn, vị ngọt chua, bổ dưỡng",
    image: "/placeholder.svg?height=300&width=300",
    weight: "50g, 100g",
    featured: false,
  },
]

export default function SayGionPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[250px] md:h-[350px]">
          <Image
            src="/crispy-dried-jackfruit-chips-golden-brown.jpg"
            alt="Trái cây sấy giòn"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/40" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex flex-col justify-center">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-card/80 mb-4">
              <Link href="/" className="hover:text-card transition-colors flex items-center gap-1">
                <Home className="h-4 w-4" />
                Trang chủ
              </Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/san-pham" className="hover:text-card transition-colors">
                Sản phẩm
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-card font-medium">Trái cây sấy giòn</span>
            </nav>

            <div className="text-card">
              <Badge className="mb-3 bg-accent text-accent-foreground">8 sản phẩm</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Trái Cây Sấy Giòn</h1>
              <p className="text-lg text-card/90 max-w-2xl leading-relaxed">
                Giòn tan, thơm ngon, tiện lợi mang theo. Sấy chân không giữ nguyên dinh dưỡng, không dầu mỡ, không chất
                bảo quản.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">Sấy VF</div>
                <div className="text-sm text-muted-foreground">Chân không</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">0%</div>
                <div className="text-sm text-muted-foreground">Dầu chiên</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">8</div>
                <div className="text-sm text-muted-foreground">Loại sản phẩm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">HACCP</div>
                <div className="text-sm text-muted-foreground">Chứng nhận</div>
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/san-pham/${product.id}`}
                  className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 left-2 bg-accent text-accent-foreground">Nổi bật</Badge>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{product.description}</p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">Quy cách:</span> {product.weight}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Công nghệ sấy chân không"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">Công nghệ tiên tiến</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Sấy Chân Không (VF)</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Công nghệ sấy chân không (Vacuum Frying) hiện đại giúp giữ nguyên màu sắc, hương vị và dinh dưỡng của
                  trái cây. Sản phẩm giòn tan tự nhiên, không cần dầu chiên, an toàn cho sức khỏe.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Nhiệt độ thấp, giữ nguyên dưỡng chất</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Giòn tự nhiên, không dầu mỡ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Màu sắc tươi sáng, hấp dẫn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">✓</span>
                    <span>Bảo quản lâu, tiện lợi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Trở Thành Đối Tác Của Chúng Tôi</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Chúng tôi cung cấp sản phẩm chất lượng cao với giá cạnh tranh cho các đại lý, cửa hàng và siêu thị
            </p>
            <Link href="/lien-he">
              <Button size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
                Đăng ký đại lý
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
