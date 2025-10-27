"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { StatsBand } from "@/components/stats-band"
import { LogoStrip } from "@/components/logo-strip"
import { CaseStudyCard } from "@/components/case-study-card"
import { ArrowRight, Zap, Shield, Cpu } from "lucide-react"
import { useEffect, useState } from "react"

export default function Home() {
  const [locale, setLocale] = useState("en")
  const [active, setActive] = useState<number | null>(null)

  useEffect(() => {
    // Get locale from parent layout if needed
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Engineering Sustainability",
        title: [
                  "Smarter buildings.",
                  "Healthier lives.",
                  "Sustainable future."
                ],
        description:
          "We help our clients balance economic efficiency, environmental responsibility, and human wellbeing — creating buildings that perform today and stand up to tomorrow.",
        cta1: "Get Started",
        cta2: "View Solutions",
      },
      problem: {
        title: "The challenge facing modern enterprises",
        panels: [
          {
            title: "Integration Complexity",
            detail:
              "Enterprises face challenges integrating legacy systems with modern cloud infrastructure.",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "left",
          },
          {
            title: "Security & Compliance",
            detail:
              "Maintaining security standards across multiple services and regions is costly.",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "center",
          },
          {
            title: "Scalability Bottlenecks",
            detail:
              "Scaling across distributed systems requires both technical and architectural foresight.",
            bgImage: "/complex-enterprise-technology-infrastructure.jpg",
            bgPosition: "right",
          },
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
        title: [
                  "更智能的建筑。",
                  "更健康的生活。",
                  "更可持续的未来。"
                ],
        description:
          "我们帮助客户在经济效率、环境责任和人类福祉之间取得平衡——打造既能满足当今需求又能经受住未来考验的高性能建筑。",
        description: "我们帮助客户在经济效率、环境责任和人类福祉之间取得平衡——打造既能满足当今需求又能经受住未来考验的高性能建筑。",
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
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-home.webp')" }}
      >
        {/* Half-transparent overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
          <div className="animate-fade-in">
            {/* Subtitle */}
            <div className="inline-block mb-4 px-4 py-1.5 bg-primary/20 border border-primary/30 rounded-full">
              <span className="text-sm font-medium text-white">{t.hero.eyebrow}</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-snug space-y-2">
              {Array.isArray(t.hero.title)
                ? t.hero.title.map((line, i) => <div key={i}>{line}</div>)
                : t.hero.title}
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">{t.hero.description}</p>

            {/* Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base text-white bg-primary hover:bg-primary/90">
                {t.hero.cta1}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Link href="/solutions">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base border-white text-white hover:bg-white/10 cursor-pointer"
                >
                  {t.hero.cta2}
                </Button>
              </Link>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance">
            {t.problem.title}
          </h2>
      
          <div className="flex flex-col md:flex-row gap-6 h-[480px]">
            {t.problem.panels.map((panel, index) => (
              <motion.div
                key={index}
                className="relative rounded-2xl overflow-hidden bg-gray-200 cursor-pointer flex flex-col justify-end text-white"
                style={{
                  backgroundImage: `url(${panel.bgImage})`,
                  backgroundSize: "300% 100%",
                  backgroundPosition: panel.bgPosition,
                }}
                onMouseEnter={() => setActive(index)}
                onMouseLeave={() => setActive(null)}
                animate={{
                  flex: active === index ? 1.8 : 1,
                  transition: { duration: 0.6, type: "spring" },
                }}
              >
                {/* 半透明遮罩 */}
                <div className="absolute inset-0 bg-black/40" />
      
                {/* 文本内容 */}
                <div className="relative p-6 md:p-8 z-10">
                  <h3 className="text-2xl font-semibold mb-2">{panel.title}</h3>
                  {active === index && (
                    <motion.p
                      className="text-sm md:text-base text-gray-200 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {panel.detail}
                    </motion.p>
                  )}
                </div>
              </motion.div>
            ))}
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
