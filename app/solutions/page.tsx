"use client"

import { Button } from "@/components/ui/button"
import { ComparisonTable } from "@/components/comparison-table"
import { Cpu, Monitor, Users, Cloud, Database, Lock, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"

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
          icon: Cpu,
          title: "Hardware Solutions",
          tagline: "Air Treatment & Sensing Infrastructure",
          href: "/solutions/hardware",
          description: "Purification I Ventilation I Monitoring\n\nPowered by proprietary MESP+ technology, we deliver industrial-grade air purification and smart ventilation solutions. Combined with commercial environmental monitors, we build the physical foundation for a healthy, pathogen-free building environment.",
        },
        {
          icon: Monitor,
          title: "Intelligence Platform",
          tagline: "Real-time Control & AI Optimization",
          href: "/solutions/platform",
          description: "Visualize I Automate I Optimize\n\nA centralized intelligent management system for total building control. Visualize real-time environmental data, automate HVAC responses, and optimize energy usage through our intuitive, AI-driven cloud interface.",
        },
        {
          icon: Users,
          title: "Strategic Consulting",
          tagline: "Environmental Compliance & ESG Strategy",
          href: "/solutions/consulting",
          description: "Assess I Certify I Transform\n\nExpert advisory services for environmental compliance and ESG goals. We provide data-driven assessments, WELL/LEED certification support, and custom strategies to transform your building's health and sustainability metrics.",
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
          title: "硬件设备方案",
          tagline: "空气处理与传感基础设施",
          href: "/solutions/hardware",
          description: "净化 I 通风 I 监测\n\n基于专有的 MESP+ 技术，我们提供工业级的空气净化和智能通风解决方案。结合商业级环境监测器，我们为健康、无病原体的建筑环境奠定物理基础。",
        },
        {
          icon: Monitor,
          title: "智能管理平台",
          tagline: "实时控制与 AI 优化",
          href: "/solutions/platform",
          description: "可视化 I 自动化 I 优化效率\n\n用于全面楼宇控制的集中式智能管理系统。通过直观的云端界面，实时监控环境数据，自动化暖通响应，并利用 AI 算法优化能源使用效率。",
        },
        {
          icon: Users,
          title: "专家战略咨询",
          tagline: "环境合规与 ESG 战略",
          href: "/solutions/consultant",
          description: "评估 I 认证 I 转型升级\n\n针对环境合规性和 ESG 目标的专家顾问服务。提供数据驱动的评估报告、WELL/LEED 认证支持以及定制化策略，助力提升建筑健康与可持续性指标。",
        },
      ],
      comparison: {
        title: "为什么选择 Functions Ltd？",
        rows: [
          { feature: "快速部署（数周而非数月）", traditional: false, functions: true },
          { feature: "内置安全性和合规性", traditional: false, functions: true },
          { feature: "可扩展架构", traditional: true, functions: true },
          { feature: "24/7 全球支持", traditional: false, functions: true },
          { feature: "主动监控", traditional: false, functions: true },
          { feature: "成本优化", traditional: false, functions: true },
          { feature: "面向未来的技术", traditional: false, functions: true },
        ],
      },
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden border-b">
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-background" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
          </div>
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
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">{t.hero.subHeadline}</p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </section>

      {/* Solutions Detailed List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {t.solutions.map((solution, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Visual Side */}
                <div className="flex-1 w-full">
                  <div className="relative aspect-video md:aspect-square max-w-[500px] mx-auto bg-card rounded-3xl border border-border flex items-center justify-center group overflow-hidden shadow-2xl shadow-primary/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent group-hover:opacity-100 transition-opacity" />
                    <solution.icon className="w-32 h-32 text-primary/40 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                {/* Text Side */}
                <div className="flex-1 space-y-6 text-left">
                  <div className="space-y-2">
                    <h3 className="text-primary font-bold tracking-wider uppercase text-sm">
                      {solution.tagline}
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                      {solution.title}
                    </h2>
                  </div>
                  
                  <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                    {solution.description}
                  </p>

                  <div className="pt-4">
                    <Button asChild size="lg" className="rounded-full px-8 group">
                      <Link href={solution.href}>
                        {locale === "zh" ? "了解更多" : "Learn More"}
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-32 bg-card/50 border-y">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable title={t.comparison.title} rows={t.comparison.rows} locale={locale} />
        </div>
      </section>
    </div>
  )
}
