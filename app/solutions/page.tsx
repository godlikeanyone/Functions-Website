"use client"

import { Button } from "@/components/ui/button"
import { SolutionCard } from "@/components/solution-card"
import { ComparisonTable } from "@/components/comparison-table"
import { Cpu, Monitor, Users, Cloud, Database, Lock, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function SolutionsPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Our Solutions",
        title: ["Infrastructure", "Intelligence", "Impact"],
        subHeadline: "We combine advanced engineering with AI-driven insights.",
        description:
          "Our solution starts with ventilation, purification and sensing infrastructure to secure healthy environment, integrates with AI smart platform to optimize energy usage, and culminates in sustainability strategies that future-proof your assets.",
      },
      solutions: [
        {
          icon: Cpu, // Hardware icon
          title: "Hardware Solutions",
          href: "/solutions/hardware",
          description:
            "High-performance air purification and ventilation units designed for modern infrastructure.\nFeaturing MESP technology to capture fine particles and pathogens with high efficiency, low resistance, and minimal energy consumption.",
        },
        {
          icon: Monitor, // Platform icon
          title: "Platform",
          href: "/solutions/platform",
          description:
            "A centralized intelligent management system for total building control.\nVisualize real-time environmental data, automate HVAC responses, and optimize energy usage through our intuitive, AI-driven cloud interface.",
        },
        {
          icon: Users, // Consulting icon
          title: "Consulting",
          href: "/solutions/consulting",
          description:
            "Expert advisory services for environmental compliance and ESG goals.\nWe provide data-driven assessments, WELL/LEED certification support, and custom strategies to transform your building's health and sustainability metrics.",
        },
      ],
      comparison: {
        title: "Why choose Functions Ltd?",
        rows: [
          { feature: "Rapid deployment (weeks not months)", traditional: false, functions: true },
          { feature: "Built-in security and compliance", traditional: false, functions: true },
          { feature: "Scalable architecture", traditional: true, functions: true },
          { feature: "24/7 global support", traditional: false, functions: true },
          { feature: "Proactive monitoring", traditional: false, functions: true },
          { feature: "Cost optimization", traditional: false, functions: true },
          { feature: "Future-proof technology", traditional: false, functions: true },
        ],
      },
    },
    zh: {
      hero: {
        eyebrow: "我们的解决方案",
        title: ["基建", "智能", "影响力"],
        subHeadline: "我们将先进工程技术与 AI 驱动的洞察相结合。",
        description: "我们的解决方案以通风、净化和传感基础设施为起点，保障健康的环境；随后集成 AI 智能平台以优化能源使用；最终通过可持续发展策略，为您的资产实现面向未来的长期价值保障。",
      },
      solutions: [
        {
          icon: Cpu,
          title: "硬件设备",
          href: "/solutions/hardware",
          description: "专为现代基础设施设计的高性能空气净化与通风设备。\n集成MESP技术，高效捕获细颗粒物和病原体，具有低阻力、易维护和节能的长效优势。",
        },
        {
          icon: Monitor,
          title: "管理平台",
          href: "/solutions/platform",
          description: "用于全面楼宇控制的集中式智能管理系统。\n通过直观的云端界面，实时监控环境数据，自动化暖通响应，并利用AI算法优化能源使用效率。",
        },
        {
          icon: Users,
          title: "专家咨询",
          href: "/solutions/consultant",
          description: "针对环境合规性和ESG目标的专家顾问服务。\n提供数据驱动的评估报告、WELL/LEED认证支持以及定制化策略，助力提升建筑健康与可持续性指标。",
        },
      ],
      comparison: {
        title: "为什么选择Functions Ltd？",
        rows: [
          { feature: "快速部署（数周而非数月）", traditional: false, functions: true },
          { feature: "内置安全性和合规性", traditional: false, functions: true },
          { feature: "可扩展架构", traditional: true, functions: true },
          { feature: "24/7全球支持", traditional: false, functions: true },
          { feature: "主动监控", traditional: false, functions: true },
          { feature: "成本优化", traditional: false, functions: true },
          { feature: "面向未来的技术", traditional: false, functions: true },
        ],
      },
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen">
    {/* Hero Section */}
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
      </div>
    
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
          <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
        </div>
    
        {/* Title With Vertical Divider */}
        <h1 className="text-5xl md:text-6xl font-bold mb-8 text-balance flex flex-wrap justify-center items-center gap-x-4 gap-y-2">
          {Array.isArray(t.hero.title) ? (
            t.hero.title.map((item, index) => (
              <span key={index} className="flex items-center">
                <span>{item}</span>
                {index < t.hero.title.length - 1 && (
                  <span 
                    className="mx-3 h-10 w-[2px] bg-gray-300/50 rotate-12 md:rotate-0 md:h-12 md:w-[3px] rounded-full" 
                    aria-hidden="true" 
                  />
                )}
              </span>
            ))
          ) : (
            t.hero.title
          )}
        </h1>
    
        {/* Subheadline */}
        <p className="text-2xl md:text-3xl font-semibold mb-6 text-foreground text-balance">
          {t.hero.subHeadline}
        </p>
    
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
          {t.hero.description}
        </p>
      </div>
    </section>

      {/* Solutions Grid */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 whitespace-pre-line">
            {t.solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                href={solution.href}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable title={t.comparison.title} rows={t.comparison.rows} locale={locale} />
        </div>
      </section>
    </div>
  )
}
