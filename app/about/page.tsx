"use client"

import { Button } from "@/components/ui/button"
import { StatsBand } from "@/components/stats-band"
import { ArrowRight, Target, Users, Globe, Award } from "lucide-react"
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
        title: "Reimagining the Future of Indoor Environments",
        description:
          "Harness intelligent monitoring and automation to reduce energy waste, ensure compliance, and enhance comfort across every building you manage.",
      },
      mission: {
        title: "Our Mission",
        items: [
          {
            title: "Healthier Buildings",
            bullets: [
              "Reduce occupant complaints",
              "Ensure compliance to regulatory targets",
              "Deliver safer and certified indoor environments",
            ],
          },
          {
            title: "More Sustainable Operations",
            bullets: [
              "Optimize HVAC operations to deliver more with less",
              "Cost down maintenance",
              "Balance performance, energy and cost",
            ],
          },
          {
            title: "More Productive Profitable Spaces",
            bullets: [
              "Engage occupants through trust and transparency reporting",
              "Become a leader in environmental excellence",
              "Contribute to ESG goals and targets",
            ],
          },
        ],
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
        title: "WHY WORK WITH US",
        items: [
          {
            title: "Tested and Validated Technologies",
            text: "Trusted by global brands across commercial, healthcare, education, and the hospitality & retail sectors.",
          },
          {
            title: "Easy To Implement Solutions",
            text: "Innovations proven to improve wellbeing and reduce costs, easily deployable at scale.",
          },
          {
            title: "Result Focussed",
            text: "Measurable improvements in air quality, energy use, and certification outcomes.",
          },
          {
            title: "Customized Product Development and Supply",
            text: "Our solutions of filters, modules, and systems can be tailored to individual project needs.",
          },
        ],
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
      mission: {
        title: "我们的使命",
        items: [
          {
            title: "以可持续发展为核心",
            bullets: [
              "通过智能自动化减少能源浪费",
              "支持碳中和目标",
              "确保长期资源利用效率",
            ],
          },
          {
            title: "以智能赋能",
            bullets: [
              "实时环境监测",
              "基于预测分析的系统优化",
              "AI驱动的自适应控制",
            ],
          },
          {
            title: "以人为本的创新",
            bullets: [
              "提升居住与工作环境舒适度",
              "简化设施管理流程",
              "创造令人愉悦且高效的体验",
            ],
          },
        ],
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

      {/* Mission Section */}
      <section className="py-24 md:py-32 bg-card/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">{t.mission.title}</h2>
      
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {t.mission.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-card/60 shadow-sm hover:shadow-md transition-all p-8"
              >
                <h3 className="text-2xl font-semibold mb-6 text-center">{item.title}</h3>
                <ul className="list-disc pl-6 space-y-3 text-muted-foreground text-sm leading-relaxed">
                  {item.bullets.map((bullet: string, i: number) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
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

      {/* WHY WORK WITH US Section */}
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
      
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {t.whywork.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="rounded-2xl border border-border bg-card/50 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-1.5 w-12 bg-gradient-to-r from-primary/80 to-primary/40 rounded-full mb-6"></div>
                <h3 className="text-xl font-semibold mb-4 leading-snug">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FUNCTIONS Radial Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
        <div className="flex justify-center items-center" style={{ height: '700px' }}>
          <div 
            className="relative"
            style={{ 
              width: '600px', 
              height: '600px',
            }}
          >
            
            {/* Central Circle */}
            <div 
              className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/40 flex items-center justify-center font-semibold text-lg shadow-lg border border-blue-200 z-10"
              style={{
                left: '220px',
                top: '220px',
              }}
            >
              FUNCTIONS
            </div>
  
            {/* Surroundings */}
            {[
              "Air filtration for particulates, chemicals, virus and bacterias",
              "ERVs",
              "Ventilation",
              "FAN filter units",
              "Sensors and controls",
              "Energy optimization",
              "HVAC optimization",
              "Green building and sustainability consulting",
              "Waste Management",
            ].map((text, i) => {
              const angle = (i / 9) * 2 * Math.PI - Math.PI / 2;
              const x = 300 + 240 * Math.cos(angle);
              const y = 300 + 240 * Math.sin(angle);
  
              return (
                <motion.div
                  key={`item-${i}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="absolute"
                  style={{
                    left: `${x - 70}px`,
                    top: `${y - 20}px`,
                    width: '140px',
                  }}
                >
                  <div className="flex items-start gap-3 group">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full flex-shrink-0 mt-1 group-hover:w-3 group-hover:h-3 transition-all duration-300"></span>
                    <span className="text-xs md:text-sm font-medium text-slate-700 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                      {text}
                    </span>
                  </div>
                </motion.div>
              );
            })}
  
            {/* SVG lines */}
            <svg
              className="absolute inset-0 pointer-events-none"
              width="600"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
            >
              {[
                "Air filtration for particulates, chemicals, virus and bacterias",
                "ERVs",
                "Ventilation",
                "FAN filter units",
                "Sensors and controls",
                "Energy optimization",
                "HVAC optimization",
                "Green building and sustainability consulting",
                "Waste Management",
              ].map((_, i) => {
                const angle = (i / 9) * 2 * Math.PI - Math.PI / 2;
                const x = 300 + 180 * Math.cos(angle);
                const y = 300 + 180 * Math.sin(angle);
                
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1="300"
                    y1="300"
                    x2={x}
                    y2={y}
                    stroke="rgb(59, 130, 246)"
                    strokeWidth="2"
                    strokeOpacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* Legacy vs Future Section */}
      <section className="py-32 bg-gradient-to-br from-red-50 via-white to-green-50 border-t border-border relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            From <span className="text-red-600">Legacy</span> to <span className="text-green-600">Future</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start relative">
            {/* Legacy Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-red-50/80 border border-red-100 rounded-2xl shadow-sm hover:shadow-md p-10 relative z-10"
            >
              <h3 className="text-2xl font-semibold text-red-700 mb-8 text-center">Legacy</h3>
              <ul className="space-y-5 text-red-800/90">
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Practices rely on reactive methods</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Higher costs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dissatisfaction when things go wrong</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Missed opportunities</span>
                </li>
              </ul>
            </motion.div>

            {/* Arrow Transition (Center line for larger screens) */}
            <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center justify-center"
              >
                <div className="w-1 h-64 bg-gradient-to-b from-red-400 via-gray-300 to-green-400 rounded-full"></div>
                <ArrowRight className="absolute text-gray-500 w-10 h-10" />
              </motion.div>
            </div>

            {/* Future Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-green-50/80 border border-green-100 rounded-2xl shadow-sm hover:shadow-md p-10 relative z-10"
            >
              <h3 className="text-2xl font-semibold text-green-700 mb-8 text-center">Future</h3>
              <ul className="space-y-5 text-green-800/90">
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Using data to drive certification compliance is lower risk</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Use data to conduct proactive root cause analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Lower effort, higher return method</span>
                </li>
              </ul>
            </motion.div>
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
