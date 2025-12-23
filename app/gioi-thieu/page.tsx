import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { CheckCircle, Users, Factory, Award, Leaf } from "lucide-react"

const stats = [
  { icon: Users, label: "Nhân viên", value: "100+" },
  { icon: Factory, label: "Năm thành lập", value: "2009" },
  { icon: Award, label: "Giải thưởng", value: "15+" },
  { icon: Leaf, label: "Loại sản phẩm", value: "25+" },
]

const timeline = [
  { year: "2009", title: "Thành lập công ty", description: "Khởi đầu với cơ sở sản xuất nhỏ tại Cần Thơ" },
  { year: "2012", title: "Mở rộng quy mô", description: "Đầu tư nhà máy mới với công nghệ hiện đại" },
  { year: "2016", title: "Chứng nhận VSATTP", description: "Đạt chứng nhận Vệ sinh An toàn Thực phẩm" },
  { year: "2019", title: "Xuất khẩu quốc tế", description: "Mở rộng thị trường xuất khẩu sang Châu Âu và Mỹ" },
  { year: "2023", title: "Phát triển bền vững", description: "Áp dụng quy trình sản xuất xanh, thân thiện môi trường" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px]">
          <Image src="/aerial-view-mekong-delta-river-green-farms.jpg" alt="Đồng bằng sông Cửu Long" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="text-card max-w-2xl">
              <p className="text-accent font-medium mb-2">Về chúng tôi</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Giới Thiệu Công Ty</h1>
              <p className="text-lg text-card/90">Hành trình mang hương vị Mekong đến với thế giới</p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Câu Chuyện Của Chúng Tôi
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CTY TNHH Trái Cây Mekong được thành lập năm 2009, xuất phát từ niềm đam mê với những loại trái cây
                    thơm ngon của vùng đồng bằng sông Cửu Long. Người sáng lập đã nhận ra tiềm năng to lớn của việc chế
                    biến trái cây sấy để bảo quản và mang hương vị quê hương đến với nhiều người hơn.
                  </p>
                  <p>
                    Với tầm nhìn xa trông rộng và sự kiên trì không ngừng, công ty đã phát triển từ một cơ sở nhỏ với
                    vài nhân viên thành một doanh nghiệp quy mô với nhà máy sản xuất hiện đại, đạt các tiêu chuẩn chất
                    lượng quốc tế.
                  </p>
                  <p>
                    Ngày nay, sản phẩm của Trái Cây Mekong không chỉ phục vụ thị trường trong nước mà còn được xuất khẩu
                    đến nhiều quốc gia trên thế giới, góp phần quảng bá hình ảnh nông sản Việt Nam ra thế giới.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/traditional-fruit-drying-process-workers-vietnam.jpg"
                  alt="Quy trình sản xuất"
                  width={600}
                  height={500}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Hành Trình Phát Triển</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Những cột mốc quan trọng trong quá trình phát triển của công ty
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {timeline.map((item, index) => (
                <div key={item.year} className="flex gap-6 pb-8 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                      {item.year.slice(-2)}
                    </div>
                    {index < timeline.length - 1 && <div className="w-0.5 h-full bg-border mt-2" />}
                  </div>
                  <div className="pb-8">
                    <p className="text-accent font-medium text-sm">{item.year}</p>
                    <h3 className="font-semibold text-xl text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Giá Trị Cốt Lõi</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Chất Lượng",
                  description:
                    "Cam kết mang đến sản phẩm chất lượng cao nhất với nguyên liệu tươi ngon được chọn lọc kỹ càng",
                },
                {
                  title: "Uy Tín",
                  description: "Luôn giữ chữ tín với khách hàng và đối tác, xây dựng mối quan hệ hợp tác lâu dài",
                },
                {
                  title: "Bền Vững",
                  description: "Phát triển hài hòa với môi trường, hỗ trợ cộng đồng nông dân địa phương",
                },
              ].map((value) => (
                <div key={value.title} className="text-center p-6 rounded-xl bg-card border border-border">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
