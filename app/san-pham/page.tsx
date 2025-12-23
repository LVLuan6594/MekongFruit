import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const products = [
  {
    id: 1,
    name: "Xoài sấy dẻo",
    category: "Sấy dẻo",
    description: "Xoài cát Hòa Lộc sấy dẻo, vị ngọt tự nhiên",
    image: "/dried-mango-slices-soft-chewy-golden.jpg",
    featured: true,
  },
  {
    id: 2,
    name: "Mít sấy giòn",
    category: "Sấy giòn",
    description: "Mít nghệ sấy giòn, giữ nguyên hương vị đặc trưng",
    image: "/crispy-jackfruit-chips-golden-crunchy.jpg",
    featured: true,
  },
  {
    id: 3,
    name: "Chuối sấy dẻo",
    category: "Sấy dẻo",
    description: "Chuối xiêm sấy dẻo, ngọt thanh tự nhiên",
    image: "/dried-banana-soft-sweet-yellow.jpg",
    featured: false,
  },
  {
    id: 4,
    name: "Khoai lang sấy giòn",
    category: "Sấy giòn",
    description: "Khoai lang tím sấy giòn, giàu dinh dưỡng",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
  },
  {
    id: 5,
    name: "Dừa sấy giòn",
    category: "Sấy giòn",
    description: "Dừa Bến Tre sấy giòn, thơm béo tự nhiên",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
  },
  {
    id: 6,
    name: "Thanh long sấy dẻo",
    category: "Sấy dẻo",
    description: "Thanh long ruột đỏ sấy dẻo, màu sắc bắt mắt",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
  },
  {
    id: 7,
    name: "Sầu riêng sấy giòn",
    category: "Sấy giòn",
    description: "Sầu riêng Ri6 sấy giòn, hương vị đậm đà",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
  },
  {
    id: 8,
    name: "Thơm sấy dẻo",
    category: "Sấy dẻo",
    description: "Thơm Queen sấy dẻo, vị chua ngọt hài hòa",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
  },
]

const categories = [
  { name: "Tất cả", count: products.length },
  { name: "Sấy dẻo", count: products.filter((p) => p.category === "Sấy dẻo").length },
  { name: "Sấy giòn", count: products.filter((p) => p.category === "Sấy giòn").length },
]

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[250px] md:h-[300px]">
          <Image
            src="/placeholder.svg?height=300&width=1200"
            alt="Sản phẩm trái cây sấy"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="text-card">
              <p className="text-accent font-medium mb-2">Khám phá</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Sản Phẩm Của Chúng Tôi</h1>
              <p className="text-lg text-card/90">Đa dạng sản phẩm trái cây sấy chất lượng cao</p>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            {/* Categories Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((cat) => (
                <Button key={cat.name} variant={cat.name === "Tất cả" ? "default" : "outline"} size="sm">
                  {cat.name} ({cat.count})
                </Button>
              ))}
            </div>

            {/* Products Grid */}
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
                    <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{product.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* OEM Section */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-primary text-primary-foreground">B2B</Badge>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Dịch Vụ OEM/ODM</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Chúng tôi cung cấp dịch vụ sản xuất theo yêu cầu (OEM/ODM) với thương hiệu riêng của bạn. Từ thiết kế
                  bao bì đến công thức sản phẩm, đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn tạo ra sản phẩm
                  độc đáo phù hợp với thị trường mục tiêu.
                </p>
                <Link href="/lien-he">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Liên hệ hợp tác
                  </Button>
                </Link>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <Image src="/placeholder.svg?height=400&width=600" alt="Dịch vụ OEM" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
