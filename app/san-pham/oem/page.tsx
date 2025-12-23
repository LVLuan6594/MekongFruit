import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, CheckCircle2, Users, Boxes, Settings, TrendingUp } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Đội ngũ chuyên nghiệp",
    description: "Tư vấn từ thiết kế bao bì đến công thức sản phẩm phù hợp với thị trường mục tiêu của bạn",
  },
  {
    icon: Boxes,
    title: "Đơn hàng linh hoạt",
    description: "Sản xuất từ đơn hàng nhỏ đến lớn, hỗ trợ doanh nghiệp mới khởi nghiệp",
  },
  {
    icon: Settings,
    title: "Quy trình chuẩn",
    description: "Nhà máy đạt chứng nhận ISO, HACCP, FDA. Đảm bảo chất lượng và an toàn thực phẩm",
  },
  {
    icon: TrendingUp,
    title: "Giá cạnh tranh",
    description: "Nguồn nguyên liệu ổn định từ vùng nguyên liệu, giá thành tối ưu cho đối tác",
  },
]

const process = [
  {
    step: "01",
    title: "Tư vấn & Báo giá",
    description: "Trao đổi ý tưởng, yêu cầu sản phẩm và nhận báo giá chi tiết",
  },
  {
    step: "02",
    title: "Thiết kế mẫu",
    description: "Phát triển công thức, thiết kế bao bì theo thương hiệu của bạn",
  },
  {
    step: "03",
    title: "Sản xuất thử",
    description: "Sản xuất mẫu để khách hàng kiểm tra và phê duyệt",
  },
  {
    step: "04",
    title: "Sản xuất hàng loạt",
    description: "Sản xuất số lượng lớn theo đơn hàng đã ký kết",
  },
  {
    step: "05",
    title: "Đóng gói & Giao hàng",
    description: "Đóng gói theo tiêu chuẩn, giao hàng đúng hạn đến kho của bạn",
  },
]

const caseStudies = [
  {
    company: "Brand A - Chuỗi cửa hàng hoa quả",
    result: "Phát triển 5 dòng sản phẩm trái cây sấy với thương hiệu riêng, doanh số tăng 200% sau 6 tháng",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    company: "Brand B - Thương hiệu ăn vặt healthy",
    result: "Thiết kế bao bì hiện đại, phù hợp gen Z. Sản phẩm được bán tại 50+ cửa hàng tiện lợi",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    company: "Brand C - Xuất khẩu Hàn Quốc",
    result: "Đáp ứng tiêu chuẩn FDA, HACCP. Xuất khẩu thành công 5 container/tháng",
    image: "/placeholder.svg?height=200&width=350",
  },
]

export default function OEMPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[250px] md:h-[350px]">
          <Image
            src="/private-label-fruit-packaging-premium-boxes.jpg"
            alt="Dịch vụ OEM/ODM"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/50" />
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
              <span className="text-card font-medium">Dịch vụ OEM/ODM</span>
            </nav>

            <div className="text-card">
              <Badge className="mb-3 bg-accent text-accent-foreground">B2B Solution</Badge>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Dịch Vụ OEM/ODM</h1>
              <p className="text-lg text-card/90 max-w-2xl leading-relaxed">
                Sản xuất trái cây sấy theo yêu cầu với thương hiệu riêng của bạn. Từ thiết kế đến sản xuất, chúng tôi
                đồng hành cùng bạn xây dựng thương hiệu thành công.
              </p>
            </div>
          </div>
        </section>

        {/* What is OEM/ODM */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <p className="text-accent font-medium mb-2">Giải pháp doanh nghiệp</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">OEM/ODM Là Gì?</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      OEM (Original Equipment Manufacturer)
                    </h3>
                    <p className="text-muted-foreground">
                      Chúng tôi sản xuất sản phẩm theo công thức và thiết kế có sẵn của bạn, gắn thương hiệu riêng của
                      bạn lên bao bì.
                    </p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-lg text-foreground mb-2">ODM (Original Design Manufacturer)</h3>
                    <p className="text-muted-foreground">
                      Chúng tôi hỗ trợ phát triển sản phẩm từ đầu: từ nghiên cứu công thức, thiết kế bao bì đến sản xuất
                      hoàn chỉnh theo yêu cầu của bạn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Quy trình OEM/ODM"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium mb-2">Lợi ích</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Tại Sao Chọn Mekong Fruits?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Đối tác tin cậy với kinh nghiệm sản xuất và xuất khẩu trái cây sấy hơn 15 năm
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="bg-card rounded-xl p-6 border border-border">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium mb-2">Quy trình làm việc</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                5 Bước Để Có Sản Phẩm Riêng
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quy trình đơn giản, minh bạch, đảm bảo chất lượng từ khâu tư vấn đến giao hàng
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-4 md:gap-6">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="bg-card rounded-xl p-6 border border-border h-full">
                    <div className="text-4xl font-bold text-primary/20 mb-3">{item.step}</div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 md:py-16 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-accent font-medium mb-2">Khách hàng thành công</p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Câu Chuyện Đối Tác</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những thương hiệu đã tin tưởng và thành công cùng Mekong Fruits
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-card rounded-xl overflow-hidden border border-border">
                  <div className="relative aspect-video">
                    <Image src={study.image || "/placeholder.svg"} alt={study.company} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">{study.company}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{study.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MOQ & Requirements */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Điều Kiện Đặt Hàng</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Số lượng tối thiểu (MOQ)</p>
                        <p className="opacity-90">Từ 500kg/đơn hàng (có thể thương lượng cho đơn hàng mẫu nhỏ hơn)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Thời gian sản xuất</p>
                        <p className="opacity-90">15-30 ngày tùy theo quy mô đơn hàng</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold mb-1">Điều khoản thanh toán</p>
                        <p className="opacity-90">Cọc 30%, thanh toán 70% trước khi giao hàng (hoặc thương lượng)</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="bg-primary-foreground/10 backdrop-blur rounded-xl p-6 border border-primary-foreground/20">
                    <p className="text-sm opacity-90 mb-2">Liên hệ ngay để</p>
                    <p className="text-lg font-semibold">Nhận báo giá chi tiết & tư vấn miễn phí</p>
                  </div>
                  <Link href="/lien-he">
                    <Button size="lg" variant="secondary" className="w-full bg-card text-foreground hover:bg-card/90">
                      Gửi yêu cầu báo giá
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
