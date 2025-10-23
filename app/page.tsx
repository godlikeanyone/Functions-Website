"use client"

import { Button } from "@/components/ui/button"
import { StatsBand } from "@/components/stats-band"
import { LogoStrip } from "@/components/logo-strip"
import { CaseStudyCard } from "@/components/case-study-card"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    // Get locale from parent layout if needed
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Engineering Excellence",
        title: "Building the future of enterprise technology",
        description:
          "We deliver cutting-edge engineering solutions that transform complex challenges into competitive advantages for global enterprises.",
        cta1: "Get Started",
        cta2: "View Solutions",
      },
      problem: {
        title: "The challenge facing modern enterprises",
        description:
          "Organizations struggle with legacy systems, fragmented technology stacks, and the complexity of digital transformation. Traditional approaches can't keep pace with innovation.",
        points: [
          "Legacy infrastructure holding back innovation",
          "Disconnected systems creating inefficiencies",
          "Lack of scalable, future-proof solutions",
        ],
      },
      solution: {
        title: "Engineered for excellence",
        description:
          "Our integrated approach combines deep technical expertise with strategic thinking to deliver solutions that scale with your ambitions.",
        features: [
          {
            icon: Zap,
            title: "Rapid Implementation",
            description: "Deploy enterprise-grade solutions in weeks, not months",
          },
          {
            icon: Shield,
            title: "Security First",
            description: "Built-in compliance and security at every layer",
          },
          {
            icon: Cpu,
            title: "Future-Ready",
            description: "Scalable architecture that grows with your business",
          },
        ],
      },
      stats: [
        { value: "500+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "50+", label: "Enterprise Clients" },
        { value: "24/7", label: "Global Support" },
      ],
      caseStudies: {
        title: "Proven results across industries",
        description: "See how we've helped leading organizations transform their operations",
        studies: [
          {
            title: "Global Manufacturing Digital Transformation",
            description: "Reduced operational costs by 40% through intelligent automation and IoT integration",
            category: "Manufacturing",
            image: "/modern-factory-automation.png",
          },
          {
            title: "Financial Services Cloud Migration",
            description: "Migrated legacy banking systems to cloud infrastructure with zero downtime",
            category: "Finance",
            image: "/financial-technology-dashboard.png",
          },
          {
            title: "Healthcare Data Platform",
            description: "Built HIPAA-compliant data platform serving 2M+ patients across 50 hospitals",
            category: "Healthcare",
            image: "/medical-technology-interface.jpg",
          },
        ],
      },
      cta: {
        title: "Ready to transform your enterprise?",
        description: "Let's discuss how Functions Ltd can accelerate your digital journey",
        button: "Schedule a Consultation",
      },
    },
    zh: {
      hero: {
        eyebrow: "工程卓越",
        title: "构建企业技术的未来",
        description: "我们提供尖端的工程解决方案，将复杂挑战转化为全球企业的竞争优势。",
        cta1: "开始使用",
        cta2: "查看解决方案",
      },
      problem: {
        title: "现代企业面临的挑战",
        description: "组织面临遗留系统、分散的技术堆栈以及数字化转型的复杂性。传统方法无法跟上创新的步伐。",
        points: ["遗留基础设施阻碍创新", "断开的系统造成低效", "缺乏可扩展的未来解决方案"],
      },
      solution: {
        title: "为卓越而设计",
        description: "我们的综合方法将深厚的技术专长与战略思维相结合，提供与您的雄心相匹配的解决方案。",
        features: [
          {
            icon: Zap,
            title: "快速实施",
            description: "在数周而非数月内部署企业级解决方案",
          },
          {
            icon: Shield,
            title: "安全优先",
            description: "每一层都内置合规性和安全性",
          },
          {
            icon: Cpu,
            title: "面向未来",
            description: "随业务增长的可扩展架构",
          },
        ],
      },
      stats: [
        { value: "500+", label: "已交付项目" },
        { value: "98%", label: "客户满意度" },
        { value: "50+", label: "企业客户" },
        { value: "24/7", label: "全球支持" },
      ],
      caseStudies: {
        title: "跨行业的成功案例",
        description: "了解我们如何帮助领先组织转型运营",
        studies: [
          {
            title: "全球制造业数字化转型",
            description: "通过智能自动化和物联网集成，将运营成本降低40%",
            category: "制造业",
            image: "/modern-factory-automation.png",
          },
          {
            title: "金融服务云迁移",
            description: "将传统银行系统迁移到云基础设施，实现零停机",
            category: "金融",
            image: "/financial-technology-dashboard.png",
          },
          {
            title: "医疗数据平台",
            description: "构建符合HIPAA标准的数据平台，为50家医院的200万+患者提供服务",
            category: "医疗保健",
            image: "/medical-technology-interface.jpg",
          },
        ],
      },
      cta: {
        title: "准备好转型您的企业了吗？",
        description: "让我们讨论Functions Ltd如何加速您的数字化之旅",
        button: "预约咨询",
      },
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in">
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
              <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">{t.hero.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance">{t.hero.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base">
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent">
                {t.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Strip */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LogoStrip title={locale === "zh" ? "受到行业领导者的信赖" : "Trusted by industry leaders"} />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.problem.title}</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{t.problem.description}</p>
              <ul className="space-y-4">
                {t.problem.points.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 text-destructive">
                      <div className="w-5 h-5 rounded-full border-2 border-destructive flex items-center justify-center">
                        <div className="w-2 h-2 bg-destructive rounded-full" />
                      </div>
                    </div>
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative aspect-square bg-muted rounded-2xl overflow-hidden">
              <img
                src="/complex-enterprise-technology-infrastructure.jpg"
                alt="Enterprise challenges"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.solution.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">{t.solution.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.solution.features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-background border border-border rounded-xl p-8 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-32 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsBand stats={t.stats} />
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.caseStudies.title}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-balance">{t.caseStudies.description}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.caseStudies.studies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                description={study.description}
                category={study.category}
                image={study.image}
                href="/case-studies"
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
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
