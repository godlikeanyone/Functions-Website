"use client"

import { Button } from "@/components/ui/button"
import { 
  Cpu, 
  Wifi, 
  Wind, 
  Battery, 
  ShieldCheck, 
  Activity, 
  ArrowRight 
} from "lucide-react"
import { useEffect, useState } from "react"

export default function HardwareSolutionsPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Hardware Solutions",
        title: "Precision Sensing, Intelligent Control",
        description:
          "Proprietary IoT hardware designed for commercial reliability. Monitor, control, and optimize your building environment with enterprise-grade accuracy.",
      },
      products: [
        {
          id: "sensor",
          category: "Sensing",
          title: "AuraSense Pro: Enterprise Air Quality Monitor",
          description: "A comprehensive indoor environmental quality monitor designed for WELL v2 and LEED certifications. Real-time data for CO2, PM2.5, TVOC, Temperature, and Humidity.",
          features: [
            "Industrial-grade NDIR CO2 sensors",
            "Laser scattering PM2.5 monitoring",
            "Self-calibrating sensors with 5+ year lifespan",
            "Discrete design suitable for luxury interiors"
          ],
          specs: [
            { icon: Activity, value: "±3%", label: "CO2 Accuracy" },
            { icon: Wifi, value: "Dual", label: "Wi-Fi + LoRaWAN" },
            { icon: ShieldCheck, value: "IP40", label: "Protection Rating" },
          ],
          image: "/hardware-sensor.webp", // 替换为你的图片路径
        },
        {
          id: "gateway",
          category: "Connectivity",
          title: "Nexus Hub: Edge Computing Gateway",
          description: "The central nervous system of your smart building. Securely aggregates data from thousands of sensors and enables local automation without cloud latency.",
          features: [
            "Supports up to 2,000 end-nodes per gateway",
            "Built-in 4G LTE failover backup",
            "Edge computing for local logic execution",
            "AES-128 End-to-End Encryption"
          ],
          specs: [
            { icon: Cpu, value: "4-Core", label: "Processing Unit" },
            { icon: Battery, value: "48h", label: "Backup Battery" },
            { icon: Wifi, value: "10km", label: "LoRa Range" },
          ],
          image: "/hardware-gateway.webp", // 替换为你的图片路径
        },
      ],
      cta: "View Full Datasheet"
    },
    zh: {
      hero: {
        eyebrow: "硬件解决方案",
        title: "精准感知，智能控制",
        description: "专为商业可靠性设计的自研物联网硬件。以企业级精度监测、控制并优化您的建筑环境。",
      },
      products: [
        {
          id: "sensor",
          category: "环境感知",
          title: "AuraSense Pro: 企业级空气质量监测仪",
          description: "专为 WELL v2 和 LEED 认证设计的综合室内环境质量监测仪。实时监测 CO2、PM2.5、TVOC、温度和湿度。",
          features: [
            "工业级 NDIR 二氧化碳传感器",
            "激光散射 PM2.5 监测技术",
            "自校准传感器，使用寿命超过 5 年",
            "适合高端内饰的隐蔽式设计"
          ],
          specs: [
            { icon: Activity, value: "±3%", label: "CO2 精度" },
            { icon: Wifi, value: "双模", label: "Wi-Fi + LoRaWAN" },
            { icon: ShieldCheck, value: "IP40", label: "防护等级" },
          ],
          image: "/hardware-sensor.webp",
        },
        {
          id: "gateway",
          category: "连接枢纽",
          title: "Nexus Hub: 边缘计算网关",
          description: "智能建筑的中枢神经系统。安全汇聚数千个传感器的数据，并实现无云端延迟的本地自动化控制。",
          features: [
            "单网关支持多达 2,000 个终端节点",
            "内置 4G LTE 故障切换备份",
            "边缘计算支持本地逻辑执行",
            "AES-128 端到端加密"
          ],
          specs: [
            { icon: Cpu, value: "4核", label: "处理单元" },
            { icon: Battery, value: "48h", label: "备用电池" },
            { icon: Wifi, value: "10km", label: "LoRa 覆盖范围" },
          ],
          image: "/hardware-gateway.webp",
        },
      ],
      cta: "查看完整规格书"
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen">
      {/* Hero Section - 保持与 CaseStudy 一致的视觉风格 */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="absolute inset-0 opacity-20">
          {/* 稍微调整了光斑的位置，让它看起来有点变化但风格统一 */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.hero.description}</p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-24">
            {t.products.map((product, index) => {
              const isReversed = index % 2 !== 0 // 交替布局
              return (
                <div
                  key={product.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Left Side (Text Info) */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-px w-8 bg-primary"></div>
                      <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                      {product.title}
                    </h2>

                    <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                      {product.description}
                    </p>
                 
                    <div className="mb-8">
                      <ul className="grid gap-3">
                        {product.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted-foreground">
                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                 
                    {/* Tech Specs Grid - 模仿了 Case Study 的 Results 区域 */}
                    <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border mb-8">
                      {product.specs.map((spec, idx) => {
                        const Icon = spec.icon
                        return (
                          <div key={idx}>
                            <Icon className="h-5 w-5 text-primary mb-2" />
                            <div className="text-2xl font-bold text-foreground mb-1">{spec.value}</div>
                            <div className="text-xs text-muted-foreground">{spec.label}</div>
                          </div>
                        )
                      })}
                    </div>

                    <Button variant="outline" className="group">
                      {t.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                 
                  {/* Right Side (Image) */}
                  <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-muted rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                    {/* 这里使用 div 模拟图片占位，实际使用时请换回 img 标签 */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-muted/50">
                         <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
