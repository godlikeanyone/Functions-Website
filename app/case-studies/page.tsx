"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Clock, Users, Zap, Wind, ShieldCheck } from "lucide-react"
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
        description: "Evidence-based transformations that redefine building performance.",
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
          { icon: TrendingUp, value: "1st", label: "WELL V2 Platinum" },
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
          { icon: Zap, value: "25%", label: "Energy Saved" },
          { icon: Wind, value: "99%", label: "Pollutant Neutralized" },
          { icon: ShieldCheck, value: "7/24", label: "Real-time Integrity" },
        ],
        image: "/moncler-store.webp",
      },
      hinesCase: {
        category: "Mixed Used Building",
        title: "Optimizing Iconic Assets: AI-Driven Energy Efficiency for One Museum Place",
        solution: [
          "AI-based parameter optimization using neural network modeling of historical chiller plant data",
          "Data-driven 'Consulting Mode' providing real-time operational insights and expert recommendations",
          "Dynamic system adjustment of chilled water temperatures and load distribution to maintain peak efficiency",
        ],
        results: [
          { icon: Zap, value: "6%", label: "Energy Optimization" },
          { icon: ShieldCheck, value: "Zero", label: "Equip. Replacement" },
          { icon: Clock, value: "<3yr", label: "ROI Period" },
        ],
        image: "/hines-building.webp",
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
        title: "为汉高打造 WELL 空间：智慧空气，健康办公",
        solution: [
          "WELL 认证咨询与实施",
          "持续的室内环境监测",
          "定制化空气通风系统升级以提升舒适度与效率",
        ],
        results: [
          { icon: TrendingUp, value: "首个", label: "WELL V2 铂金级" },
          { icon: Users, value: "90%", label: "员工满意度" },
          { icon: Clock, value: "8%", label: "生产力提升" },
        ],
        image: "/henkel-building.webp",
      },
      monclerCase: {
        category: "零售业",
        title: "为盟可睐 (Moncler) 打造绿色奢华：清洁空气，认证性能",
        solution: [
          "LEED 认证咨询与现场测试调试",
          "专为零售空间定制的室内空气净化方案",
          "集成监测系统确保舒适度与可持续性",
        ],
        results: [
          { icon: Zap, value: "25%", label: "能源节省" },
          { icon: Wind, value: "99%", label: "污染物中和" },
          { icon: ShieldCheck, value: "7/24", label: "实时可靠性" },
        ],
        image: "/moncler-store.webp",
      },
      hinesCase: {
        category: "综合体建筑",
        title: "优化标志性资产：AI 驱动的上海博华广场 (One Museum Place) 能源效率提升",
        solution: [
          "基于历史冷机房数据的神经网络模型 AI 参数优化",
          "数据驱动的“咨询模式”提供实时运行洞察与专家建议",
          "动态调节冷冻水温度和负荷分配，确保系统持续处于峰值效率",
        ],
        results: [
          { icon: Zap, value: "6%", label: "能源优化" },
          { icon: ShieldCheck, value: "零", label: "设备更换成本" },
          { icon: Clock, value: "<3年", label: "投资回报期" },
        ],
        image: "/hines-building.webp",
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

      {/* Case Studies List */}
      <section className="py-24 md:py-32 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-24">
            {/* 这里的数组顺序决定了显示的顺序：Henkel -> Moncler -> Hines */}
            {[t.henkelCase, t.monclerCase, t.hinesCase].map((caseItem, index) => {
              // 自动判断：偶数索引（0, 2..）文案在左，奇数索引（1, 3..）文案在右
              const isReversed = index % 2 !== 0
              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    isReversed ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  {/* Text Content */}
                  <div>
                    <div className="text-xs text-primary font-semibold mb-4 uppercase tracking-wider">
                      {caseItem.category}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                      {caseItem.title}
                    </h2>
                    
                    <div className="mb-8">
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
                            <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.label}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
            
                  {/* Image with Hover zoom effect */}
                  <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-muted rounded-2xl overflow-hidden">
                    <img
                      src={caseItem.image}
                      alt={caseItem.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
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
