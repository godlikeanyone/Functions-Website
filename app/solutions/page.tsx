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
        title: "Smart systems for healthier, sustainable buildings",
        description:
          "Our solutions combine advanced hardware, intelligent platforms, and expert consultancy to create healthier, more efficient, and more sustainable indoor environments.",
      },
      solutions: [
        {
          icon: Cpu, // Hardware icon
          title: "Hardware",
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
          icon: Users, // Consultant icon
          title: "Consultant",
          href: "/solutions/consultant",
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
      process: {
        title: "Our proven process",
        description: "A systematic approach that delivers results",
        steps: [
          {
            number: "01",
            title: "Discovery",
            description: "Deep dive into your business challenges, goals, and technical landscape",
          },
          {
            number: "02",
            title: "Design",
            description: "Architect solutions tailored to your requirements with scalability in mind",
          },
          {
            number: "03",
            title: "Develop",
            description: "Build with best practices, continuous testing, and agile methodology",
          },
          {
            number: "04",
            title: "Deploy",
            description: "Seamless implementation with minimal disruption to operations",
          },
          {
            number: "05",
            title: "Optimize",
            description: "Continuous improvement through monitoring, feedback, and iteration",
          },
        ],
      },
    },
    zh: {
      hero: {
        eyebrow: "我们的解决方案",
        title: "针对每个挑战的全面技术解决方案",
        description: "从高性能硬件到AI驱动的平台及专家咨询，我们提供端到端的解决方案，推动可衡量的业务成果。",
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
      process: {
        title: "我们经过验证的流程",
        description: "提供结果的系统方法",
        steps: [
          {
            number: "01",
            title: "发现",
            description: "深入了解您的业务挑战、目标和技术环境",
          },
          {
            number: "02",
            title: "设计",
            description: "根据您的需求架构解决方案，考虑可扩展性",
          },
          {
            number: "03",
            title: "开发",
            description: "采用最佳实践、持续测试和敏捷方法进行构建",
          },
          {
            number: "04",
            title: "部署",
            description: "无缝实施，最小化对运营的干扰",
          },
          {
            number: "05",
            title: "优化",
            description: "通过监控、反馈和迭代持续改进",
          },
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
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.hero.description}</p>
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
                href={solution.href} // 传递新增的 href 属性
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

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.process.title}</h2>
            <p className="text-lg text-muted-foreground">{t.process.description}</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {t.process.steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                {index < t.process.steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
