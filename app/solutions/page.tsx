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
          description: "Purification | Ventilation | Monitoring\n\nPowered by proprietary MESP+ technology, we deliver industrial-grade air purification and smart ventilation solutions. Combined with commercial environmental monitors, we build the physical foundation for a healthy, pathogen-free building environment.",
        },
        {
          icon: Monitor,
          title: "Digital Platform",
          tagline: "AI-Driven Smart Platform",
          href: "/solutions/platform",
          description: "Intelligence that Saves Energy\n\nBeyond simple visualization, our platform utilizes AI algorithms to dynamically adjust HVAC systems. It balances comfort with efficiency, delivering automated energy savings and reducing carbon footprint in real-time.",
        },
        {
          icon: Users,
          title: "Sustainability Services",
          tagline: "Strategic Advisory Services",
          href: "/solutions/consulting",
          description: "Measurable Impact, Long-term Value\n\nWe bridge the gap between technical upgrades and business goals. From Green Building certification to lifecycle asset planning, our experts ensure your investments translate into verified ESG performance and regulatory compliance.",
        },
      ],
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
          title: "硬件解决方案",
          tagline: "空气治理与环境感知基础设施",
          href: "/solutions/hardware",
          description: "净化 | 通风 | 监测\n\n依托自主研发的 MESP+ 技术，我们提供工业级空气净化与智能通风解决方案，并结合商用级环境监测设备，构建健康、低病原风险的建筑物理基础。",
        },
        {
          icon: Monitor,
          title: "数字化平台",
          tagline: "AI 驱动的智能平台",
          href: "/solutions/platform",
          description: "让智能真正实现节能\n\n不仅止于数据可视化，平台通过 AI 算法对 HVAC 系统进行动态调节，在保障舒适性的同时持续优化能效，实现自动化节能并实时降低碳排放。",
        },
        {
          icon: Users,
          title: "可持续发展服务",
          tagline: "战略级咨询与顾问服务",
          href: "/solutions/consulting",
          description: "可量化成果，长期价值\n\n我们连接技术升级与商业目标。从绿色建筑认证到资产全生命周期规划，专家团队确保您的投资转化为可验证的 ESG 绩效与合规成果。",
        },
      ],
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
    </div>
  )
}
