import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    id: 1,
    name: "Trái Cây Sấy Dẻo",
    description: "Giữ nguyên hương vị tự nhiên, mềm dẻo và thơm ngon",
    image: "/soft-dried-mango-fruit-chewy-golden.jpg",
    href: "/san-pham/say-deo",
    itemCount: 12,
  },
  {
    id: 2,
    name: "Trái Cây Sấy Giòn",
    description: "Giòn tan, thơm ngon, tiện lợi mang theo",
    image: "/crispy-dried-jackfruit-chips-golden-brown.jpg",
    href: "/san-pham/say-gion",
    itemCount: 8,
  },
  {
    id: 3,
    name: "Sản Phẩm OEM",
    description: "Đặt hàng theo yêu cầu với thương hiệu riêng của bạn",
    image: "/private-label-fruit-packaging-premium-boxes.jpg",
    href: "/san-pham/oem",
    itemCount: 5,
  },
]

export function ProductCategories() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Danh mục sản phẩm</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Sản Phẩm Chủ Lực</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Khám phá các dòng sản phẩm trái cây sấy chất lượng cao từ Mekong
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <span className="text-sm text-muted-foreground">{category.itemCount} sản phẩm</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
