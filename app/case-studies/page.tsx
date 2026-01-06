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
        title: "Impact in Action: Proven Success Stories",
        description:
          "Evidence-based transformations that redefine building performance.",
      },
      henkelCase: {
        category: "Manufacturing",
        title: "Building WELL for Henkel: Smart Air, Healthy People",
        solution: [
          "WELL certification advisory and implementation",
          "Continuous indoor environment monitoring",
          "Tailored air ventilation upgrade improving comfort and efficiency",
        ],
        results: [
          { icon: TrendingUp, value: "1st", label: "WELL V2 Platium" },
          { icon: Users, value: "90%", label: "Staff Satisfaction" },
          { icon: Clock, value: "8%", label: "Productivity Enhancement" },
        ],
        image: "/henkel-building.webp",
      },
      monclerCase: {
        category: "Retail",
        title: "Building Green Luxury for Moncler: Clean Air, Certified Performance",
        solution: [
          "LEED certification consulting and on-site testing & commissioning",
          "Tailored indoor air purification solution for retail space",
          "Integrated monitoring system ensuring comfort and sustainability",
        ],
        results: [
          { icon: TrendingUp, value: "40%", label: "Cost Reduction" },
          { icon: Clock, value: "60%", label: "Faster Production" },
          { icon: Users, value: "2M+", label: "Hours Saved Annually" },
        ],
        image: "/moncler-store.webp",
      },
    },
    zh: {
      hero: {
        eyebrow: "案例研究",
        title: "真实合作伙伴关系的真实成果",
        description: "探索我们如何帮助各行业的组织转型运营并取得可衡量的成功。",
      },
      henkelCase: {
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
        image: "/henkel-office.webp",
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

      {/* Case Study */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-24">
            {[t.henkelCase, t.monclerCase].map((caseItem, index) => {
              const isReversed = index === 1 // Moncler 左图右文
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Left Side (text) */}
                  <div>
                    <div className="text-xs text-primary font-semibold mb-4 uppercase tracking-wider">
                      {caseItem.category}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                      {caseItem.title}
                    </h2>
            
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        {locale === "zh" ? "解决方案" : "Solution"}
                      </h3>
                      <ul className="list-disc list-inside text-muted-foreground leading-relaxed space-y-2">
                        {caseItem.solution.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
            
                    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border">
                      {caseItem.results.map((result, idx) => {
                        const Icon = result.icon
                        return (
                          <div key={idx}>
                            <Icon className="h-5 w-5 text-primary mb-2" />
                            <div className="text-3xl font-bold text-primary mb-1">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
            
                  {/* Right Side (image) */}
                  <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-muted rounded-2xl overflow-hidden">
                    <img
                      src={caseItem.image || "/placeholder.svg"}
                      alt={caseItem.title}
                      className="w-full h-full object-cover"
                    />
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
