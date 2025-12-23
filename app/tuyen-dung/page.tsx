"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { MapPin, Clock, Briefcase, Users, CheckCircle } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "Nhân viên kinh doanh",
    department: "Phòng Kinh doanh",
    location: "Cần Thơ",
    type: "Toàn thời gian",
    postedDate: "15/06/2024",
    deadline: "15/07/2024",
    status: "active",
    description:
      "Tìm kiếm khách hàng mới, duy trì và phát triển mối quan hệ với khách hàng hiện tại. Đạt chỉ tiêu doanh số được giao.",
    requirements: [
      "Tốt nghiệp Cao đẳng/Đại học chuyên ngành Kinh tế, Quản trị kinh doanh",
      "Có kinh nghiệm 1-2 năm trong lĩnh vực kinh doanh thực phẩm",
      "Kỹ năng giao tiếp và thuyết phục tốt",
      "Có phương tiện di chuyển cá nhân",
    ],
    benefits: [
      "Lương cơ bản + hoa hồng hấp dẫn",
      "Thưởng theo doanh số, thưởng lễ tết",
      "Bảo hiểm xã hội đầy đủ",
      "Cơ hội thăng tiến trong công việc",
    ],
  },
  {
    id: 2,
    title: "Kỹ thuật viên sản xuất",
    department: "Phòng Sản xuất",
    location: "Cần Thơ",
    type: "Toàn thời gian",
    postedDate: "10/06/2024",
    deadline: "10/07/2024",
    status: "active",
    description: "Vận hành và bảo trì máy móc thiết bị sản xuất. Đảm bảo quy trình sản xuất đúng kỹ thuật và an toàn.",
    requirements: [
      "Tốt nghiệp Trung cấp/Cao đẳng chuyên ngành Cơ khí, Điện công nghiệp",
      "Có kinh nghiệm vận hành máy sấy thực phẩm là một lợi thế",
      "Chịu khó, cẩn thận trong công việc",
      "Sẵn sàng làm việc theo ca",
    ],
    benefits: [
      "Lương cạnh tranh theo năng lực",
      "Phụ cấp ca đêm, phụ cấp chuyên cần",
      "Bảo hiểm xã hội, bảo hiểm y tế đầy đủ",
      "Môi trường làm việc an toàn, hiện đại",
    ],
  },
  {
    id: 3,
    title: "Nhân viên QC",
    department: "Phòng Quản lý chất lượng",
    location: "Cần Thơ",
    type: "Toàn thời gian",
    postedDate: "05/06/2024",
    deadline: "05/07/2024",
    status: "active",
    description: "Kiểm tra chất lượng nguyên liệu đầu vào và thành phẩm. Đảm bảo sản phẩm đạt tiêu chuẩn VSATTP.",
    requirements: [
      "Tốt nghiệp Đại học chuyên ngành Công nghệ thực phẩm, Sinh học",
      "Có kiến thức về tiêu chuẩn HACCP, ISO 22000",
      "Kỹ năng phân tích, đánh giá chất lượng",
      "Tỉ mỉ, có trách nhiệm cao trong công việc",
    ],
    benefits: [
      "Lương theo năng lực và kinh nghiệm",
      "Đào tạo chuyên môn định kỳ",
      "Chế độ bảo hiểm đầy đủ",
      "Thưởng theo hiệu quả công việc",
    ],
  },
]

export default function RecruitmentPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[250px] md:h-[300px]">
          <Image src="/placeholder.svg?height=300&width=1200" alt="Tuyển dụng" fill className="object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="text-card">
              <p className="text-accent font-medium mb-2">Cơ hội nghề nghiệp</p>
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Tuyển Dụng</h1>
              <p className="text-lg text-card/90">Gia nhập đội ngũ Trái Cây Mekong</p>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-12 bg-secondary">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Tại sao chọn Trái Cây Mekong?
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Users, title: "Đội ngũ chuyên nghiệp", desc: "Làm việc cùng những đồng nghiệp tài năng" },
                { icon: Briefcase, title: "Phát triển sự nghiệp", desc: "Cơ hội thăng tiến rõ ràng" },
                { icon: CheckCircle, title: "Chế độ đãi ngộ tốt", desc: "Lương thưởng cạnh tranh" },
                { icon: MapPin, title: "Môi trường thân thiện", desc: "Văn hóa công ty gắn kết" },
              ].map((item) => (
                <div key={item.title} className="text-center p-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Vị trí đang tuyển ({jobs.length})
            </h2>
            <div className="space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-card rounded-xl border border-border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-semibold text-xl text-foreground">{job.title}</h3>
                        <Badge variant="outline" className="text-primary border-primary">
                          {job.status === "active" ? "Đang tuyển" : "Đã kết thúc"}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {job.type}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        Đăng ngày: {job.postedDate} | Hạn nộp: {job.deadline}
                      </p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Xem chi tiết</Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{job.title}</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6 pt-4">
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {job.type}
                            </span>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Mô tả công việc</h4>
                            <p className="text-muted-foreground">{job.description}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Yêu cầu ứng viên</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Quyền lợi</h4>
                            <ul className="space-y-2">
                              {job.benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-2 text-muted-foreground">
                                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="bg-secondary rounded-lg p-4">
                            <h4 className="font-semibold text-foreground mb-2">Hình thức nộp hồ sơ</h4>
                            <p className="text-muted-foreground text-sm">
                              Gửi CV và thư xin việc qua email:{" "}
                              <a href="mailto:hr@mekongfruit.vn" className="text-primary hover:underline">
                                hr@mekongfruit.vn
                              </a>
                            </p>
                            <p className="text-muted-foreground text-sm mt-1">
                              Hạn nộp: <strong>{job.deadline}</strong>
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
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
