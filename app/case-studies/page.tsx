"use client"

import { CaseStudyCard } from "@/components/case-study-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function CaseStudiesPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Case Studies",
        title: "Real results from real partnerships",
        description:
          "Explore how we've helped organizations across industries transform their operations and achieve measurable success.",
      },
      featured: {
        category: "Manufacturing",
        title: "Building WELL for Henkel: Smart Air, Healthy People",
        solution: [
          "WELL certification advisory and implementation",
          "Continuous indoor environment monitoring",
          "Tailored air ventilation upgrade improving comfort and efficiency",
        ],
        results: [
          { icon: TrendingUp, value: "40%", label: "Cost Reduction" },
          { icon: Clock, value: "60%", label: "Faster Production" },
          { icon: Users, value: "2M+", label: "Hours Saved Annually" },
        ],
        image: "/modern-factory-automation.png",
      },
      studies: [
        {
          title: "Financial Services Cloud Migration",
          description:
            "Migrated a legacy banking system to cloud infrastructure with zero downtime, enabling 10x faster transaction processing.",
          category: "Finance",
          image: "/financial-technology-dashboard.png",
          stats: { metric1: "Zero downtime", metric2: "10x faster", metric3: "$5M saved" },
        },
        {
          title: "Healthcare Data Platform",
          description:
            "Built HIPAA-compliant data platform serving 2M+ patients across 50 hospitals with real-time analytics.",
          category: "Healthcare",
          image: "/medical-technology-interface.jpg",
          stats: { metric1: "2M+ patients", metric2: "50 hospitals", metric3: "99.99% uptime" },
        },
        {
          title: "Retail AI Personalization Engine",
          description:
            "Deployed machine learning platform that increased conversion rates by 35% through personalized recommendations.",
          category: "Retail",
          image: "/retail-ai-personalization.jpg",
          stats: { metric1: "35% conversion", metric2: "50M users", metric3: "Real-time" },
        },
        {
          title: "Logistics Optimization Platform",
          description:
            "Created route optimization system reducing delivery times by 25% and fuel costs by 30% for global logistics provider.",
          category: "Logistics",
          image: "/logistics-optimization-dashboard.jpg",
          stats: { metric1: "25% faster", metric2: "30% cost cut", metric3: "Global scale" },
        },
        {
          title: "Energy Grid Modernization",
          description:
            "Implemented smart grid technology enabling real-time monitoring and 40% reduction in energy waste.",
          category: "Energy",
          image: "/smart-energy-grid.jpg",
          stats: { metric1: "40% less waste", metric2: "Real-time", metric3: "5M homes" },
        },
        {
          title: "EdTech Learning Platform",
          description:
            "Built scalable learning management system serving 1M+ students with AI-powered adaptive learning.",
          category: "Education",
          image: "/educational-technology-platform.jpg",
          stats: { metric1: "1M+ students", metric2: "AI-powered", metric3: "95% satisfaction" },
        },
      ],
      cta: {
        title: "Ready to write your success story?",
        description: "Let's discuss how we can help you achieve similar results",
        button: "Start Your Project",
      },
    },
    zh: {
      hero: {
        eyebrow: "案例研究",
        title: "真实合作伙伴关系的真实成果",
        description: "探索我们如何帮助各行业的组织转型运营并取得可衡量的成功。",
      },
      featured: {
        category: "制造业",
        title: "全球制造业数字化转型",
        solution: [
          "WELL认证咨询与实施",
          "持续的室内环境监测",
          "定制化空气通风系统升级以提升舒适度与效率",
        ],
        results: [
          { icon: TrendingUp, value: "40%", label: "成本降低" },
          { icon: Clock, value: "60%", label: "生产加速" },
          { icon: Users, value: "200万+", label: "每年节省工时" },
        ],
        image: "/modern-factory-automation.png",
      },
      studies: [
        {
          title: "金融服务云迁移",
          description: "将传统银行系统迁移到云基础设施，实现零停机，交易处理速度提高10倍。",
          category: "金融",
          image: "/financial-technology-dashboard.png",
          stats: { metric1: "零停机", metric2: "快10倍", metric3: "节省500万美元" },
        },
        {
          title: "医疗数据平台",
          description: "构建符合HIPAA标准的数据平台，为50家医院的200万+患者提供实时分析服务。",
          category: "医疗保健",
          image: "/medical-technology-interface.jpg",
          stats: { metric1: "200万+患者", metric2: "50家医院", metric3: "99.99%正常运行时间" },
        },
        {
          title: "零售AI个性化引擎",
          description: "部署机器学习平台，通过个性化推荐将转化率提高35%。",
          category: "零售",
          image: "/retail-ai-personalization.jpg",
          stats: { metric1: "35%转化", metric2: "5000万用户", metric3: "实时" },
        },
        {
          title: "物流优化平台",
          description: "为全球物流提供商创建路线优化系统，将交付时间缩短25%，燃料成本降低30%。",
          category: "物流",
          image: "/logistics-optimization-dashboard.jpg",
          stats: { metric1: "快25%", metric2: "成本降低30%", metric3: "全球规模" },
        },
        {
          title: "能源电网现代化",
          description: "实施智能电网技术，实现实时监控，能源浪费减少40%。",
          category: "能源",
          image: "/smart-energy-grid.jpg",
          stats: { metric1: "浪费减少40%", metric2: "实时", metric3: "500万家庭" },
        },
        {
          title: "教育科技学习平台",
          description: "构建可扩展的学习管理系统，为100万+学生提供AI驱动的自适应学习。",
          category: "教育",
          image: "/educational-technology-platform.jpg",
          stats: { metric1: "100万+学生", metric2: "AI驱动", metric3: "95%满意度" },
        },
      ],
      cta: {
        title: "准备好书写您的成功故事了吗？",
        description: "让我们讨论如何帮助您取得类似的成果",
        button: "开始您的项目",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.hero.description}</p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs text-primary font-semibold mb-4 uppercase tracking-wider">
                {t.featured.category}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">{t.featured.title}</h2>
                <div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    {locale === "zh" ? "解决方案" : "Solution"}
                  </h3>
                  <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                    {Array.isArray(t.featured.solution)
                      ? t.featured.solution.map((point, i) => <li key={i}>{point}</li>)
                      : <li>{t.featured.solution}</li>}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                {t.featured.results.map((result, index) => {
                  const Icon = result.icon
                  return (
                    <div key={index}>
                      <Icon className="h-5 w-5 text-primary mb-2" />
                      <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                      <div className="text-xs text-muted-foreground">{result.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-muted rounded-2xl overflow-hidden">
              <img
                src={t.featured.image || "/placeholder.svg"}
                alt={t.featured.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.studies.map((study, index) => (
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
