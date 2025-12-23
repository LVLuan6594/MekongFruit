"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Trái Cây Sấy Mekong",
    subtitle: "Hương vị tự nhiên từ đồng bằng sông Cửu Long",
    description: "Sản phẩm chất lượng cao được chế biến từ nguồn nguyên liệu tươi ngon nhất",
    image: "/dried-tropical-fruits-mango-jackfruit-beautiful-ar.jpg",
    cta: "Khám phá ngay",
    href: "/san-pham",
  },
  {
    id: 2,
    title: "Nhà Máy Sản Xuất Hiện Đại",
    subtitle: "Đạt chuẩn vệ sinh an toàn thực phẩm",
    description: "Quy trình sản xuất khép kín, đảm bảo chất lượng từng sản phẩm",
    image: "/modern-food-processing-factory-clean-industrial.jpg",
    cta: "Tìm hiểu thêm",
    href: "/gioi-thieu",
  },
  {
    id: 3,
    title: "Khuyến Mãi Đặc Biệt",
    subtitle: "Ưu đãi hấp dẫn cho đại lý và đối tác",
    description: "Chương trình hợp tác B2B với nhiều chính sách ưu đãi hấp dẫn",
    image: "/dried-fruit-gift-box-premium-packaging-golden.jpg",
    cta: "Xem khuyến mãi",
    href: "/khuyen-mai",
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 flex items-center">
            <div className="max-w-2xl text-card">
              <p className="text-accent font-medium mb-2">{slide.subtitle}</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance">{slide.title}</h1>
              <p className="text-lg md:text-xl mb-8 text-card/90 leading-relaxed">{slide.description}</p>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 hover:bg-card/40 rounded-full flex items-center justify-center text-card transition-colors"
        aria-label="Slide trước"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-card/20 hover:bg-card/40 rounded-full flex items-center justify-center text-card transition-colors"
        aria-label="Slide tiếp theo"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-accent" : "bg-card/50"}`}
            aria-label={`Đi đến slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
