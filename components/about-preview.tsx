import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Nguồn nguyên liệu 100% từ Đồng bằng sông Cửu Long",
  "Quy trình sản xuất khép kín, đạt chuẩn VSATTP",
  "Không sử dụng chất bảo quản độc hại",
  "Đội ngũ chuyên gia với hơn 15 năm kinh nghiệm",
]

export function AboutPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/tropical-fruit-farm-mekong-delta-vietnam-green.jpg"
                alt="Vùng nguyên liệu Mekong"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground rounded-xl p-6 shadow-lg hidden md:block">
              <p className="text-4xl font-bold">15+</p>
              <p className="text-sm">Năm kinh nghiệm</p>
            </div>
          </div>

          <div>
            <p className="text-accent font-medium mb-2">Về chúng tôi</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Câu Chuyện Trái Cây Mekong
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              CTY TNHH Trái Cây Mekong được thành lập với sứ mệnh mang hương vị trái cây tươi ngon của vùng đồng bằng
              sông Cửu Long đến với người tiêu dùng trong và ngoài nước. Chúng tôi tự hào là đơn vị tiên phong trong
              lĩnh vực chế biến trái cây sấy với công nghệ hiện đại, đảm bảo giữ nguyên hương vị và dinh dưỡng tự nhiên.
            </p>

            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <Link href="/gioi-thieu">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Tìm hiểu thêm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
