import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home } from "lucide-react"

const products = [
  {
    id: "xoai-say-deo",
    name: "Xoài sấy dẻo",
    description: "Xoài cát Hòa Lộc sấy dẻo, vị ngọt tự nhiên, không chất bảo quản",
    image: "/dried-mango-slices-soft-chewy-golden.jpg",
    weight: "100g, 200g, 500g",
    featured: true,
  },
  {
    id: "chuoi-say-deo",
    name: "Chuối sấy dẻo",
    description: "Chuối xiêm sấy dẻo, ngọt thanh tự nhiên, giàu kali",
    image: "/dried-banana-soft-sweet-yellow.jpg",
    weight: "100g, 200g",
    featured: true,
  },
  {
    id: "thanh-long-say-deo",
    name: "Thanh long sấy dẻo",
    description: "Thanh long ruột đỏ sấy dẻo, màu sắc bắt mắt, giàu chất chống oxi hóa",
    image: "/dried-dragon-fruit-red-soft.jpg",
    weight: "100g, 200g",
    featured: false,
  },
  {
    id: "thom-say-deo",
    name: "Thơm sấy dẻo",
    description: "Thơm Queen sấy dẻo, vị chua ngọt hài hòa, thơm nồng",
    image: "/dried-pineapple-soft-golden.jpg",
    weight: "100g, 200g, 500g",
    featured: true,
  },
  {
    id: "oi-say-deo",
    name: "Ổi sấy dẻo",
    description: "Ổi nữ hoàng sấy dẻo, giòn nhẹ, thơm ngon",
    image: "/dried-guava-soft-pink.jpg",
    weight: "100g, 200g",
    featured: false,
  },
  {
    id: "kiwi-say-deo",
    name: "Kiwi sấy dẻo",
    description: "Kiwi xanh sấy dẻo, chua ngọt cân bằng, giàu vitamin C",
    image: "/dried-kiwi-soft-green.jpg",
    weight: "100g, 150g",
    featured: false,
  },
  {
    id: "mang-cut-say-deo",
    name: "Măng cụt sấy dẻo",
    description: "Măng cụt sấy dẻo, vị ngọt thanh, đặc sản miền Tây",
    image: "/dried-mangosteen-soft-purple.jpg",
    weight: "100g, 200g",
    featured: false,
  },
  {
    id: "dua-hau-say-deo",
    name: "Dưa hấu sấy dẻo",
    description: "Dưa hấu ruột đỏ sấy dẻo, ngọt mát, giữ nguyên màu tự nhiên",
    image: "/dried-watermelon-soft-red.jpg",
    weight: "100g, 200g",
    featured: false,
  },
  {
    id: "mit-say-deo",
    name: "Mít sấy dẻo",
    description: "Mít Thái sấy dẻo, thơm ngậy, vị ngọt đậm đà",
    image: "/dried-jackfruit-soft-yellow.jpg",
    weight: "100g, 200g, 500g",
    featured: true,
  },
  {
    id: "chom-chom-say-deo",
    name: "Chôm chôm sấy dẻo",
    description: "Chôm chôm sấy dẻo, vị ngọt thanh, độc đáo",
    image: "/dried-rambutan-soft.jpg",
    weight: "100g, 150g",
    featured: false,
  },
  {
    id: "nho-say-deo",
    name: "Nho sấy dẻo",
    description: "Nho xanh không hạt sấy dẻo, ngọt tự nhiên, giàu năng lượng",
    image: "/dried-grape-raisins-soft.jpg",
    weight: "100g, 200g, 500g",
    featured: false,
  },
  {
    id: "cam-say-deo",
    name: "Cam sấy dẻo",
    description: "Cam Canh sấy dẻo, vị chua ngọt, giàu vitamin",
    image: "/dried-orange-slices-soft.jpg",
    weight: "100g, 200g",
    featured: false,
  },
]

export default function SayDeoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[250px] md:h-[350px]">
          <Image src="/soft-dried-mango-fruit-chewy-golden.jpg" alt="Trái cây sấy dẻo" fill className="object-cover" />
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
              <span className="text-card font-medium">Trái cây sấy dẻo</span>
            </nav>

            <div className="text-card">
              <Badge className="mb-3 bg-accent text-accent-foreground">12 sản phẩm</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Trái Cây Sấy Dẻo</h1>
              <p className="text-lg text-card/90 max-w-2xl leading-relaxed">
                Giữ nguyên hương vị tự nhiên của trái cây tươi, mềm dẻo và thơm ngon. Sản xuất theo quy trình hiện đại,
                đảm bảo an toàn vệ sinh thực phẩm.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 bg-secondary border-y border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Trái cây tươi</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">0%</div>
                <div className="text-sm text-muted-foreground">Chất bảo quản</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Loại sản phẩm</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary mb-1">ISO</div>
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

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Đặt Hàng Số Lượng Lớn?</h2>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Liên hệ với chúng tôi để nhận báo giá tốt nhất cho đơn hàng sỉ và hợp tác kinh doanh
            </p>
            <Link href="/lien-he">
              <Button size="lg" variant="secondary" className="bg-card text-foreground hover:bg-card/90">
                Liên hệ ngay
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
