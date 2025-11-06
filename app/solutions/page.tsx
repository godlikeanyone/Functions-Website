"use client"

import { Button } from "@/components/ui/button"
import { SolutionCard } from "@/components/solution-card"
import { ComparisonTable } from "@/components/comparison-table"
import { Cloud, Database, Lock, Workflow, Code, BarChart, ArrowRight } from "lucide-react"
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
          "Our solutions combine advanced air purification, smart ventilation, and real-time environmental monitoring to create healthier, more efficient, and more sustainable indoor environments. Designed for modern buildings, each system works together to enhance comfort, wellbeing, and performance.",
      },
      solutions: [
        {
          icon: Cloud,
          title: "MESP Unit",
          description:
            "Advanced micro-electrostatic air purification technology capturing fine particles, dust, and pathogens with high efficiency and low resistance.\nLong-lasting, easy to clean and energy-saving — delivering clean, healthy air for sustainable buildings.",
        },
        {
          icon: Database,
          title: "Ventilation Unit",
          description:
            "Smart fresh-air systems designed for comfort and wellbeing.\nContinuously renews indoor air while optimizing energy through intelligent control and heat recovery, ensuring a balanced, healthy environment year-round.",
        },
        {
          icon: Lock,
          title: "Environmental Monitor",
          description: "Real-time monitoring of PM2.5, PM10, CO₂, TVOC, Nox, temperature, humidity, light, noise, air pressure, ozone, NO2, CO and others.\nCloud-connected and data-driven, providing actionable insights for healthier spaces and seamless integration with AI energy optimization platforms.",
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
      cta: {
        title: "Let's build your solution",
        description: "Schedule a consultation to discuss your specific needs",
        button: "Contact Our Team",
      },
    },
    zh: {
      hero: {
        eyebrow: "我们的解决方案",
        title: "针对每个挑战的全面技术解决方案",
        description: "从云基础设施到AI驱动的分析，我们提供端到端的解决方案，推动可衡量的业务成果。",
      },
      solutions: [
        {
          icon: Cloud,
          title: "云基础设施",
          description: "通过为企业性能设计的可扩展、安全的云解决方案实现基础设施现代化。",
        },
        {
          icon: Database,
          title: "数据工程",
          description: "通过强大的数据管道和分析平台将原始数据转化为可操作的见解。",
        },
        {
          icon: Lock,
          title: "安全与合规",
          description: "通过企业级安全框架和合规自动化保护您的资产。",
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
      cta: {
        title: "让我们构建您的解决方案",
        description: "安排咨询以讨论您的具体需求",
        button: "联系我们的团队",
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

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90 text-balance">{t.cta.description}</p>
          <Button size="lg" variant="secondary" className="text-base">
            {t.cta.button}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  )
}
