"use client"

import { useEffect, useState } from "react"
import { ProtectedRoute } from "@/components/admin/protected-route"
import { AdminLayout } from "@/components/admin/admin-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Package, Eye, EyeOff, Plus } from "lucide-react"
import Link from "next/link"
import { ProductsStore } from "@/lib/products-store"

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    total: 0,
    visible: 0,
    hidden: 0,
  })

  useEffect(() => {
    const products = ProductsStore.getAll()
    setStats({
      total: products.length,
      visible: products.filter((p) => p.visible).length,
      hidden: products.filter((p) => !p.visible).length,
    })
  }, [])

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="p-6 md:p-8 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl font-bold text-foreground">Tổng quan</h1>
              <p className="text-muted-foreground mt-1">Chào mừng đến với bảng điều khiển quản trị</p>
            </div>
            <Link href="/admin/products">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Thêm sản phẩm
              </Button>
            </Link>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Package className="h-5 w-5 text-primary" />
                  Tổng sản phẩm
                </CardTitle>
                <CardDescription>Tất cả sản phẩm trong hệ thống</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-primary">{stats.total}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <Eye className="h-5 w-5 text-green-600" />
                  Đang hiển thị
                </CardTitle>
                <CardDescription>Sản phẩm hiển thị trên website</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-green-600">{stats.visible}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-base">
                  <EyeOff className="h-5 w-5 text-muted-foreground" />
                  Đang ẩn
                </CardTitle>
                <CardDescription>Sản phẩm không hiển thị</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold text-muted-foreground">{stats.hidden}</p>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Hành động nhanh</CardTitle>
              <CardDescription>Các chức năng thường dùng</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/admin/products">
                  <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                    <Package className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-semibold">Quản lý sản phẩm</p>
                      <p className="text-xs text-muted-foreground">Thêm, sửa, xóa sản phẩm</p>
                    </div>
                  </Button>
                </Link>
                <Link href="/san-pham">
                  <Button variant="outline" className="w-full justify-start gap-2 h-auto py-4 bg-transparent">
                    <Eye className="h-5 w-5" />
                    <div className="text-left">
                      <p className="font-semibold">Xem trang sản phẩm</p>
                      <p className="text-xs text-muted-foreground">Xem giao diện khách hàng</p>
                    </div>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  )
}
