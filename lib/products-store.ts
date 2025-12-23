export interface Product {
  id: number
  name: string
  category: "Sấy dẻo" | "Sấy giòn" | "OEM"
  description: string
  image: string
  featured: boolean
  visible: boolean
  order: number
}

const STORAGE_KEY = "mekong_products"

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Xoài sấy dẻo",
    category: "Sấy dẻo",
    description: "Xoài cát Hòa Lộc sấy dẻo, vị ngọt tự nhiên",
    image: "/dried-mango-slices-soft-chewy-golden.jpg",
    featured: true,
    visible: true,
    order: 1,
  },
  {
    id: 2,
    name: "Mít sấy giòn",
    category: "Sấy giòn",
    description: "Mít nghệ sấy giòn, giữ nguyên hương vị đặc trưng",
    image: "/crispy-jackfruit-chips-golden-crunchy.jpg",
    featured: true,
    visible: true,
    order: 2,
  },
  {
    id: 3,
    name: "Chuối sấy dẻo",
    category: "Sấy dẻo",
    description: "Chuối xiêm sấy dẻo, ngọt thanh tự nhiên",
    image: "/dried-banana-soft-sweet-yellow.jpg",
    featured: false,
    visible: true,
    order: 3,
  },
  {
    id: 4,
    name: "Khoai lang sấy giòn",
    category: "Sấy giòn",
    description: "Khoai lang tím sấy giòn, giàu dinh dưỡng",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    visible: true,
    order: 4,
  },
  {
    id: 5,
    name: "Dừa sấy giòn",
    category: "Sấy giòn",
    description: "Dừa Bến Tre sấy giòn, thơm béo tự nhiên",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    visible: true,
    order: 5,
  },
  {
    id: 6,
    name: "Thanh long sấy dẻo",
    category: "Sấy dẻo",
    description: "Thanh long ruột đỏ sấy dẻo, màu sắc bắt mắt",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    visible: true,
    order: 6,
  },
  {
    id: 7,
    name: "Sầu riêng sấy giòn",
    category: "Sấy giòn",
    description: "Sầu riêng Ri6 sấy giòn, hương vị đậm đà",
    image: "/placeholder.svg?height=300&width=300",
    featured: true,
    visible: true,
    order: 7,
  },
  {
    id: 8,
    name: "Thơm sấy dẻo",
    category: "Sấy dẻo",
    description: "Thơm Queen sấy dẻo, vị chua ngọt hài hòa",
    image: "/placeholder.svg?height=300&width=300",
    featured: false,
    visible: true,
    order: 8,
  },
]

export class ProductsStore {
  static getAll(): Product[] {
    if (typeof window === "undefined") return INITIAL_PRODUCTS

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS))
      return INITIAL_PRODUCTS
    }
    return JSON.parse(stored)
  }

  static getVisible(): Product[] {
    return this.getAll()
      .filter((p) => p.visible)
      .sort((a, b) => a.order - b.order)
  }

  static getById(id: number): Product | undefined {
    return this.getAll().find((p) => p.id === id)
  }

  static add(product: Omit<Product, "id">): Product {
    const products = this.getAll()
    const newId = Math.max(...products.map((p) => p.id), 0) + 1
    const newProduct = { ...product, id: newId }
    products.push(newProduct)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    return newProduct
  }

  static update(id: number, updates: Partial<Product>): Product | null {
    const products = this.getAll()
    const index = products.findIndex((p) => p.id === id)
    if (index === -1) return null

    products[index] = { ...products[index], ...updates }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
    return products[index]
  }

  static delete(id: number): boolean {
    const products = this.getAll()
    const filtered = products.filter((p) => p.id !== id)
    if (filtered.length === products.length) return false

    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
    return true
  }

  static toggleVisibility(id: number): boolean {
    const product = this.getById(id)
    if (!product) return false

    this.update(id, { visible: !product.visible })
    return true
  }

  static reorder(ids: number[]): void {
    const products = this.getAll()
    ids.forEach((id, index) => {
      const product = products.find((p) => p.id === id)
      if (product) product.order = index + 1
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  }
}
