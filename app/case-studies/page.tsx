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
        image: "/henkel-office.webp",
      },
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
        image: "/henkel-office.webp",
      },
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
