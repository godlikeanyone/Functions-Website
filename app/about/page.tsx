"use client"

import { Button } from "@/components/ui/button"
import { StatsBand } from "@/components/stats-band"
import { Target, Users, Globe, Award, Wind, RefreshCw, AirVent, Fan, Activity, Zap, Settings, Leaf, Recycle } from "lucide-react"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AboutPage() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    const htmlLang = document.documentElement.lang
    if (htmlLang) setLocale(htmlLang)
  }, [])

  const content = {
    en: {
      hero: {
        eyebrow: "About Functions",
        title: "Engineering a Smarter, Healthier World",
        description:
          "We don’t just consult; we build the intelligence that makes infrastructure sustainable.",
      },
      philosophy: {
        title: "Our Philosophy",
        items: [
          {
            title: "Infrastructure",
            desc: "High-precision hardware to secure healthy indoor environments.",
            icon: Wind, // Representing air/environment control
            tag: "01"
          },
          {
            title: "Intelligence",
            desc: "AI-driven insights that optimize energy usage and operational efficiency.",
            icon: Zap, // Representing energy/smart logic
            tag: "02"
          },
          {
            title: "Impact",
            desc: "Sustainability strategies that future-proof global assets and ensure human wellness.",
            icon: Globe, // Representing global impact/asset protection
            tag: "03"
          }
        ]
      },
      values: [
        {
          icon: Target,
          title: "Excellence",
          description: "We pursue the highest standards in everything we build, never settling for good enough.",
        },
        {
          icon: Users,
          title: "Partnership",
          description: "Your success is our success. We work as an extension of your team, not just a vendor.",
        },
        {
          icon: Globe,
          title: "Innovation",
          description: "We stay ahead of technology trends to deliver future-proof solutions that scale.",
        },
        {
          icon: Award,
          title: "Integrity",
          description: "Transparency, honesty, and ethical practices guide every decision we make.",
        },
      ],
      whywork: {
        title: "Why Work With Functions",
        items: [
          {
            title: "Engineering-First Consultancy",
            text: "Unlike traditional consultancies, we are rooted in technical engineering. With over 15 years of hands-on experience in building systems and sustainable design, we provide solutions that are technically viable, not just theoretical.",
          },
          {
            title: "Full-Lifecycle Partnership",
            text: "We offer professional guidance through the entire lifecycle of a project—from design and construction to long-term operation—ensuring persistent performance and asset resilience.",
          },
          {
            title: "Data-Driven Impact",
            text: "Our approach integrates AI-driven insights with hardware infrastructure to deliver measurable outcomes, such as significant energy savings and verified indoor environmental quality.",
          },
        ],
      },
      radialSection: {
        title: "Functions",
        items: [
          { text: "Air Filtration", icon: Wind },
          { text: "ERVs", icon: RefreshCw },
          { text: "Ventilation", icon: AirVent },
          { text: "Fan Filter Units", icon: Fan },
          { text: "Sensors & Controls", icon: Activity },
          { text: "Energy Optimization", icon: Zap },
          { text: "HVAC Optimization", icon: Settings },
          { text: "Green Building", icon: Leaf },
          { text: "Waste Management", icon: Recycle },
        ]
      },
      innovationApproach: {
        title:
          "Delivering an innovative approach that proves value across portfolios through measurable performance and meaningful outcomes.",
        cards: [
          {
            title: "Deliver Peace of Mind",
            description:
              "Guarantee healthier indoor environments and compliance today, backed by certifications and performance data you can trust.",
          },
          {
            title: "Reimagine Buildings",
            description:
              "Transform spaces into hubs of wellbeing, sustainability, and occupant experience, unlocking greater value for owners and users alike.",
          },
          {
            title: "Future Proof Projects",
            description:
              "Deploy versatile, tech-driven solutions that sustain health, productivity, and ESG performance for years to come.",
          },
        ],
      },
      cta: {
        title: "Functions delivers projects that perform",
        subtitle:
          "For stakeholders this means realized value and ROI.\nFor end users the result are healthier indoor environments which are proven to be happier and more productive places of work and leisure.",
        contact: "Connect at inquiry@functions.ltd",
      },
    },
    zh: {
      hero: {
        eyebrow: "关于Functions",
        title: "一次一个解决方案，工程未来",
        description: "Functions Ltd成立于2015年，从一个小型工程师团队发展成为财富500强公司信赖的全球技术合作伙伴。",
      },
      philosophy: {
        title: "我们的经营哲学",
        items: [
          {
            title: "基础设施 (Infrastructure)",
            desc: "高精度硬件，确保健康的室内环境。",
            icon: Wind,
            tag: "01"
          },
          {
            title: "智能 (Intelligence)",
            desc: "AI 驱动的见解，优化能源使用和运营效率。",
            icon: Zap,
            tag: "02"
          },
          {
            title: "影响力 (Impact)",
            desc: "可持续发展战略，助力全球资产面向未来并确保人类健康。",
            icon: Globe,
            tag: "03"
          }
        ]
      },
      values: [
        {
          icon: Target,
          title: "卓越",
          description: "我们在构建的一切中追求最高标准，永不满足于足够好。",
        },
        {
          icon: Users,
          title: "合作伙伴关系",
          description: "您的成功就是我们的成功。我们作为您团队的延伸工作，而不仅仅是供应商。",
        },
        {
          icon: Globe,
          title: "创新",
          description: "我们领先于技术趋势，提供可扩展的面向未来的解决方案。",
        },
        {
          icon: Award,
          title: "诚信",
          description: "透明、诚实和道德实践指导我们做出的每一个决定。",
        },
      ],
      whywork: {
        title: "为什么选择我们",
        items: [
          {
            title: "经过验证的技术",
            text: "受到全球商业、医疗、教育、酒店及零售行业品牌的信赖。",
          },
          {
            title: "易于实施的解决方案",
            text: "经验证可提升健康与福祉、降低成本，且易于大规模部署。",
          },
          {
            title: "以结果为导向",
            text: "在空气质量、能源使用和认证成果方面实现可衡量的改进。",
          },
          {
            title: "定制化产品开发与供应",
            text: "我们的过滤器、模块和系统可根据项目需求进行个性化定制。",
          },
        ],
      },
      cta: {
        title: "加入我们的使命",
        description: "我们一直在寻找有才华的工程师和创新者",
        button: "查看职位空缺",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
            <span className="text-sm font-medium text-primary">{t.hero.eyebrow}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">{t.hero.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">{t.hero.description}</p>
        </div>
      </section>

      {/* Philosophy Section - Replaces Mission Section */}
      <section className="py-24 md:py-32 bg-card/30 backdrop-blur-sm relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">{t.philosophy.title}</h2>
            <div className="mt-4 h-1.5 w-24 bg-primary mx-auto rounded-full" />
          </motion.div>
      
          <div className="grid md:grid-cols-3 gap-12 relative">
            {t.philosophy.items.map((item: any, index: number) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2, ease: [0.21, 0.45, 0.32, 0.9] }}
                  className="group relative"
                >
                  {/* Background Numbering for "Advanced" Look */}
                  <span className="absolute -top-10 -left-4 text-8xl font-black text-primary/[0.03] select-none group-hover:text-primary/[0.06] transition-colors duration-500">
                    {item.tag}
                  </span>
      
                  <div className="relative p-8 rounded-2xl border border-border bg-card/40 hover:bg-card/80 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2">
                    <div className="mb-6 flex items-center justify-between">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500">
                        <Icon className="w-7 h-7" />
                      </div>
                      <div className="h-px flex-grow bg-border mx-4 opacity-50" />
                    </div>
      
                    <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed text-balance">
                      {item.desc}
                    </p>
      
                    {/* Bottom accent line */}
                    <div className="mt-8 h-1 w-0 bg-primary group-hover:w-full transition-all duration-700 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Work Section */}
      <section className="py-24 md:py-32 bg-background border-y border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-16"
          >
            {t.whywork.title}
          </motion.h2>
      
          {/* 修改点：将 lg:grid-cols-4 改为 lg:grid-cols-3，并添加 max-w-6xl mx-auto 确保比例协调 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            {t.whywork.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-card/50 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
              >
                <div className="h-1.5 w-12 bg-gradient-to-r from-primary/80 to-primary/40 rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold mb-4 leading-snug">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Functions Radial Section */}
      <section className="relative py-32 bg-background border-t border-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-[600px] md:h-[800px]">

            <div className="relative flex items-center justify-center">
              
              {/* Central logo */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-32 h-32 md:w-44 md:h-44 rounded-full bg-primary flex items-center justify-center z-50 shadow-2xl border-4 border-background"
              >
                <span className="font-bold text-primary-foreground text-xl md:text-2xl tracking-tighter">
                  {t.radialSection.title}
                </span>
              </motion.div>
      
              {/* Surrounding nodes */}
              {t.radialSection.items.map((item: any, i: number) => {
                const count = t.radialSection.items.length;
                // Angle
                const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
                
                // Radius
                const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 140 : 280;
                
                // X-axis and Y-axis
                const targetX = Math.cos(angle) * radius;
                const targetY = Math.sin(angle) * radius;
      
                const Icon = item.icon;
      
                return (
                  <div key={i} className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Connecting lines */}
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      whileInView={{ width: radius - 40, opacity: 0.2 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.8 }}
                      className="absolute h-px bg-primary origin-left"
                      style={{ 
                        transform: `rotate(${angle}rad) translateX(20px)`,
                      }}
                    />
      
                    {/* Node */}
                    <motion.div
                      initial={{ opacity: 0, x: 0, y: 0 }}
                      whileInView={{ 
                        opacity: 1, 
                        x: targetX, 
                        y: targetY 
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: i * 0.1, 
                        type: "spring", 
                        stiffness: 70, 
                        damping: 12 
                      }}
                      className="absolute pointer-events-auto"
                    >
                      <div className="flex flex-col items-center group">
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-card border border-border shadow-md flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 transition-all duration-300">
                          {Icon && <Icon className="w-6 h-6 md:w-8 md:h-8" />}
                        </div>
                        
                        {/* Label */}
                        <div className="mt-2 px-2 py-1 bg-background/90 backdrop-blur-sm rounded border border-border shadow-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                          <span className="text-[10px] md:text-xs font-bold uppercase whitespace-nowrap">
                            {item.text}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
      
              {/* Background ring */}
              <div className="absolute w-[280px] h-[280px] md:w-[560px] md:h-[560px] border border-primary/5 rounded-full pointer-events-none" />
              <div className="absolute w-[180px] h-[180px] md:w-[360px] md:h-[360px] border border-primary/10 rounded-full border-dashed pointer-events-none" />
      
            </div>
          </div>
        </div>
      </section>

      {/* InnovationApproach Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.innovationApproach.title}
          </motion.h2>
    
          <div className="grid md:grid-cols-3 gap-8">
            {t.innovationApproach.cards.map((card, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 p-8 flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{card.description}</p>
                <div className="mt-6 h-1 w-0 group-hover:w-full bg-blue-500 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.cta.title}
          </motion.h2>
      
          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-8 whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t.cta.subtitle}
          </motion.p>
      
          <motion.a
            href="mailto:inquiry@functions.ltd"
            className="inline-block mt-2 px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full shadow-lg transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {t.cta.contact}
          </motion.a>
        </div>
      </section>
    </div>
  )
}
