"use client"

import { Button } from "@/components/ui/button"
import {
  Leaf,
  Globe,
  BarChart3,
  HardHat,
  Recycle,
  Zap,
  ShieldCheck,
  FileCheck,
  Building2,
  Users,
  LineChart,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Trees,
} from "lucide-react"
import { useEffect, useState } from "react"

export default function SustainabilityPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "Sustainability Services",
        title: "Beyond Compliance. Toward Impact.",
        description:
          "At Functions, we transform sustainability from a corporate vision into a measurable asset. Bridging technical excellence with verified environmental impact.",
        intro: "Our multidisciplinary team of LEED/WELL APs, senior engineers, and ESG experts provides end-to-end consultancy throughout the building lifecycle—design, construction, and operation. We ensure your projects not only meet global standards but redefine performance."
      },
      sections: {
        certifications: {
          tag: "Recognition",
          title: "Global Green Building Certifications",
          focus: "Navigating the path to world-class recognition.",
          value: "Navigating the complexities of global certification to enhance asset recognition and occupant well-being.",
          services: [
            "Comprehensive management for LEED, WELL, BREEAM, and EDGE",
            "Performance verification and technical documentation",
            "Pre-assessment and gap analysis for new and existing assets",
          ]
        },
        esg: {
          tag: "Strategy",
          title: "ESG & Decarbonization Strategy",
          focus: "Translating complex ESG requirements into engineering roadmaps.",
          value: "Translating corporate ESG commitments into actionable engineering pathways and verified carbon neutrality.",
          features: [
            {
              icon: BarChart3,
              title: "Carbon Inventory",
              text: "Comprehensive footprint assessment measuring Scope 1, 2, and 3 emissions."
            },
            {
              icon: Trees,
              title: "Embodied Carbon",
              text: "Evaluating low-carbon material applications and lifecycle analysis."
            },
            {
              icon: Recycle,
              title: "Zero-Waste Pathways",
              text: "Specialized assessment and circular economy advisory for operations."
            }
          ]
        },
        energy: {
          tag: "Intelligence",
          title: "Energy Intelligence & Engineering",
          focus: "Human-centric design powered by data.",
          value: "Reducing operational expenditures while future-proofing your infrastructure against evolving regulations.",
          services: [
            { title: "Energy Audits", text: "Technical excellence in Level 1-3 audits to identify savings." },
            { title: "HVAC Retrofitting", text: "Engineering upgrades for legacy systems to modern efficiency." },
            { title: "Digital O&M", text: "Real-time solutions for persistent building performance." }
          ]
        },
        advantage: {
          title: "The Functions Advantage",
          items: [
            {
              icon: Building2,
              title: "Lifecycle Expertise",
              text: "We don't just consult; we understand the engineering behind the hardware."
            },
            {
              icon: GraduationCap,
              title: "Technical Authority",
              text: "Senior LEED/WELL APs and BREEAM Assessors with 15+ years of experience."
            },
            {
              icon: ShieldCheck,
              title: "Verified Outcomes",
              text: "Moving beyond 'paper compliance' to deliver real energy savings."
            }
          ]
        },
        cta: {
          title: "Ready to Elevate Your Asset Performance?",
          primary: "Book an Expert Consultation",
          secondary: "View Case Studies"
        }
      }
    },
    zh: {
      hero: {
        eyebrow: "可持续发展服务",
        title: "超越合规，铸就影响",
        description:
          "在 Functions，我们将可持续发展从企业愿景转化为可衡量的资产。将卓越的技术与可验证的环境影响紧密结合。",
        intro: "我们的多学科团队由 LEED/WELL AP、高级工程师和 ESG 专家组成，在建筑的全生命周期（设计、施工和运营）提供端到端咨询。我们确保您的项目不仅符合全球标准，更能重新定义建筑性能。"
      },
      sections: {
        certifications: {
          tag: "行业认可",
          title: "全球绿色建筑认证",
          focus: "迈向世界级认可之路。",
          value: "通过应对复杂的全球认证体系，提升资产认可度并改善租户福祉。",
          services: [
            "LEED, WELL, BREEAM 及 EDGE 全流程管理",
            "性能验证与技术文档编制",
            "新旧资产的预评估与差距分析",
          ]
        },
        esg: {
          tag: "战略咨询",
          title: "ESG 与脱碳战略",
          focus: "将复杂的 ESG 要求转化为工程路线图。",
          value: "将企业的 ESG 承诺转化为可落地的工程路径，并实现可验证的碳中和。",
          features: [
            {
              icon: BarChart3,
              title: "碳足迹盘查",
              text: "测量范围 1、2 和 3 排放量的全面足迹评估。"
            },
            {
              icon: Trees,
              title: "隐含碳分析",
              text: "评估低碳材料应用及全生命周期分析。"
            },
            {
              icon: Recycle,
              title: "零废弃路径",
              text: "针对运营阶段的专项评估和循环经济咨询。"
            }
          ]
        },
        energy: {
          tag: "智能工程",
          title: "能源智能与工程技术",
          focus: "以数据为驱动的人本设计。",
          value: "在降低运营开支的同时，使您的基础设施能够应对不断变化的法规挑战。",
          services: [
            { title: "能源审计", text: "提供 1-3 级专业审计，精准锁定节能空间。" },
            { title: "HVAC 改造", text: "针对旧有系统的工程升级，实现现代化能效。" },
            { title: "数字化运维", text: "提供持续提升建筑性能的数字化运营解决方案。" }
          ]
        },
        advantage: {
          title: "Functions 内核优势",
          items: [
            {
              icon: Building2,
              title: "全生命周期专家",
              text: "我们不只是咨询顾问；我们深谙硬件背后的工程逻辑。"
            },
            {
              icon: GraduationCap,
              title: "技术权威",
              text: "由拥有 15 年以上经验的高级 LEED/WELL AP 和 BREEAM 评估师组成。"
            },
            {
              icon: ShieldCheck,
              title: "可验证成果",
              text: "超越“纸面合规”，交付真实的能源节省和优质室内环境。"
            }
          ]
        },
        cta: {
          title: "准备好提升您的资产表现了吗？",
          primary: "预约专家咨询",
          secondary: "查看案例研究"
        }
      }
    },
  }

  const t = content[locale as keyof typeof content] || content.en

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 bg-green-500/5 border border-green-500/10 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-green-600 dark:text-green-400 tracking-wide">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl text-foreground font-medium mb-6 max-w-2xl mx-auto">
            {t.hero.description}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.hero.intro}
          </p>
        </div>
      </section>

      <div className="flex flex-col gap-24 md:gap-32 pb-32">
        {/* SECTION 1: Certifications (Focus on recognition) */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">{t.sections.certifications.tag}</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.sections.certifications.title}</h2>
                <p className="text-xl font-medium mb-4 text-foreground/80">{t.sections.certifications.focus}</p>
                <p className="text-muted-foreground mb-8 text-lg">{t.sections.certifications.value}</p>
                
                <ul className="space-y-4 mb-10">
                  {t.sections.certifications.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <FileCheck className="h-6 w-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 lg:order-2 relative aspect-video lg:aspect-square bg-muted rounded-3xl overflow-hidden shadow-2xl border">
                 <img src="/global-green-building.webp" alt="Certifications" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ESG Strategy (Bento Grid Style) */}
        <section className="bg-card py-24 border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
             <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">{t.sections.esg.tag}</div>
             <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.sections.esg.title}</h2>
             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.sections.esg.value}</p>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {t.sections.esg.features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="p-8 rounded-3xl bg-background border border-border/60 hover:shadow-xl transition-all">
                    <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: Energy Engineering */}
        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-5">
                   <div className="text-xs font-bold text-primary mb-4 uppercase tracking-widest">{t.sections.energy.tag}</div>
                   <h2 className="text-4xl md:text-5xl font-bold mb-6">{t.sections.energy.title}</h2>
                   <p className="text-lg text-muted-foreground mb-8">{t.sections.energy.value}</p>
                   <div className="space-y-6">
                     {t.sections.energy.services.map((s, i) => (
                       <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors">
                          <CheckCircle2 className="h-6 w-6 text-primary mt-1" />
                          <div>
                             <h4 className="font-bold text-lg">{s.title}</h4>
                             <p className="text-muted-foreground">{s.text}</p>
                          </div>
                       </div>
                     ))}
                   </div>
                </div>
                <div className="lg:col-span-7">
                    <div className="relative w-full aspect-[2816/1536] rounded-3xl bg-muted overflow-hidden group shadow-xl">
                       <img 
                         src="/energy-audit.webp"
                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                         alt="Energy Audit" 
                       />
                    </div>
                </div>
             </div>
          </div>
        </section>

        {/* Advantage Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">{t.sections.advantage.title}</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {t.sections.advantage.items.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="mb-6 p-5 rounded-full bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">{t.sections.cta.title}</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6">
                {t.sections.cta.primary}
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground border-primary-foreground">
                {t.sections.cta.secondary}
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
