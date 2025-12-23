import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Gift, Percent, Users } from "lucide-react"

const promotions = [
  {
    id: 1,
    title: "Ưu đãi mùa hè 2024",
    description:
      "Giảm 20% cho tất cả sản phẩm trái cây sấy dẻo khi mua từ 5 gói trở lên. Áp dụng cho khách hàng cá nhân và đại lý.",
    image: "/placeholder.svg?height=400&width=600",
    discount: "20%",
    validFrom: "01/06/2024",
    validUntil: "31/08/2024",
    type: "discount",
    conditions: ["Mua từ 5 gói trở lên", "Áp dụng cho sản phẩm sấy dẻo", "Không kết hợp ưu đãi khác"],
    active: true,
  },
  {
    id: 2,
    title: "Combo quà tặng tết",
    description: "Mua 3 tặng 1 - Áp dụng cho các sản phẩm trái cây sấy giòn. Lý tưởng cho quà biếu người thân.",
    image: "/placeholder.svg?height=400&width=600",
    discount: "Mua 3 tặng 1",
    validFrom: "15/01/2024",
    validUntil: "15/02/2025",
    type: "gift",
    conditions: ["Áp dụng cho sản phẩm sấy giòn", "Tặng sản phẩm có giá trị thấp nhất", "Số lượng có hạn"],
    active: true,
  },
  {
    id: 3,
    title: "Chương trình đại lý VIP",
    description: "Chiết khấu đặc biệt lên đến 35% cho đơn hàng B2B từ 10 triệu đồng. Hỗ trợ marketing và trưng bày.",
    image: "/placeholder.svg?height=400&width=600",
    discount: "35%",
    validFrom: "01/01/2024",
    validUntil: "31/12/2024",
    type: "partner",
    conditions: ["Đơn hàng từ 10 triệu đồng", "Ký hợp đồng đại lý", "Cam kết doanh số hàng tháng"],
    active: true,
  },
  {
    id: 4,
    title: "Flash Sale cuối tuần",
    description: "Giảm giá sốc 30% cho sản phẩm Sầu riêng sấy giòn vào thứ 7 và Chủ nhật hàng tuần.",
    image: "/placeholder.svg?height=400&width=600",
    discount: "30%",
    validFrom: "01/01/2024",
    validUntil: "31/12/2024",
    type: "flash",
    conditions: ["Chỉ áp dụng thứ 7 và CN", "Sản phẩm Sầu riêng sấy giòn", "Số lượng có hạn mỗi ngày"],
    active: true,
  },
]

function getTypeIcon(type: string) {
  switch (type) {
    case "discount":
      return <Percent className="h-4 w-4" />
    case "gift":
      return <Gift className="h-4 w-4" />
    case "partner":
      return <Users className="h-4 w-4" />
    default:
      return <Percent className="h-4 w-4" />
  }
}

export default function PromotionsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[250px] md:h-[300px]">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Khuyến mãi" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="text-card">
              <p className="text-accent font-medium mb-2">Ưu đãi đặc biệt</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Chương Trình Khuyến Mãi</h1>
              <p className="text-lg text-card/90">Khám phá các ưu đãi hấp dẫn dành cho bạn</p>
            </div>
          </div>
        </section>

        {/* Promotions List */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-8">
              {promotions.map((promo) => (
                <div
                  key={promo.id}
                  className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid md:grid-cols-[400px_1fr] gap-6">
                    <div className="relative aspect-video md:aspect-auto">
                      <Image src={promo.image || "/placeholder.svg"} alt={promo.title} fill className="object-cover" />
                      <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                        {getTypeIcon(promo.type)}
                        <span className="ml-1">{promo.discount}</span>
                      </Badge>
                    </div>
                    <div className="p-6 md:py-8">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        {promo.active && (
                          <Badge variant="outline" className="text-primary border-primary">
                            Đang diễn ra
                          </Badge>
                        )}
                      </div>
                      <h2 className="font-semibold text-2xl text-foreground mb-3">{promo.title}</h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{promo.description}</p>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>
                            Từ {promo.validFrom} đến {promo.validUntil}
                          </span>
                        </div>
                      </div>

                      <div className="mb-6">
                        <p className="text-sm font-medium text-foreground mb-2">Điều kiện áp dụng:</p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {promo.conditions.map((condition, index) => (
                            <li key={index} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {condition}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Áp dụng ngay</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
