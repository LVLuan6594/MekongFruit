import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Gift, Percent } from "lucide-react"

const promotions = [
  {
    id: 1,
    title: "Ưu đãi mùa hè",
    description: "Giảm 20% cho tất cả sản phẩm trái cây sấy dẻo khi mua từ 5 gói trở lên",
    image: "/summer-fruit-sale-promotion-colorful.jpg",
    discount: "20%",
    validUntil: "30/08/2024",
    type: "discount",
  },
  {
    id: 2,
    title: "Combo quà tặng",
    description: "Mua 3 tặng 1 - Áp dụng cho các sản phẩm trái cây sấy giòn",
    image: "/gift-combo-fruit-package-bow-ribbon.jpg",
    discount: "Tặng 1",
    validUntil: "15/09/2024",
    type: "gift",
  },
  {
    id: 3,
    title: "Đại lý VIP",
    description: "Chiết khấu đặc biệt lên đến 35% cho đơn hàng B2B từ 10 triệu đồng",
    image: "/business-partnership-handshake-professional.jpg",
    discount: "35%",
    validUntil: "31/12/2024",
    type: "partner",
  },
]

export function PromotionsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-accent font-medium mb-2">Ưu đãi đặc biệt</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Chương Trình Khuyến Mãi</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Khám phá các chương trình ưu đãi hấp dẫn dành cho quý khách hàng
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={promo.image || "/placeholder.svg"}
                  alt={promo.title}
                  width={300}
                  height={200}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  {promo.type === "discount" && <Percent className="h-3 w-3 mr-1" />}
                  {promo.type === "gift" && <Gift className="h-3 w-3 mr-1" />}
                  {promo.discount}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-foreground mb-2">{promo.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{promo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    HSD: {promo.validUntil}
                  </div>
                  <Link href="/khuyen-mai">
                    <Button variant="outline" size="sm">
                      Chi tiết
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/khuyen-mai">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Xem tất cả khuyến mãi
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
